import React, { type ComponentType, type Ref } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { iconNames } from "lucide-react/dynamic";
import { Button } from "@/components/Button/Button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

type ButtonProps = Components["Button"];
type PuckRenderProps = { puck?: { dragRef?: Ref<HTMLButtonElement> | null } };

const lucideIconOptions = [
  { label: "— None —", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

const baseFields = {
  contentMode: {
    type: "select" as const,
    label: "Button content",
    options: [
      { label: "Text", value: "text" },
      { label: "Icon", value: "icon" },
      { label: "Text and icon", value: "both" },
    ],
  },
  label: { type: "text" as const, label: "Label (when content is empty)" },
  content: {
    type: "slot" as const,
    label: "Content",
    allow: ["Badge", "Typography"],
  },
  icon: {
    type: "select" as const,
    label: "Icon",
    options: lucideIconOptions,
  },
  iconPosition: {
    type: "radio" as const,
    label: "Icon position",
    options: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" },
    ],
  },
  roundedFull: {
    type: "radio" as const,
    label: "Rounded",
    options: [
      { label: "Default", value: false },
      { label: "Full", value: true },
    ],
  },
  showSpinner: {
    type: "radio" as const,
    label: "Show spinner (loading)",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  spinnerPosition: {
    type: "radio" as const,
    label: "Spinner position",
    options: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" },
    ],
  },
  variant: {
    type: "select" as const,
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
    type: "select" as const,
    label: "Size",
    options: [
      { label: "Default", value: "default" },
      { label: "Small", value: "sm" },
      { label: "Large", value: "lg" },
      { label: "Icon", value: "icon" },
    ],
  },
  type: {
    type: "select" as const,
    label: "Type",
    options: [
      { label: "Button", value: "button" },
      { label: "Submit", value: "submit" },
      { label: "Reset", value: "reset" },
    ],
  },
  disabled: {
    type: "radio" as const,
    label: "Disabled",
    options: [{ label: "No", value: false }, { label: "Yes", value: true }],
  },
  className: { type: "text" as const, label: "Class name" },
  id: { type: "text" as const, label: "ID" },
  ariaLabel: { type: "text" as const, label: "Aria label" },
};

export const buttonPuckConfig = {
  Button: {
    label: "Button",
    resolveFields: (data: { props: ButtonProps }) => {
      const contentMode = data.props.contentMode;
      const showIconFields = contentMode === "icon" || contentMode === "both";
      const showSpinner = data.props.showSpinner === true;
      return {
        contentMode: baseFields.contentMode,
        label: baseFields.label,
        content: baseFields.content,
        ...(showIconFields ? { icon: baseFields.icon, iconPosition: baseFields.iconPosition } : {}),
        roundedFull: baseFields.roundedFull,
        showSpinner: baseFields.showSpinner,
        ...(showSpinner ? { spinnerPosition: baseFields.spinnerPosition } : {}),
        variant: baseFields.variant,
        size: baseFields.size,
        type: baseFields.type,
        disabled: baseFields.disabled,
        className: baseFields.className,
        id: baseFields.id,
        ariaLabel: baseFields.ariaLabel,
      };
    },
    fields: baseFields,
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
      puck,
    }: ButtonProps & PuckRenderProps) => {
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
          {Content ? <Content minEmptyHeight={0} /> : null}
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
          ref={puck?.dragRef}
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
