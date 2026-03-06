import type { ComponentType, ReactNode } from "react";
import { FieldContent } from "@/components/FieldContent/FieldContent";
import type { AreaContentProps, Components } from "@/puck/types";

const contentAllow = [
  "Field",
  "Text",
  "Input",
  "InputGroup",
  "Checkbox",
  "Combobox",
  "Badge",
  "Button",
  "Flex",
  "Grid",
  "Space",
] as const;

export const fieldContentPuckConfig = {
  FieldContent: {
    label: "Field Content",
    fields: {
      content: { type: "slot", label: "Content", allow: [...contentAllow] },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      content: [],
      className: "",
      id: "",
    },
    render: ({
      content,
      className,
      id,
    }: Components["FieldContent"]) => {
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasContent =
        typeof Content === "function" ||
        (Content != null && !Array.isArray(content));
      return (
        <FieldContent
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent && typeof Content === "function" ? (
            <Content />
          ) : hasContent && Content != null && !Array.isArray(Content) ? (
            (Content as ReactNode)
          ) : (
            <span className="text-muted-foreground text-sm">
              Add control or content
            </span>
          )}
        </FieldContent>
      );
    },
  },
};
