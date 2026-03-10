import type React from "react";
import { Input } from "@/components/Input/Input";
import type { Components } from "@/puck/types";

type InputProps = Components["Input"];

export const inputPuckConfig = {
  Input: {
    label: "Input",
    fields: {
      type: {
        type: "select" as const,
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
      placeholder: { type: "text" as const, label: "Placeholder" },
      defaultValue: { type: "text" as const, label: "Default value" },
      disabled: {
        type: "radio" as const,
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text" as const, label: "Class name" },
      id: { type: "text" as const, label: "ID" },
    },
    defaultProps: {
      type: "text",
      placeholder: "Enter value...",
      defaultValue: "",
      disabled: false,
      className: "",
      id: "",
    } satisfies InputProps,
    render: ({
      type,
      placeholder,
      defaultValue,
      disabled,
      className,
      id,
    }: InputProps) => (
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
