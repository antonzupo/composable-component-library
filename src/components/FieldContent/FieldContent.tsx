"use client";

import * as React from "react";
import { FieldContent as UIFieldContent } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export interface FieldContentProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function FieldContent({
  children,
  className,
  id,
}: FieldContentProps) {
  return (
    <UIFieldContent className={cn(className)} id={id}>
      {children}
    </UIFieldContent>
  );
}
