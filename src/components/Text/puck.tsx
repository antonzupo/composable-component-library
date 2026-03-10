import { Text } from "@/components/Text/Text";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export const textPuckConfig = {
  Text: {
    label: "Text",
    fields: {
      content: { type: "textarea", label: "Content" },
      as: {
        type: "select" as const,
        label: "Element",
        options: [
          { label: "Paragraph", value: "p" },
          { label: "Span", value: "span" },
          { label: "Heading 1", value: "h1" },
          { label: "Heading 2", value: "h2" },
          { label: "Heading 3", value: "h3" },
          { label: "Label", value: "label" },
        ],
      },
      align: {
        type: "select" as const,
        label: "Alignment",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      content: "Text block",
      as: "p" as const,
      align: "left" as const,
      className: "",
      id: "",
    },
    render: ({ content, as, align, className, id }: Components["Text"]) => (
      <div className={cn("w-full", align === "center" && "text-center", align === "right" && "text-right")}>
        <Text as={as} className={className || undefined} id={id || undefined}>
          {content}
        </Text>
      </div>
    ),
  },
};
