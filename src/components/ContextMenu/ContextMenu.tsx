import * as React from "react";
import {
  ContextMenu as UIContextMenu,
  ContextMenuContent,
  ContextMenuCheckboxItem,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

export interface ContextMenuItemConfig {
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

export interface ContextMenuProps {
  trigger?: React.ReactNode;
  modal?: boolean;
  contentClassName?: string;
  items?: ContextMenuItemConfig[];
  className?: string;
  id?: string;                                                                                                                              
}

function renderItem(entry: ContextMenuItemConfig, index: number) {
  if (entry.type === "separator") {
    return <ContextMenuSeparator key={index} />;
  }
  if (entry.type === "label") {
    return (
      <ContextMenuLabel key={index} inset={entry.inset}>
        {entry.label ?? ""}
      </ContextMenuLabel>
    );
  }
  if (entry.type === "sub") {
    const subLabels = (entry.subItemsText ?? "")
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (subLabels.length === 0) return null;
    return (
      <ContextMenuSub key={index}>
        <ContextMenuSubTrigger inset={entry.inset}>
          {entry.label ?? ""}
        </ContextMenuSubTrigger>
        <ContextMenuSubContent>
          {subLabels.map((label, subIndex) => (
            <ContextMenuItem key={subIndex}>{label}</ContextMenuItem>
          ))}
        </ContextMenuSubContent>
      </ContextMenuSub>
    );
  }
  if (entry.type === "checkbox") {
    return (
      <ContextMenuCheckboxItem
        key={index}
        checked={entry.checked}
        disabled={entry.disabled}
      >
        {entry.label ?? ""}
        {entry.shortcut && (
          <ContextMenuShortcut>{entry.shortcut}</ContextMenuShortcut>
        )}
      </ContextMenuCheckboxItem>
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
      <ContextMenuRadioGroup key={index} value={value}>
        {options.map((opt) => (
          <ContextMenuRadioItem key={opt} value={opt} disabled={entry.disabled}>
            {opt}
          </ContextMenuRadioItem>
        ))}
      </ContextMenuRadioGroup>
    );
  }
  if (entry.type === "item") {
    return (
      <ContextMenuItem key={index} disabled={entry.disabled} inset={entry.inset}>
        {entry.label ?? ""}
        {entry.shortcut && (
          <ContextMenuShortcut>{entry.shortcut}</ContextMenuShortcut>
        )}
      </ContextMenuItem>
    );
  }
  return null;
}

export function ContextMenu({
  trigger,
  modal = true,
  contentClassName,
  items = [],
  className,
  id,
}: ContextMenuProps) {
  const [open, setOpen] = React.useState(false);

  const contentWithGroups = React.useMemo(() => {
    const result: React.ReactNode[] = [];
    let currentGroupHeading: string | null = null;
    let groupItems: React.ReactNode[] = [];

    const flushGroup = () => {
      if (groupItems.length > 0) {
        result.push(
          <ContextMenuGroup key={result.length}>
            {currentGroupHeading && (
              <ContextMenuLabel>{currentGroupHeading}</ContextMenuLabel>
            )}
            {groupItems}
          </ContextMenuGroup>
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

  return (
    <UIContextMenu
      {...({
        open,
        onOpenChange: setOpen,
        modal,
      } as React.ComponentProps<typeof UIContextMenu>)}
    >
      <ContextMenuTrigger asChild>
        <div
          id={id}
          role="button"
          tabIndex={0}
          className={cn(
            "cursor-context-menu select-none outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md",
            trigger
              ? "inline-block min-h-[2rem] min-w-[2rem]"
              : "flex min-h-[80px] min-w-[120px] items-center justify-center rounded-md border border-dashed border-muted-foreground/25 p-4",
            className
          )}
          onClick={(e) => {
            e.preventDefault();
            setOpen((prev) => !prev);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen((prev) => !prev);
            }
          }}
        >
          {trigger ?? (
            <span className="text-muted-foreground text-sm">
              Right-click or click here
            </span>
          )}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className={contentClassName}>
        {contentWithGroups}
      </ContextMenuContent>
    </UIContextMenu>
  );
}
