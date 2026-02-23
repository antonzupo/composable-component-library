import type { ComponentType } from "react";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import { cn } from "@/lib/utils";
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
        label: "Content inside button",
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
      align: {
        type: "select",
        label: "Alignment",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ],
      },
      fullWidth: {
        type: "select",
        label: "Full width",
        options: [{ label: "No", value: false }, { label: "Yes", value: true }],
      },
      showBadge: {
        type: "select",
        label: "Show badge",
        options: [{ label: "No", value: false }, { label: "Yes", value: true }],
      },
      badgeText: { type: "text", label: "Badge text" },
      badgeVariant: {
        type: "select",
        label: "Badge variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Secondary", value: "secondary" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Ghost", value: "ghost" },
        ],
      },
      badgePosition: {
        type: "select",
        label: "Badge position",
        options: [
          { label: "Start (before label)", value: "start" },
          { label: "End (after label)", value: "end" },
          { label: "Top right", value: "top-right" },
        ],
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
      align: "left" as const,
      fullWidth: false,
      showBadge: false,
      badgeText: "",
      badgeVariant: "secondary" as const,
      badgePosition: "end" as const,
      className: "",
      id: "",
      ariaLabel: "",
    },
    render: ({ label, content, variant, size, type, disabled, align, fullWidth, showBadge, badgeText, badgeVariant, badgePosition, className, id, ariaLabel }: ButtonProps) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const badgeEl = showBadge && badgeText ? <Badge variant={badgeVariant}>{badgeText}</Badge> : null;
      const labelEl = (
        <>
          {label ? label : null}
          {Content ? <Content minEmptyHeight={40} /> : null}
        </>
      );
      const isTopRight = badgePosition === "top-right";
      return (
        <div className={cn("flex w-full", align === "center" && "justify-center", align === "right" && "justify-end")}>
          <Button
            variant={variant}
            size={size}
            type={type}
            disabled={disabled}
            className={cn(className || undefined, fullWidth && "w-full", isTopRight && "relative")}
            id={id || undefined}
            aria-label={ariaLabel || undefined}
          >
            {isTopRight && badgeEl ? (
              <>
                <span className="inline-flex items-center gap-1.5">{labelEl}</span>
                <span className="absolute -right-1 -top-1">{badgeEl}</span>
              </>
            ) : (
              <span className="inline-flex items-center gap-1.5">
                {badgePosition === "start" && badgeEl}
                {labelEl}
                {badgePosition === "end" && badgeEl}
              </span>
            )}
          </Button>
        </div>
      );
    },
  },
};
