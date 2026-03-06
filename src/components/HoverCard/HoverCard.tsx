"use client";

import * as React from "react";
import {
  HoverCard as UIHoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { useIsPuckEditor } from "@/puck/editorContext";
import type { Components } from "@/puck/types";

export type HoverCardProps = Components["HoverCard"] & {
  trigger?: React.ReactNode;
  puck?: { isEditing?: boolean };
  children?: React.ReactNode;
};

export function HoverCard({
  trigger: triggerProp,
  contentClassName,
  className,
  id,
  openDelay = 200,
  closeDelay = 100,
  puck,
  children,
}: HoverCardProps) {
  const childArray = React.Children.toArray(children);
  const triggerFromChildren = childArray[0];
  const contentFromChildren = childArray[1];
  const useSlotApi = triggerProp === undefined && childArray.length >= 1;

  const trigger = useSlotApi ? triggerFromChildren : triggerProp;
  const content = useSlotApi ? contentFromChildren : children;
  const hasTrigger = trigger != null;
  const hasContent = content != null;

  const isPuckEditor = useIsPuckEditor();
  const isPuckEditing = puck?.isEditing === true && isPuckEditor;

  // In Puck editor canvas: render trigger and content in a flat layout so drop zones work. In preview, show real HoverCard.
  if (isPuckEditing) {
    return (
      <div
        id={id || undefined}
        className={cn(
          "flex flex-col gap-3 rounded-lg border border-dashed border-border bg-muted/20 p-4",
          className
        )}
      >
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Trigger
          </span>
          <div className="min-h-[44px]">
            {hasTrigger ? trigger : null}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Content
          </span>
          <div
            className={cn(
              "min-h-[80px] rounded-md border border-border/50 bg-background p-3",
              contentClassName
            )}
          >
            {hasContent ? content : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <UIHoverCard openDelay={openDelay} closeDelay={closeDelay}>
      {hasTrigger && (
        <HoverCardTrigger asChild>
          <span
            className={cn("inline-block cursor-pointer", className)}
            id={id || undefined}
          >
            {trigger}
          </span>
        </HoverCardTrigger>
      )}
      <HoverCardContent className={contentClassName || undefined}>
        {hasContent ? content : null}
      </HoverCardContent>
    </UIHoverCard>
  );
}
