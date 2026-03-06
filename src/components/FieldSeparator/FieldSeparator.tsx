"use client";

import * as React from "react";
import { FieldSeparator as UIFieldSeparator } from "@/components/ui/field";
import { cn } from "@/lib/utils";

const verticalSpaceClasses = {
  none: "my-0",
  sm: "my-2",
  md: "my-4",
  lg: "my-6",
} as const;

export interface FieldSeparatorProps {
  label?: string;
  verticalSpace?: "none" | "sm" | "md" | "lg";
  className?: string;
  id?: string;
}

export function FieldSeparator({
  label,
  verticalSpace = "md",
  className,
  id,
}: FieldSeparatorProps) {
  return (
    <UIFieldSeparator
      className={cn(verticalSpaceClasses[verticalSpace], className)}
      id={id}
    >
      {label != null && label !== "" ? label : null}
    </UIFieldSeparator>
  );
}
