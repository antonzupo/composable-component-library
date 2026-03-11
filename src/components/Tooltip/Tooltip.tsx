import * as React from "react";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsPuckEditor } from "@/puck/editorContext";
import type { Components } from "@/puck/types";

export type TooltipProps = Components["Tooltip"];

export function Tooltip({
  trigger: triggerProp,
  triggerLabel = "Hover me",
  content,
  side = "top",
  sideOffset = 4,
  delayDuration = 200,
  className,
  id,
  puck,
  children,
}: TooltipProps & { children?: React.ReactNode }) {
  const isPuckEditor = useIsPuckEditor();
  // Slot API: when children are passed (from Puck), first child is the trigger slot area
  const childArray = React.Children.toArray(children);
  const triggerFromChildren = childArray[0];
  const useSlotApi = triggerProp === undefined && childArray.length >= 1;
  const trigger = useSlotApi ? triggerFromChildren : triggerProp;

  const hasTrigger =
    trigger != null &&
    !Array.isArray(trigger) &&
    React.Children.count(trigger as React.ReactNode) > 0;
  const triggerNode = hasTrigger ? (
    <>{trigger as React.ReactNode}</>
  ) : (
    <Button type="button" variant="outline" size="sm">
      {triggerLabel}
    </Button>
  );

  // Only in Puck editor (not preview): render trigger slot area so drop zone is visible
  if (puck?.isEditing && isPuckEditor) {
    return (
      <div
        id={id || undefined}
        className={cn(
          "flex flex-col gap-2 rounded-lg border border-dashed border-border bg-muted/20 p-4",
          className
        )}
      >
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Trigger (drag components here)
          </span>
          <div className="min-h-[44px]">
            {hasTrigger && trigger != null ? trigger : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider delayDuration={delayDuration}>
      <UITooltip>
        <TooltipTrigger asChild>
          <div id={id || undefined} className={cn("inline-block", className)}>
            {triggerNode}
          </div>
        </TooltipTrigger>
        <TooltipContent side={side} sideOffset={sideOffset}>
          {content || "Tooltip content"}
        </TooltipContent>
      </UITooltip>
    </TooltipProvider>
  );
}
