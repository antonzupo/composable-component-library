import type { ComponentType, ReactNode } from "react";
import { FieldGroup } from "@/components/FieldGroup/FieldGroup";
import type { AreaContentProps, Components } from "@/puck/types";

const contentAllow = [
  "Field",
  "Fieldset",
  "FieldGroup",
  "FieldContent",
  "FieldSeparator",
  "Typography",
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

export const fieldGroupPuckConfig = {
  FieldGroup: {
    label: "Field Group",
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
    }: Components["FieldGroup"]) => {
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasContent =
        typeof Content === "function" ||
        (Content != null && !Array.isArray(content));
      return (
        <FieldGroup
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent && typeof Content === "function" ? (
            <Content />
          ) : hasContent && Content != null && !Array.isArray(Content) ? (
            (Content as ReactNode)
          ) : null}
        </FieldGroup>
      );
    },
  },
};
