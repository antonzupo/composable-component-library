import * as React from "react";
import {
  Dialog as UIDialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useIsPuckEditor } from "@/puck/editorContext";
import type { Components } from "@/puck/types";

export type DialogProps = Components["Dialog"] & {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  puck?: { isEditing?: boolean };
  children?: React.ReactNode;
};

export function Dialog({
  trigger: triggerProp,
  open,
  onOpenChange,
  contentClassName,
  overlayClassName: _overlayClassName,
  className,
  id,
  defaultOpen,
  modal = true,
  title,
  description,
  contentLabel,
  showCloseButton: _showCloseButton = true,
  puck,
  children,
}: DialogProps) {
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

  const hasTitle = title != null && title !== "";
  const hasDescription = description != null && description !== "";

  // Only in Puck editor canvas: render trigger and content in a flat layout so drop zones work. In preview, show real Dialog (only trigger visible until opened).
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

  const isControlledNow = open !== undefined && onOpenChange !== undefined;

  return (
    <UIDialog
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
      modal={modal}
    >
      {hasTrigger && (
        <span
          className={cn("inline-block", className)}
          id={id || undefined}
          role={isControlledNow ? "presentation" : undefined}
          onClick={isControlledNow ? () => onOpenChange?.(true) : undefined}
        >
          {isControlledNow ? (
            trigger
          ) : (
            <DialogTrigger asChild>
              <span className="inline-block cursor-pointer [&_button]:cursor-pointer">
                {trigger}
              </span>
            </DialogTrigger>
          )}
        </span>
      )}
      <DialogContent
        className={contentClassName || undefined}
        aria-label={contentLabel || undefined}
      >
        {(hasTitle || hasDescription) && (
          <DialogHeader>
            {hasTitle && <DialogTitle>{title}</DialogTitle>}
            {hasDescription && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        {hasContent ? content : null}
      </DialogContent>
    </UIDialog>
  );
}
