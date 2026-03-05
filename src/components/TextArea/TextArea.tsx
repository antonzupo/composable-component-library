"use client";

import * as React from "react";
import { Textarea as UITextarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type TextAreaProps = Components["TextArea"];

export function TextArea({
  placeholder,
  defaultValue,
  disabled = false,
  rows = 3,
  className,
  id,
}: TextAreaProps) {
  return (
    <UITextarea
      id={id || undefined}
      placeholder={placeholder || undefined}
      defaultValue={defaultValue || undefined}
      disabled={disabled}
      rows={rows}
      className={cn(className)}
    />
  );
}
