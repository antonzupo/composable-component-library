import type { ComponentType } from "react";
import { Empty } from "@/components/Empty/Empty";
import type { AreaContentProps, Components } from "@/puck/types";

const slotAllow = [
  "Text",
  "Badge",
  "Button",
  "Image",
  "Checkbox",
  "Card",
  "Accordion",
  "Alert",
  "AlertDialog",
  "AspectRatio",
  "Avatar",
  "Breadcrumb",
  "Calendar",
  "Carousel",
  "Chart",
  "Collapsible",
  "Combobox",
  "Command",
  "ContextMenu",
  "Dialog",
  "DropdownMenu",
  "Empty",
  "Field",
  "HoverCard",
  "Input",
  "InputGroup",
  "Flex",
  "Grid",
  "HeroCard",
  "Section",
  "Space",
] as const;

export const emptyPuckConfig = {
  Empty: {
    label: "Empty",
    fields: {
      title: { type: "text", label: "Title" },
      description: { type: "textarea", label: "Description" },
      mediaVariant: {
        type: "select",
        label: "Media style",
        options: [
          { label: "Default", value: "default" },
          { label: "Icon", value: "icon" },
        ],
      },
      content: {
        type: "slot",
        label: "Content (e.g. action button below text)",
        allow: [...slotAllow],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      title: "No results",
      description: "Get started by adding content.",
      mediaVariant: "icon" as const,
      content: [],
      className: "",
      id: "",
    },
    render: ({
      title,
      description,
      mediaVariant,
      content,
      className,
      id,
    }: Components["Empty"]) => {
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasContent =
        Content && !Array.isArray(content);
      return (
        <Empty
          title={title || "No results"}
          description={description || undefined}
          mediaVariant={mediaVariant}
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent ? <Content /> : undefined}
        </Empty>
      );
    },
  },
};
