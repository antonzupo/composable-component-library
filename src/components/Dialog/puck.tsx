import type { ComponentType } from "react";
import { DialogContent } from "@/components/Dialog/Dialog";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

const SLOT_ALLOW = [
  "Text", "Badge", "Button", "Image", "Checkbox", "Card", "Accordion", "Alert",
  "AlertDialog", "AspectRatio", "Avatar", "Breadcrumb", "Calendar", "Carousel",
  "Chart", "Collapsible", "Combobox", "Command", "ContextMenu", "DataTable",
  "DatePicker", "Dialog", "Direction", "Drawer", "Flex", "Grid", "HeroCard",
  "Section", "Space",
];

export const dialogPuckConfig = {
  Dialog: {
    label: "Dialog",
    fields: {
      title: { type: "text", label: "Title" },
      description: { type: "textarea", label: "Description" },
      content: {
        type: "slot",
        label: "Content",
        allow: SLOT_ALLOW,
      },
      showClose: {
        type: "select",
        label: "Show close button",
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
      title: "Dialog title",
      description: "Dialog description goes here.",
      content: [],
      showClose: true,
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
      showClose,
      titleAlign,
      descriptionAlign,
      rounded,
      padding,
      className,
      id,
    }: Components["Dialog"]) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const hasContent = Content && !Array.isArray(content);
      return (
        <DialogContent
          title={title}
          description={description}
          showClose={showClose}
          titleAlign={titleAlign}
          descriptionAlign={descriptionAlign}
          rounded={rounded}
          padding={padding}
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent ? <Content /> : null}
        </DialogContent>
      );
    },
  },
};
