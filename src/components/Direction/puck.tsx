import type { ComponentType } from "react";
import { Direction } from "@/components/Direction/Direction";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "layout";

const SLOT_ALLOW = [
  "Text", "Badge", "Button", "Image", "Checkbox", "Card", "Accordion", "Alert",
  "AlertDialog", "AspectRatio", "Avatar", "Breadcrumb", "Calendar", "Carousel",
  "Chart", "Collapsible", "Combobox", "Command", "ContextMenu", "DataTable",
  "DatePicker", "Dialog", "Direction", "Drawer", "Flex", "Grid", "HeroCard",
  "Section", "Space",
];

export const directionPuckConfig = {
  Direction: {
    label: "Direction",
    fields: {
      dir: {
        type: "select",
        label: "Text direction",
        options: [
          { label: "Left to right (LTR)", value: "ltr" },
          { label: "Right to left (RTL)", value: "rtl" },
        ],
      },
      content: {
        type: "slot",
        label: "Content",
        allow: SLOT_ALLOW,
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      dir: "ltr" as const,
      content: [],
      className: "",
      id: "",
    },
    render: ({ dir, content, className, id }: Components["Direction"]) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const hasContent = Content && !Array.isArray(content);
      return (
        <Direction dir={dir} className={className || undefined} id={id || undefined}>
          {hasContent ? <Content /> : <span className="text-muted-foreground">Add content</span>}
        </Direction>
      );
    },
  },
};
