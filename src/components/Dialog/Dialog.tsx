"use client";

import * as React from "react";
import {
  Dialog as UIDialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface DialogProps {
  trigger?: React.ReactNode;
  /** When provided with onOpenChange, dialog is controlled and trigger uses this to open */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  contentClassName?: string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export function Dialog({
  trigger,
  open,
  onOpenChange,
  contentClassName,
  className,
  id,
  children,
}: DialogProps) {
  const hasTrigger = trigger != null && React.Children.count(trigger) > 0;
  const isControlled = open !== undefined && onOpenChange !== undefined;

  return (
    <UIDialog open={open} onOpenChange={onOpenChange}>
      {hasTrigger && (
        <span
          className={cn("inline-block", className)}
          id={id}
          role={isControlled ? "presentation" : undefined}
          onClick={isControlled ? () => onOpenChange?.(true) : undefined}
        >
          {isControlled ? trigger : <DialogTrigger asChild>{trigger}</DialogTrigger>}
        </span>
      )}
      <DialogContent className={contentClassName}>{children}</DialogContent>
    </UIDialog>
  );
}
