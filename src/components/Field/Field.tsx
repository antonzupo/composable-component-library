"use client";

import * as React from "react";
import {
  Field as UIField,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

export interface FieldProps {
  label?: string;
  description?: string;
  error?: string;
  orientation?: "vertical" | "horizontal" | "responsive";
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function Field({
  label,
  description,
  error,
  orientation = "vertical",
  children,
  className,
  id,
}: FieldProps) {
  const hasContent = children != null && React.Children.count(children) > 0;

  return (
    <UIField
      id={id}
      orientation={orientation}
      className={cn(className)}
      data-invalid={error ? true : undefined}
    >
      {label != null && label !== "" && (
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
      )}
      <FieldContent>
        {hasContent ? children : (
          <span className="text-muted-foreground text-sm">Add a control (e.g. Input)</span>
        )}
        {description != null && description !== "" && (
          <FieldDescription>{description}</FieldDescription>
        )}
        {error != null && error !== "" && (
          <FieldError>{error}</FieldError>
        )}
      </FieldContent>
    </UIField>
  );
}
