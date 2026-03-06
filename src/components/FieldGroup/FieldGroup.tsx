"use client";

import * as React from "react";
import { FieldGroup as UIFieldGroup } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export interface FieldGroupProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function FieldGroup({ children, className, id }: FieldGroupProps) {
  return (
    <UIFieldGroup className={cn(className)} id={id}>
      {children}
    </UIFieldGroup>
  );
}
