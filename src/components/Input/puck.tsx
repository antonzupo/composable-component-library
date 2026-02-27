import type React from "react";
import { Input } from "@/components/Input/Input";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "atoms";

export const inputPuckConfig = {
  Input: {
    label: "Input",
    fields: {
      type: {
        type: "select",
        label: "Type",
        options: [
          { label: "Text", value: "text" },
          { label: "Email", value: "email" },
          { label: "Password", value: "password" },
          { label: "Search", value: "search" },
          { label: "Number", value: "number" },
          { label: "Tel", value: "tel" },
          { label: "URL", value: "url" },
        ],
      },
      placeholder: { type: "text", label: "Placeholder" },
      defaultValue: { type: "text", label: "Default value" },
      disabled: {
        type: "select",
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      type: "text",
      placeholder: "Enter value...",
      defaultValue: "",
      disabled: false,
      className: "",
      id: "",
    },
    render: ({
      type,
      placeholder,
      defaultValue,
      disabled,
      className,
      id,
    }: Components["Input"]) => (
      <Input
        type={type as React.HTMLInputTypeAttribute}
        placeholder={placeholder || undefined}
        defaultValue={defaultValue || undefined}
        disabled={disabled}
        className={className || undefined}
        id={id || undefined}
      />
    ),
  },
};
