import * as React from "react";
import {
  FieldSet,
  FieldLegend,
  FieldDescription,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

export interface FieldsetProps {
  legend?: string;
  legendVariant?: "legend" | "label";
  description?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function Fieldset({
  legend,
  legendVariant = "legend",
  description,
  children,
  className,
  id,
}: FieldsetProps) {
  return (
    <FieldSet className={cn(className)} id={id}>
      {legend != null && legend !== "" && (
        <FieldLegend variant={legendVariant}>{legend}</FieldLegend>
      )}
      {description != null && description !== "" && (
        <FieldDescription>{description}</FieldDescription>
      )}
      {children}
    </FieldSet>
  );
}
