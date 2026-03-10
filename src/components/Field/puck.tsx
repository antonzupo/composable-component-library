import type { ComponentType, ReactNode } from "react";
import { Field } from "@/components/Field/Field";
import type { AreaContentProps, Components } from "@/puck/types";

const contentAllow = [
  "Typography",
  "Input",
  "InputGroup",
  "Checkbox",
  "Combobox",
  "Badge",
  "Button",
  "Image",
  "Card",
  "Flex",
  "Grid",
  "Space",
  "FieldContent",
] as const;

export const fieldPuckConfig = {
  Field: {
    label: "Field",
    fields: {
      label: { type: "text", label: "Label" },
      description: { type: "textarea", label: "Description" },
      error: { type: "text", label: "Error message" },
      orientation: {
        type: "select" as const,
        label: "Orientation",
        options: [
          { label: "Vertical", value: "vertical" },
          { label: "Horizontal", value: "horizontal" },
          { label: "Responsive", value: "responsive" },
        ],
      },
      content: {
        type: "slot" as const,
        label: "Control (e.g. Input)",
        allow: [...contentAllow],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      label: "Label",
      description: "",
      error: "",
      orientation: "vertical" as const,
      content: [],
      className: "",
      id: "",
    },
    render: ({
      label,
      description,
      error,
      orientation,
      content,
      className,
      id,
    }: Components["Field"]) => {
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasContent =
        typeof Content === "function" ||
        (Content != null && !Array.isArray(content));
      return (
        <Field
          label={label || undefined}
          description={description || undefined}
          error={error || undefined}
          orientation={orientation}
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent && typeof Content === "function" ? (
            <Content />
          ) : hasContent && Content != null && !Array.isArray(Content) ? (
            (Content as ReactNode)
          ) : undefined}
        </Field>
      );
    },
  },
};
