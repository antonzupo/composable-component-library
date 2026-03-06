import { DropdownMenu } from "@/components/DropdownMenu/DropdownMenu";
import type { Components } from "@/puck/types";

const itemTypeOptions = [
  { label: "Item", value: "item" },
  { label: "Separator", value: "separator" },
  { label: "Label", value: "label" },
  { label: "Sub-menu", value: "sub" },
  { label: "Checkbox", value: "checkbox" },
  { label: "Radio group", value: "radioGroup" },
];

export const dropdownMenuPuckConfig = {
  DropdownMenu: {
    label: "Dropdown Menu",
    fields: {
      triggerLabel: {
        type: "text",
        label: "Trigger button label",
      },
      contentClassName: { type: "text", label: "Content class name" },
      items: {
        type: "array",
        label: "Menu items",
        getItemSummary: (item: {
          type: string;
          label: string;
          groupHeading?: string;
        }) => {
          if (item?.type === "separator") return "---";
          if (item?.type === "label") return `Label: ${item.label || "…"}`;
          if (item?.type === "sub") return `Sub: ${item.label || "…"}`;
          if (item?.type === "checkbox") return `☑ ${item.label || "…"}`;
          if (item?.type === "radioGroup") return `◉ Group: ${item.label || "…"}`;
          const g = item?.groupHeading ? ` (${item.groupHeading})` : "";
          return `${item?.label || "Item"}${g}`;
        },
        arrayFields: {
          type: {
            type: "select",
            label: "Type",
            options: itemTypeOptions,
          },
          label: { type: "text", label: "Label" },
          disabled: {
            type: "select",
            label: "Disabled",
            options: [
              { label: "No", value: false },
              { label: "Yes", value: true },
            ],
          },
          shortcut: { type: "text", label: "Shortcut (e.g. ⌘S)" },
          subItemsText: {
            type: "textarea",
            label: "Sub-items (one per line)",
          },
          inset: {
            type: "select",
            label: "Inset",
            options: [
              { label: "No", value: false },
              { label: "Yes", value: true },
            ],
          },
          groupHeading: { type: "text", label: "Group heading (optional)" },
          checked: {
            type: "select",
            label: "Checked (checkbox)",
            options: [
              { label: "No", value: false },
              { label: "Yes", value: true },
            ],
          },
          value: {
            type: "text",
            label: "Value (radio selected / radioGroup)",
          },
          optionsText: {
            type: "textarea",
            label: "Radio options (one per line)",
          },
        },
        defaultItemProps: () => ({
          type: "item" as const,
          label: "",
          disabled: false,
          shortcut: "",
          subItemsText: "",
          inset: false,
          groupHeading: "",
          checked: false,
          value: "",
          optionsText: "",
        }),
      },
      className: { type: "text", label: "Trigger wrapper class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      triggerLabel: "Open menu",
      contentClassName: "",
      items: [
        {
          type: "item",
          label: "Edit",
          disabled: false,
          shortcut: "⌘E",
          subItemsText: "",
          inset: false,
          groupHeading: "",
          checked: false,
          value: "",
          optionsText: "",
        },
        {
          type: "item",
          label: "Duplicate",
          disabled: false,
          shortcut: "⌘D",
          subItemsText: "",
          inset: false,
          groupHeading: "",
          checked: false,
          value: "",
          optionsText: "",
        },
        {
          type: "separator",
          label: "",
          disabled: false,
          shortcut: "",
          subItemsText: "",
          inset: false,
          groupHeading: "",
          checked: false,
          value: "",
          optionsText: "",
        },
        {
          type: "checkbox",
          label: "Show preview",
          disabled: false,
          shortcut: "",
          subItemsText: "",
          inset: false,
          groupHeading: "",
          checked: true,
          value: "",
          optionsText: "",
        },
        {
          type: "sub",
          label: "More",
          disabled: false,
          shortcut: "",
          subItemsText: "Reload\nSave as",
          inset: false,
          groupHeading: "",
          checked: false,
          value: "",
          optionsText: "",
        },
      ],
      className: "",
      id: "",
    },
    render: (props: Components["DropdownMenu"]) => (
      <DropdownMenu
        triggerLabel={props.triggerLabel || "Open menu"}
        contentClassName={props.contentClassName || undefined}
        items={props.items ?? []}
        className={props.className || undefined}
        id={props.id || undefined}
      />
    ),
  },
};
