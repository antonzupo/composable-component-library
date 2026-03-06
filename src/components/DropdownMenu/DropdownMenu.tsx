"use client";

import * as React from "react";
import {
  DropdownMenu as UIDropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface DropdownMenuItemConfig {
  type: "item" | "separator" | "label" | "sub" | "checkbox" | "radioGroup";
  label?: string;
  disabled?: boolean;
  shortcut?: string;
  subItemsText?: string;
  inset?: boolean;
  groupHeading?: string;
  checked?: boolean;
  value?: string;
  optionsText?: string;
}

export interface DropdownMenuProps {
  trigger?: React.ReactNode;
  triggerLabel?: string;
  contentClassName?: string;
  items?: DropdownMenuItemConfig[];
  className?: string;
  id?: string;
}

function renderItem(entry: DropdownMenuItemConfig, index: number) {
  if (entry.type === "separator") {
    return <DropdownMenuSeparator key={index} />;
  }
  if (entry.type === "label") {
    return (
      <DropdownMenuLabel key={index} inset={entry.inset}>
        {entry.label ?? ""}
      </DropdownMenuLabel>
    );
  }
  if (entry.type === "sub") {
    const subLabels = (entry.subItemsText ?? "")
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (subLabels.length === 0) return null;
    return (
      <DropdownMenuSub key={index}>
        <DropdownMenuSubTrigger inset={entry.inset}>
          {entry.label ?? ""}
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          {subLabels.map((label, subIndex) => (
            <DropdownMenuItem key={subIndex}>{label}</DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    );
  }
  if (entry.type === "checkbox") {
    return (
      <DropdownMenuCheckboxItem
        key={index}
        checked={entry.checked}
        disabled={entry.disabled}
      >
        {entry.label ?? ""}
        {entry.shortcut && (
          <DropdownMenuShortcut>{entry.shortcut}</DropdownMenuShortcut>
        )}
      </DropdownMenuCheckboxItem>
    );
  }
  if (entry.type === "radioGroup") {
    const options = (entry.optionsText ?? "")
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (options.length === 0) return null;
    const value = entry.value?.trim() || options[0];
    return (
      <DropdownMenuRadioGroup key={index} value={value}>
        {options.map((opt) => (
          <DropdownMenuRadioItem key={opt} value={opt} disabled={entry.disabled}>
            {opt}
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuRadioGroup>
    );
  }
  if (entry.type === "item") {
    return (
      <DropdownMenuItem key={index} disabled={entry.disabled} inset={entry.inset}>
        {entry.label ?? ""}
        {entry.shortcut && (
          <DropdownMenuShortcut>{entry.shortcut}</DropdownMenuShortcut>
        )}
      </DropdownMenuItem>
    );
  }
  return null;
}

export function DropdownMenu({
  trigger,
  triggerLabel = "Open menu",
  contentClassName,
  items = [],
  className,
  id,
}: DropdownMenuProps) {
  const contentWithGroups = React.useMemo(() => {
    const result: React.ReactNode[] = [];
    let currentGroupHeading: string | null = null;
    let groupItems: React.ReactNode[] = [];

    const flushGroup = () => {
      if (groupItems.length > 0) {
        result.push(
          <DropdownMenuGroup key={result.length}>
            {currentGroupHeading && (
              <DropdownMenuLabel>{currentGroupHeading}</DropdownMenuLabel>
            )}
            {groupItems}
          </DropdownMenuGroup>
        );
        groupItems = [];
        currentGroupHeading = null;
      }
    };

    items.forEach((entry, index) => {
      const node = renderItem(entry, index);
      if (node == null) return;

      const heading = (entry.groupHeading ?? "").trim();
      if (heading) {
        if (currentGroupHeading !== heading) {
          flushGroup();
          currentGroupHeading = heading;
        }
        groupItems.push(node);
      } else {
        flushGroup();
        result.push(node);
      }
    });
    flushGroup();
    return result;
  }, [items]);

  const hasCustomTrigger =
    trigger != null &&
    !Array.isArray(trigger) &&
    React.Children.count(trigger) > 0;
  const triggerNode = hasCustomTrigger ? (
    <>{trigger}</>
  ) : (
    <Button type="button" variant="outline" size="sm">
      {triggerLabel}
    </Button>
  );

  const needsWrapper = (id != null && id !== "") || (className != null && className !== "");
  const triggerElement = needsWrapper ? (
    <span id={id || undefined} className={cn("inline-block", className)}>
      {triggerNode}
    </span>
  ) : (
    triggerNode
  );

  return (
    <UIDropdownMenu>
      <DropdownMenuTrigger asChild>
        {triggerElement}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={contentClassName}>
        {contentWithGroups}
      </DropdownMenuContent>
    </UIDropdownMenu>
  );
}
