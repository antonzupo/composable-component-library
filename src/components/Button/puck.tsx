import type { ComponentType } from "react";
import { Button } from "@/components/Button/Button";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

type ButtonProps = Components["Button"];

export const puckCategory: PuckCategory = "atoms";

export const buttonPuckConfig = {
  Button: {
    label: "Button",
    fields: {
      label: { type: "text", label: "Label (when content is empty)" },
      content: {
        type: "slot",
        label: "Content",
        allow: ["Badge", "Text"],
      },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Secondary", value: "secondary" },
          { label: "Ghost", value: "ghost" },
          { label: "Link", value: "link" },
        ],
      },
      size: {
        type: "select",
        label: "Size",
        options: [
          { label: "Default", value: "default" },
          { label: "Small", value: "sm" },
          { label: "Large", value: "lg" },
          { label: "Icon", value: "icon" },
        ],
      },
      type: {
        type: "select",
        label: "Type",
        options: [
          { label: "Button", value: "button" },
          { label: "Submit", value: "submit" },
          { label: "Reset", value: "reset" },
        ],
      },
      disabled: {
        type: "select",
        label: "Disabled",
        options: [{ label: "No", value: false }, { label: "Yes", value: true }],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
      ariaLabel: { type: "text", label: "Aria label" },
    },
    defaultProps: {
      label: "Button",
      content: [],
      variant: "default" as const,
      size: "default" as const,
      type: "button" as const,
      disabled: false,
      className: "",
      id: "",
      ariaLabel: "",
    },
    render: ({
      label = "Button",
      content = [],
      variant,
      size,
      type,
      disabled,
      className,
      id,
      ariaLabel,
    }: ButtonProps) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const hasSlotItems = Array.isArray(content) && content.length > 0;
      const displayLabel = !hasSlotItems ? (label || "Button") : null;
      return (
        <Button
          variant={variant}
          size={size}
          type={type}
          disabled={disabled}
          className={className || undefined}
          id={id || undefined}
          aria-label={ariaLabel || undefined}
        >
          {displayLabel}
          {Content ? <Content minEmptyHeight={40} /> : null}
        </Button>
      );
    },
  },
};
