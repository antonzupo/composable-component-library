import * as React from "react";
import {
  Menubar as MenubarRoot,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type MenubarProps = Components["Menubar"];

type MenubarMenuItem = MenubarProps["menus"][number]["items"][number];

function renderMenubarItem(entry: MenubarMenuItem, index: number): React.ReactNode {
  if (entry.type === "separator") {
    return <MenubarSeparator key={index} />;
  }
  if (entry.type === "label") {
    return (
      <MenubarLabel key={index} inset={entry.inset}>
        {entry.label}
      </MenubarLabel>
    );
  }
  if (entry.type === "sub") {
    const subLabels = (entry.subItemsText ?? "")
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    return (
      <MenubarSub key={index}>
        <MenubarSubTrigger inset={entry.inset}>{entry.label}</MenubarSubTrigger>
        <MenubarSubContent>
          {subLabels.length > 0 ? (
            subLabels.map((label, j) => (
              <MenubarItem key={j}>{label}</MenubarItem>
            ))
          ) : (
            <MenubarItem disabled>Add items below</MenubarItem>
          )}
        </MenubarSubContent>
      </MenubarSub>
    );
  }
  if (entry.type === "checkbox") {
    return (
      <MenubarCheckboxItem
        key={index}
        checked={entry.checked}
        disabled={entry.disabled}
      >
        {entry.label}
        {entry.shortcut ? (
          <MenubarShortcut>{entry.shortcut}</MenubarShortcut>
        ) : null}
      </MenubarCheckboxItem>
    );
  }
  if (entry.type === "radioGroup") {
    const options = (entry.optionsText ?? "")
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    const value = (entry.value ?? "").trim() || (options[0] ?? "");
    if (options.length === 0) {
      return (
        <MenubarRadioGroup key={index} value={value}>
          <MenubarRadioItem value="__placeholder__" disabled>
            Add options below
          </MenubarRadioItem>
        </MenubarRadioGroup>
      );
    }
    return (
      <MenubarRadioGroup key={index} value={value}>
        {options.map((opt) => (
          <MenubarRadioItem key={opt} value={opt} disabled={entry.disabled}>
            {opt}
          </MenubarRadioItem>
        ))}
      </MenubarRadioGroup>
    );
  }
  return (
    <MenubarItem key={index} disabled={entry.disabled} inset={entry.inset}>
      {entry.label}
      {entry.shortcut ? (
        <MenubarShortcut>{entry.shortcut}</MenubarShortcut>
      ) : null}
    </MenubarItem>
  );
}

export function Menubar(props: MenubarProps) {
  const { menus, className, id } = props;
  return (
    <MenubarRoot
      className={cn(className)}
      id={id || undefined}
    >
      {menus.map((menu, i) => (
        <MenubarMenu key={i}>
          <MenubarTrigger>{menu.trigger}</MenubarTrigger>
          <MenubarContent>
            {(menu.items ?? []).map((entry, j) =>
              renderMenubarItem(entry, j)
            )}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </MenubarRoot>
  );
}
