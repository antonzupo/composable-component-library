import type React from "react";
import { InputGroup } from "@/components/InputGroup/InputGroup";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "atoms";

export const inputGroupPuckConfig = {
  InputGroup: {
    label: "Input Group",
    fields: {
      addonStart: { type: "text", label: "Addon (start)" },
      addonEnd: { type: "text", label: "Addon (end)" },
      placeholder: { type: "text", label: "Placeholder" },
      type: {
        type: "select",
        label: "Input type",
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
      useTextarea: {
        type: "select",
        label: "Use textarea",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
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
      addonStart: "",
      addonEnd: "",
      placeholder: "Enter value...",
      type: "text",
      useTextarea: false,
      disabled: false,
      className: "",
      id: "",
    },
    render: (props: Components["InputGroup"]) => (
      <InputGroup
        addonStart={props.addonStart || undefined}
        addonEnd={props.addonEnd || undefined}
        placeholder={props.placeholder || undefined}
        type={props.type as React.HTMLInputTypeAttribute}
        useTextarea={props.useTextarea}
        disabled={props.disabled}
        className={props.className || undefined}
        id={props.id || undefined}
      />
    ),
  },
};
