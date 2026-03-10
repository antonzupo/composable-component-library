import type React from "react";
import { iconNames } from "lucide-react/dynamic";
import { InputGroup } from "@/components/InputGroup/InputGroup";
import type { Components } from "@/puck/types";

const lucideIconOptions = [
  { label: "(none)", value: "" },
  ...[...iconNames]
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({ label: name, value: name })),
];

const addonAlignOptions = [
  { label: "Inline start", value: "inline-start" },
  { label: "Inline end", value: "inline-end" },
  { label: "Block start (above)", value: "block-start" },
  { label: "Block end (below)", value: "block-end" },
];

export const inputGroupPuckConfig = {
  InputGroup: {
    label: "Input Group",
    fields: {
      addonStart: { type: "text", label: "Addon (start) text" },
      addonEnd: { type: "text", label: "Addon (end) text" },
      addonStartAlign: {
        type: "select" as const,
        label: "Addon (start) align",
        options: addonAlignOptions,
      },
      addonEndAlign: {
        type: "select" as const,
        label: "Addon (end) align",
        options: addonAlignOptions,
      },
      addonStartType: {
        type: "radio" as const,
        label: "Addon (start) type",
        options: [
          { label: "Text", value: "text" },
          { label: "Icon", value: "icon" },
        ],
      },
      addonEndType: {
        type: "radio" as const,
        label: "Addon (end) type",
        options: [
          { label: "Text", value: "text" },
          { label: "Icon", value: "icon" },
        ],
      },
      addonStartIcon: {
        type: "select" as const,
        label: "Addon (start) icon",
        options: lucideIconOptions,
      },
      addonEndIcon: {
        type: "select" as const,
        label: "Addon (end) icon",
        options: lucideIconOptions,
      },
      placeholder: { type: "text", label: "Placeholder" },
      type: {
        type: "select" as const,
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
        type: "radio" as const,
        label: "Use textarea",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      disabled: {
        type: "radio" as const,
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
      addonStartAlign: "inline-start",
      addonEndAlign: "inline-end",
      addonStartType: "text",
      addonEndType: "text",
      addonStartIcon: "",
      addonEndIcon: "",
      placeholder: "Enter value...",
      type: "text",
      useTextarea: false,
      disabled: false,
      className: "",
      id: "",
    },
    render: (props: Components["InputGroup"]) => (
      <InputGroup
        addonStart={props.addonStart}
        addonEnd={props.addonEnd}
        addonStartAlign={props.addonStartAlign}
        addonEndAlign={props.addonEndAlign}
        addonStartType={props.addonStartType}
        addonEndType={props.addonEndType}
        addonStartIcon={props.addonStartIcon}
        addonEndIcon={props.addonEndIcon}
        placeholder={props.placeholder}
        type={props.type as React.HTMLInputTypeAttribute}
        useTextarea={props.useTextarea}
        disabled={props.disabled}
        className={props.className}
        id={props.id}
      />
    ),
  },
};
