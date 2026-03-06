import type { ComponentType, ReactNode } from "react";
import { Fieldset } from "@/components/Fieldset/Fieldset";
import type { AreaContentProps, Components } from "@/puck/types";

const contentAllow = [
  "Field",
  "Fieldset",
  "FieldGroup",
  "FieldContent",
  "FieldSeparator",
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

export const fieldsetPuckConfig = {
  Fieldset: {
    label: "Fieldset",
    fields: {
      legend: { type: "text", label: "Legend" },
      legendVariant: {
        type: "select",
        label: "Legend variant",
        options: [
          { label: "Legend", value: "legend" },
          { label: "Label", value: "label" },
        ],
      },
      description: { type: "textarea", label: "Description" },
      content: { type: "slot", label: "Content", allow: [...contentAllow] },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      legend: "",
      legendVariant: "legend" as const,
      description: "",
      content: [],
      className: "",
      id: "",
    },
    render: ({
      legend,
      legendVariant,
      description,
      content,
      className,
      id,
    }: Components["Fieldset"]) => {
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasContent =
        typeof Content === "function" ||
        (Content != null && !Array.isArray(content));
      return (
        <Fieldset
          legend={legend || undefined}
          legendVariant={legendVariant}
          description={description || undefined}
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent && typeof Content === "function" ? (
            <Content />
          ) : hasContent && Content != null && !Array.isArray(Content) ? (
            (Content as ReactNode)
          ) : null}
        </Fieldset>
      );
    },
  },
};
