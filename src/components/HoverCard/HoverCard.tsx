"use client";

import * as React from "react";
import {
  HoverCard as UIHoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HoverCardProps {
  trigger?: React.ReactNode;
  triggerLabel?: string;
  content?: React.ReactNode;
  contentClassName?: string;
  openDelay?: number;
  closeDelay?: number;
  className?: string;
  id?: string;
}

export function HoverCard({
  trigger,
  triggerLabel = "Hover me",
  content,
  contentClassName,
  openDelay = 200,
  closeDelay = 100,
  className,
  id,
}: HoverCardProps) {
  const hasTrigger = trigger != null && React.Children.count(trigger) > 0;
  const hasContent = content != null && React.Children.count(content) > 0;
  const triggerNode = hasTrigger ? (
    <>{trigger}</>
  ) : (
    <Button type="button" variant="outline" size="sm">
      {triggerLabel}
    </Button>
  );

  return (
    <UIHoverCard openDelay={openDelay} closeDelay={closeDelay}>
      <HoverCardTrigger asChild>
        <div id={id} className={cn("inline-block", className)}>
          {triggerNode}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className={contentClassName}>
        {hasContent ? content : (
          <span className="text-muted-foreground text-sm">Add content to the hover card</span>
        )}
      </HoverCardContent>
    </UIHoverCard>
  );
}
