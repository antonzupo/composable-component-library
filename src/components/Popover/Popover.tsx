"use client";

import * as React from "react";
import {
  Popover as UIPopover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface PopoverProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  contentClassName?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  className?: string;
  id?: string;
  puck?: { isEditing?: boolean };
  children?: React.ReactNode;
}

export function Popover({
  trigger: triggerProp,
  open,
  onOpenChange,
  contentClassName,
  align = "center",
  side = "bottom",
  sideOffset = 4,
  className,
  id,
  puck,
  children,
}: PopoverProps) {
  // Slot-based API: children = [trigger, content] (used by Puck so slots are direct children and get drop zones)
  const childArray = React.Children.toArray(children);
  const triggerFromChildren = childArray[0];
  const contentFromChildren = childArray[1];
  const useSlotApi = triggerProp === undefined && childArray.length >= 1;

  const trigger = useSlotApi ? triggerFromChildren : triggerProp;
  const content = useSlotApi ? contentFromChildren : children;
  const hasTrigger = trigger != null;
  const hasContent = content != null;

  const isControlled = open !== undefined && onOpenChange !== undefined;
  const isPuckEditing = puck?.isEditing === true;
  const inPuckEditor = puck != null;

  // Unconditionally create internal state so hook ordering is stable.
  const [editorOpen, setEditorOpen] = React.useState(false);
  const [radixOpen, setRadixOpen] = React.useState(false);
  const editorRootRef = React.useRef<HTMLDivElement | null>(null);

  const isOpen = isControlled ? open : inPuckEditor ? editorOpen : radixOpen;
  const setIsOpen = isControlled
    ? onOpenChange!
    : inPuckEditor
      ? setEditorOpen
      : setRadixOpen;
  const toggleOpen = () => setIsOpen(!isOpen);

  // Close on outside click for the inline editor popover (capture phase so editor overlays can't stop it).
  React.useEffect(() => {
    if (!inPuckEditor) return;
    if (isPuckEditing) return;
    if (!isOpen) return;

    const onPointerDownCapture = (e: PointerEvent) => {
      const root = editorRootRef.current;
      const target = e.target as Node | null;
      if (!root || !target) return;
      if (!root.contains(target)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDownCapture, true);
    return () => document.removeEventListener("pointerdown", onPointerDownCapture, true);
  }, [inPuckEditor, isPuckEditing, isOpen, setIsOpen]);

  // In Puck edit mode: render both slots in the main flow so drop zones are visible (no portal, no Radix trigger wrapper)
  if (isPuckEditing) {
    return (
      <div
        id={id}
        className={cn(
          "flex flex-col gap-3 rounded-lg border border-dashed border-border bg-muted/20 p-4",
          className
        )}
      >
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">Trigger</span>
          <div className="min-h-[44px]">
            {hasTrigger && trigger != null ? trigger : null}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">Content</span>
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

  // Inside Puck Editor (e.g. preview): simple inline toggle so state is stable (no Radix portal/focus)
  if (inPuckEditor) {
    return (
      <div
        ref={editorRootRef}
        id={id}
        className={cn("relative inline-block", className)}
      >
        <div
          role="button"
          tabIndex={0}
          className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          onClick={toggleOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleOpen();
            }
          }}
        >
          {hasTrigger && trigger != null ? trigger : null}
        </div>
        {isOpen && (
          <div
            className={cn(
              "absolute z-50 mt-1 w-max min-w-[8rem] max-w-[20rem] rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
              side === "top" && "bottom-full mb-1 mt-0",
              side === "bottom" && "top-full mt-1",
              side === "left" && "right-full mr-1 mt-0",
              side === "right" && "left-full ml-1 mt-0",
              contentClassName
            )}
          >
            {hasContent ? content : (
              <span className="text-muted-foreground text-sm">Add content to the popover</span>
            )}
          </div>
        )}
      </div>
    );
  }

  // Outside Puck: use Radix Popover (portal, focus management, outside click close)
  const triggerWrapper = hasTrigger && trigger != null && (
    <PopoverTrigger asChild>
      <span className={cn("inline-block cursor-pointer", className)} id={id}>
        {trigger}
      </span>
    </PopoverTrigger>
  );

  return (
    <UIPopover open={isOpen} onOpenChange={setIsOpen}>
      {triggerWrapper}
      <PopoverContent
        className={contentClassName}
        align={align}
        side={side}
        sideOffset={sideOffset}
      >
        {hasContent ? content : (
          <span className="text-muted-foreground text-sm">Add content to the popover</span>
        )}
      </PopoverContent>
    </UIPopover>
  );
}
