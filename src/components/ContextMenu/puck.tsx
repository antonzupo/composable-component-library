import type { ComponentType } from "react";
import { ContextMenu } from "@/components/ContextMenu/ContextMenu";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

const itemTypeOptions = [
  { label: "Item", value: "item" },
  { label: "Separator", value: "separator" },
  { label: "Label", value: "label" },
  { label: "Sub-menu", value: "sub" },
  { label: "Checkbox", value: "checkbox" },
  { label: "Radio group", value: "radioGroup" },
];

export const contextMenuPuckConfig = {
  ContextMenu: {
    label: "Context Menu",
    fields: {
      trigger: {
        type: "slot",
        label: "Trigger (right-click area)",
        allow: [
          "Text",
          "Badge",
          "Button",
          "Image",
          "Checkbox",
          "Card",
          "Accordion",
          "Alert",
          "AspectRatio",
          "Avatar",
          "Breadcrumb",
          "Calendar",
          "Carousel",
          "Chart",
          "Collapsible",
          "Combobox",
          "Command",
          "Dialog",
          "Flex",
          "Grid",
          "HeroCard",
          "Section",
          "Space",
        ],
      },
      modal: {
        type: "select",
        label: "Modal",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
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
      className: { type: "text", label: "Trigger class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      trigger: [],
      modal: true,
      contentClassName: "",
      items: [
        {
          type: "item",
          label: "Back",
          disabled: false,
          shortcut: "⌘[",
          subItemsText: "",
          inset: false,
          groupHeading: "",
          checked: false,
          value: "",
          optionsText: "",
        },
        {
          type: "item",
          label: "Forward",
          disabled: false,
          shortcut: "⌘]",
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
          label: "Show toolbar",
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
          type: "radioGroup",
          label: "View",
          disabled: false,
          shortcut: "",
          subItemsText: "",
          inset: false,
          groupHeading: "View",
          checked: false,
          value: "Compact",
          optionsText: "Compact\nWide",
        },
        {
          type: "sub",
          label: "More",
          disabled: false,
          shortcut: "",
          subItemsText: "Reload\nSave",
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
    render: ({
      trigger,
      modal,
      contentClassName,
      items,
      className,
      id,
    }: Components["ContextMenu"]) => {
      const TriggerContent = trigger as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const isEmpty = !TriggerContent || Array.isArray(trigger);
      return (
        <ContextMenu
          trigger={isEmpty ? undefined : <TriggerContent />}
          modal={modal}
          contentClassName={contentClassName || undefined}
          items={items}
          className={className || undefined}
          id={id || undefined}
        />
      );
    },
  },
};
