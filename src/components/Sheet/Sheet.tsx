"use client";

import * as React from "react";
import {
  Sheet as UISheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type SheetProps = Components["Sheet"] & {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
};

export function Sheet({
  trigger,
  open,
  onOpenChange,
  contentClassName,
  side = "right",
  className,
  id,
  children,
}: SheetProps) {
  const hasTrigger = trigger != null && React.Children.count(trigger) > 0;
  const isControlled = open !== undefined && onOpenChange !== undefined;

  return (
    <UISheet open={open} onOpenChange={onOpenChange}>
      {hasTrigger && (
        <span
          className={cn("inline-block", className)}
          id={id}
          role={isControlled ? "presentation" : undefined}
          onClick={isControlled ? () => onOpenChange?.(true) : undefined}
        >
          {isControlled ? (
            trigger
          ) : (
            <SheetTrigger asChild>{trigger}</SheetTrigger>
          )}
        </span>
      )}
      <SheetContent side={side} className={contentClassName}>
        {children}
      </SheetContent>
    </UISheet>
  );
}
