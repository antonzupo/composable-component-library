import type { ComponentType } from "react";
import { ContextMenu } from "@/components/ContextMenu/ContextMenu";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

const SLOT_ALLOW = [
  "Text", "Badge", "Button", "Image", "Checkbox", "Card", "Accordion", "Alert",
  "AlertDialog", "AspectRatio", "Avatar", "Breadcrumb", "Calendar", "Carousel",
  "Chart", "Collapsible", "Combobox", "Command", "ContextMenu", "DataTable",
  "DatePicker", "Dialog", "Direction", "Drawer", "Flex", "Grid", "HeroCard",
  "Section", "Space",
];

export const contextMenuPuckConfig = {
  ContextMenu: {
    label: "Context Menu",
    fields: {
      items: {
        type: "array",
        label: "Menu items",
        getItemSummary: (item: { label: string }) => item?.label ?? "Item",
        arrayFields: {
          label: { type: "text", label: "Label" },
          shortcut: { type: "text", label: "Shortcut" },
          disabled: {
            type: "select",
            label: "Disabled",
            options: [
              { label: "No", value: false },
              { label: "Yes", value: true },
            ],
          },
        },
      },
      triggerContent: {
        type: "slot",
        label: "Trigger content",
        allow: SLOT_ALLOW,
      },
      side: {
        type: "select",
        label: "Side",
        options: [
          { label: "Top", value: "top" },
          { label: "Right", value: "right" },
          { label: "Bottom", value: "bottom" },
          { label: "Left", value: "left" },
        ],
      },
      align: {
        type: "select",
        label: "Align",
        options: [
          { label: "Start", value: "start" },
          { label: "Center", value: "center" },
          { label: "End", value: "end" },
        ],
      },
      rounded: {
        type: "select",
        label: "Rounded",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
          { label: "Full", value: "full" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      items: [] as Components["ContextMenu"]["items"],
      triggerContent: [],
      side: "bottom" as const,
      align: "start" as const,
      rounded: "md" as const,
      className: "",
      id: "",
    },
    render: ({
      items,
      triggerContent,
      side,
      align,
      rounded,
      className,
      id,
    }: Components["ContextMenu"]) => {
      const Content = triggerContent as unknown as ComponentType<AreaContentProps> | undefined;
      const hasContent = Content && !Array.isArray(triggerContent);
      return (
        <ContextMenu
          items={items}
          side={side}
          align={align}
          rounded={rounded}
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent ? <Content /> : null}
        </ContextMenu>
      );
    },
  },
};
