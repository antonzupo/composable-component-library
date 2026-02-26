"use client";

import * as React from "react";
import { DirectionProvider as UIDirectionProvider } from "@/components/ui/direction";
import { cn } from "@/lib/utils";

export type DirectionProps = {
  dir?: "ltr" | "rtl";
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export function Direction({ dir = "ltr", className, id, children }: DirectionProps) {
  return (
    <UIDirectionProvider direction={dir}>
      <div dir={dir} className={cn(className)} id={id}>
        {children}
      </div>
    </UIDirectionProvider>
  );
}
