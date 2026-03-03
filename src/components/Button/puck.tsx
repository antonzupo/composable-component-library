import React, { type ComponentType } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { iconNames } from "lucide-react/dynamic";
import { Button } from "@/components/Button/Button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

type ButtonProps = Components["Button"];

const lucideIconOptions = [
  { label: "— None —", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

export const buttonPuckConfig = {
  Button: {
    label: "Button",
    fields: {
      contentMode: {
        type: "select",
        label: "Button content",
        options: [
          { label: "Text", value: "text" },
          { label: "Icon", value: "icon" },
          { label: "Text and icon", value: "both" },
        ],
      },
      label: { type: "text", label: "Label (when content is empty)" },
      content: {
        type: "slot",
        label: "Content",
        allow: ["Badge", "Text"],
      },
      icon: {
        type: "select",
        label: "Icon",
        options: lucideIconOptions,
      },
      iconPosition: {
        type: "select",
        label: "Icon position",
        options: [
          { label: "Start", value: "start" },
          { label: "End", value: "end" },
        ],
      },
      roundedFull: {
        type: "select",
        label: "Rounded",
        options: [
          { label: "Default", value: false },
          { label: "Full", value: true },
        ],
      },
      showSpinner: {
        type: "select",
        label: "Show spinner (loading)",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      spinnerPosition: {
        type: "select",
        label: "Spinner position",
        options: [
          { label: "Start", value: "start" },
          { label: "End", value: "end" },
        ],
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
      contentMode: "text" as const,
      label: "Button",
      content: [],
      icon: "",
      iconPosition: "start" as const,
      roundedFull: false,
      showSpinner: false,
      spinnerPosition: "start" as const,
      variant: "default" as const,
      size: "default" as const,
      type: "button" as const,
      disabled: false,
      className: "",
      id: "",
      ariaLabel: "",
    },
    render: ({
      contentMode = "text",
      label = "Button",
      content = [],
      icon = "",
      iconPosition = "start",
      roundedFull = false,
      showSpinner = false,
      spinnerPosition = "start",
      variant,
      size,
      type,
      disabled,
      className,
      id,
      ariaLabel,
    }: ButtonProps) => {
      const isIconOnly = contentMode === "icon";
      const isBoth = contentMode === "both";
      const showIcon = (isIconOnly || isBoth) && icon;
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const hasSlotItems = Array.isArray(content) && content.length > 0;
      const displayLabel =
        !isIconOnly && !hasSlotItems ? (label || "Button") : null;
      const textContent = (
        <>
          {displayLabel}
          {Content ? <Content minEmptyHeight={40} /> : null}
        </>
      );
      const iconEl = showIcon ? (
        <DynamicIcon name={icon as React.ComponentProps<typeof DynamicIcon>["name"]} />
      ) : null;
      const iconLabel = ariaLabel || (isIconOnly && icon ? `${icon} button` : undefined);
      const buttonSize = isIconOnly ? "icon" : size;
      const spinnerEl = showSpinner ? (
        <Spinner
          className="shrink-0"
          aria-hidden
          data-icon={spinnerPosition === "start" ? "inline-start" : "inline-end"}
        />
      ) : null;
      const mainContent =
        isIconOnly && iconEl ? (
          iconEl
        ) : isBoth && iconEl ? (
          iconPosition === "start" ? (
            <>
              {iconEl}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {iconEl}
            </>
          )
        ) : (
          textContent
        );
      const children = (
        <>
          {spinnerPosition === "start" && spinnerEl}
          {mainContent}
          {spinnerPosition === "end" && spinnerEl}
        </>
      );
      return (
        <Button
          variant={variant}
          size={buttonSize}
          type={type}
          disabled={disabled}
          className={cn(roundedFull && "rounded-full", className || undefined)}
          id={id || undefined}
          aria-label={iconLabel || ariaLabel || undefined}
        >
          {children}
        </Button>
      );
    },
  },
};
