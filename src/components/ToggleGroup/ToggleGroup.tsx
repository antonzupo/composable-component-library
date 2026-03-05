"use client";

import { ToggleGroup as UIToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type ToggleGroupProps = Components["ToggleGroup"];

function parseDefaultValue(
  type: "single" | "multiple",
  defaultValue: string
): string | string[] | undefined {
  const trimmed = (defaultValue ?? "").trim();
  if (!trimmed) return undefined;
  if (type === "multiple") {
    const values = trimmed
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
    return values.length > 0 ? values : undefined;
  }
  return trimmed;
}

const spacingToNumber = {
  none: 0 as const,
  sm: 1 as const,
  md: 2 as const,
  lg: 3 as const,
};

export function ToggleGroup({
  type = "single",
  defaultValue = "",
  items = [],
  variant = "default",
  size = "default",
  spacing = "sm",
  orientation = "horizontal",
  disabled = false,
  className,
  id,
}: ToggleGroupProps) {
  const safeType = type ?? "single";
  const parsedDefault = parseDefaultValue(safeType, defaultValue ?? "");
  const spacingNum = spacing in spacingToNumber ? spacingToNumber[spacing as keyof typeof spacingToNumber] : 1;

  return (
    <UIToggleGroup
      id={id || undefined}
      type={safeType}
      {...(parsedDefault !== undefined &&
        (safeType === "multiple"
          ? { defaultValue: parsedDefault as string[] }
          : { defaultValue: parsedDefault as string }))}
      variant={variant ?? "default"}
      size={size ?? "default"}
      spacing={spacingNum}
      orientation={orientation ?? "horizontal"}
      disabled={disabled ?? false}
      className={cn(className)}
    >
      {items.map((item) => (
        <ToggleGroupItem
          key={item.value}
          value={item.value}
          aria-label={item.label}
        >
          {item.label}
        </ToggleGroupItem>
      ))}
    </UIToggleGroup>
  );
}
