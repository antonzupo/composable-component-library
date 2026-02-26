"use client";

import * as React from "react";
import {
  Drawer as UIDrawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

export interface DrawerProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  contentClassName?: string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export function Drawer({
  trigger,
  open,
  onOpenChange,
  contentClassName,
  className,
  id,
  children,
}: DrawerProps) {
  const hasTrigger = trigger != null && React.Children.count(trigger) > 0;
  const isControlled = open !== undefined && onOpenChange !== undefined;

  return (
    <UIDrawer open={open} onOpenChange={onOpenChange}>
      {hasTrigger && (
        <span
          className={cn("inline-block", className)}
          id={id}
          role={isControlled ? "presentation" : undefined}
          onClick={isControlled ? () => onOpenChange?.(true) : undefined}
        >
          {isControlled ? trigger : <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
        </span>
      )}
      <DrawerContent className={contentClassName}>{children}</DrawerContent>
    </UIDrawer>
  );
}
