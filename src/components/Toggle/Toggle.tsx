"use client";

import * as React from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { Toggle as UIToggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type ToggleProps = Components["Toggle"];

export function Toggle({
  label,
  icon = "",
  iconPosition = "start",
  variant = "default",
  size = "default",
  defaultPressed = false,
  disabled = false,
  className,
  id,
}: ToggleProps) {
  const showIcon = Boolean(icon);
  const iconEl = showIcon ? (
    <DynamicIcon name={icon as React.ComponentProps<typeof DynamicIcon>["name"]} />
  ) : null;
  const labelEl = label ? <span>{label}</span> : null;
  const children =
    showIcon && labelEl
      ? iconPosition === "start"
        ? <>
            {iconEl}
            {labelEl}
          </>
        : <>
            {labelEl}
            {iconEl}
          </>
      : showIcon
        ? iconEl
        : labelEl;
  return (
    <UIToggle
      id={id || undefined}
      variant={variant}
      size={size}
      defaultPressed={defaultPressed}
      disabled={disabled}
      className={cn(className)}
      aria-label={showIcon && !label ? (label || "Toggle") : undefined}
    >
      {children ?? null}
    </UIToggle>
  );
}
