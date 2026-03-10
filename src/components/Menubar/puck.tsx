import { Menubar } from "@/components/Menubar/Menubar";
import type { Components } from "@/puck/types";

type MenubarProps = Components["Menubar"];
type MenubarMenuItem = MenubarProps["menus"][number]["items"][number];

const itemTypeOptions = [
  { label: "Item", value: "item" },
  { label: "Separator", value: "separator" },
  { label: "Label", value: "label" },
  { label: "Checkbox", value: "checkbox" },
  { label: "Radio group", value: "radioGroup" },
  { label: "Sub-menu", value: "sub" },
];

const menuItemArrayFields = {
  type: {
    type: "select" as const,
    label: "Type",
    options: itemTypeOptions,
  },
  label: { type: "text" as const, label: "Label" },
  disabled: {
    type: "radio" as const,
    label: "Disabled",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  shortcut: { type: "text" as const, label: "Shortcut (e.g. ⌘S)" },
  inset: {
    type: "radio" as const,
    label: "Inset",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  checked: {
    type: "radio" as const,
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
        type: "array" as const,
        label: "Menus",
        getItemSummary: (item: { trigger?: string }) => item?.trigger ?? "Menu",
        arrayFields: {
          trigger: { type: "text", label: "Trigger label" },
          items: {
            type: "array" as const,
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
    } satisfies MenubarProps,
    render: (props: MenubarProps) => <Menubar {...props} />,
  },
};
