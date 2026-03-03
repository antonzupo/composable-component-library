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
import type { Components } from "@/puck/types";

type MenubarMenuItem = Components["Menubar"]["menus"][number]["items"][number];

const itemTypeOptions = [
  { label: "Item", value: "item" },
  { label: "Separator", value: "separator" },
  { label: "Label", value: "label" },
  { label: "Checkbox", value: "checkbox" },
  { label: "Radio group", value: "radioGroup" },
  { label: "Sub-menu", value: "sub" },
];

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

const menuItemArrayFields = {
  type: {
    type: "select" as const,
    label: "Type",
    options: itemTypeOptions,
  },
  label: { type: "text" as const, label: "Label" },
  disabled: {
    type: "select" as const,
    label: "Disabled",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  shortcut: { type: "text" as const, label: "Shortcut (e.g. ⌘S)" },
  inset: {
    type: "select" as const,
    label: "Inset",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  checked: {
    type: "select" as const,
    label: "Checked (checkbox)",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  value: { type: "text" as const, label: "Selected value (radio)" },
  optionsText: {
    type: "textarea" as const,
    label: "Radio options (one per line)",
  },
  subItemsText: {
    type: "textarea" as const,
    label: "Sub-menu items (one per line)",
  },
};

export const menubarPuckConfig = {
  Menubar: {
    label: "Menubar",
    fields: {
      menus: {
        type: "array",
        label: "Menus",
        getItemSummary: (item: { trigger?: string }) => item?.trigger ?? "Menu",
        arrayFields: {
          trigger: { type: "text", label: "Trigger label" },
          items: {
            type: "array",
            label: "Menu items",
            getItemSummary: (item: MenubarMenuItem) => {
              if (!item) return "Item";
              if (item.type === "separator") return "---";
              if (item.type === "label") return `Label: ${item.label || "…"}`;
              if (item.type === "sub") return `Sub: ${item.label || "…"}`;
              if (item.type === "checkbox") return `☑ ${item.label || "…"}`;
              if (item.type === "radioGroup") return `◉ ${item.label || "Radio"}`;
              return item.label || "Item";
            },
            arrayFields: menuItemArrayFields,
            defaultItemProps: (): MenubarMenuItem => ({
              type: "item",
              label: "",
              disabled: false,
              shortcut: "",
              inset: false,
              checked: false,
              value: "",
              optionsText: "",
              subItemsText: "",
            }),
          },
        },
        defaultItemProps: () => ({
          trigger: "Menu",
          items: [
            {
              type: "item" as const,
              label: "Item 1",
              disabled: false,
              shortcut: "",
              inset: false,
              checked: false,
              value: "",
              optionsText: "",
              subItemsText: "",
            },
            {
              type: "item" as const,
              label: "Item 2",
              disabled: false,
              shortcut: "",
              inset: false,
              checked: false,
              value: "",
              optionsText: "",
              subItemsText: "",
            },
          ],
        }),
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      menus: [
        {
          trigger: "File",
          items: [
            { type: "item", label: "New", disabled: false, shortcut: "⌘N", inset: false, checked: false, value: "", optionsText: "", subItemsText: "" },
            { type: "item", label: "Open", disabled: false, shortcut: "⌘O", inset: false, checked: false, value: "", optionsText: "", subItemsText: "" },
            { type: "separator", label: "", disabled: false, shortcut: "", inset: false, checked: false, value: "", optionsText: "", subItemsText: "" },
            { type: "checkbox", label: "Show preview", disabled: false, shortcut: "", inset: false, checked: true, value: "", optionsText: "", subItemsText: "" },
          ],
        },
        {
          trigger: "Edit",
          items: [
            { type: "item", label: "Undo", disabled: false, shortcut: "⌘Z", inset: false, checked: false, value: "", optionsText: "", subItemsText: "" },
            { type: "sub", label: "More", disabled: false, shortcut: "", inset: false, checked: false, value: "", optionsText: "", subItemsText: "Reload\nSave as" },
            { type: "radioGroup", label: "View", disabled: false, shortcut: "", inset: false, checked: false, value: "list", optionsText: "list\ngrid", subItemsText: "" },
          ],
        },
      ],
      className: "",
      id: "",
    },
    render: ({ menus, className, id }: Components["Menubar"]) => (
      <MenubarRoot className={className || undefined} id={id || undefined}>
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
    ),
  },
};
