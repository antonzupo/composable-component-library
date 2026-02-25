import type { ComponentType } from "react";
import { DrawerContent } from "@/components/Drawer/Drawer";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

const SLOT_ALLOW = [
  "Text", "Badge", "Button", "Image", "Checkbox", "Card", "Accordion", "Alert",
  "AlertDialog", "AspectRatio", "Avatar", "Breadcrumb", "Calendar", "Carousel",
  "Chart", "Collapsible", "Combobox", "Command", "ContextMenu", "DataTable",
  "DatePicker", "Dialog", "Direction", "Drawer", "Flex", "Grid", "HeroCard",
  "Section", "Space",
];

export const drawerPuckConfig = {
  Drawer: {
    label: "Drawer",
    fields: {
      title: { type: "text", label: "Title" },
      description: { type: "textarea", label: "Description" },
      content: {
        type: "slot",
        label: "Content",
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
      showHandle: {
        type: "select",
        label: "Show handle",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      titleAlign: {
        type: "select",
        label: "Title alignment",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ],
      },
      descriptionAlign: {
        type: "select",
        label: "Description alignment",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
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
      padding: {
        type: "select",
        label: "Padding",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      title: "Drawer title",
      description: "Drawer description.",
      content: [],
      side: "right" as const,
      showHandle: true,
      titleAlign: "left" as const,
      descriptionAlign: "left" as const,
      rounded: "lg" as const,
      padding: "md" as const,
      className: "",
      id: "",
    },
    render: ({
      title,
      description,
      content,
      side,
      showHandle,
      titleAlign,
      descriptionAlign,
      rounded,
      padding,
      className,
      id,
    }: Components["Drawer"]) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const hasContent = Content && !Array.isArray(content);
      return (
        <div className="relative min-h-[120px] rounded-lg border border-dashed border-border bg-muted/20 p-4">
          <span className="text-xs text-muted-foreground">Drawer (side: {side})</span>
          <DrawerContent
            title={title}
            description={description}
            side={side}
            showHandle={showHandle}
            titleAlign={titleAlign}
            descriptionAlign={descriptionAlign}
            rounded={rounded}
            padding={padding}
            className={cn("relative !inset-auto !mt-2 block border", className || undefined)}
            id={id}
          >
            {hasContent ? <Content /> : <span className="text-muted-foreground">Add content</span>}
          </DrawerContent>
        </div>
      );
    },
  },
};
