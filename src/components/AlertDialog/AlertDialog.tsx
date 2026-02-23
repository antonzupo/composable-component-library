import { cn } from "@/lib/utils";
import { Button } from "@/components/Button/Button";

const roundedClass = (r: string) =>
  r === "none" ? "rounded-none" : r === "sm" ? "rounded-sm" : r === "md" ? "rounded-md" : r === "lg" ? "rounded-lg" : "rounded-full";

const paddingClass = (p: string) =>
  p === "none" ? "p-0" : p === "sm" ? "p-4" : p === "md" ? "p-6" : "p-8";

const alignClass = (a: string) =>
  a === "left" ? "text-left" : a === "center" ? "text-center" : "text-right";

const actionsJustifyClass = (a: string) =>
  a === "start" ? "justify-start" : a === "center" ? "justify-center" : "justify-end";

export type AlertDialogContentProps = {
  title: string;
  description: string;
  cancelLabel: string;
  confirmLabel: string;
  confirmVariant: "default" | "destructive";
  showCancel: boolean;
  titleAlign: "left" | "center" | "right";
  descriptionAlign: "left" | "center" | "right";
  actionsAlign: "start" | "center" | "end";
  rounded: "none" | "sm" | "md" | "lg" | "full";
  padding: "none" | "sm" | "md" | "lg";
  className?: string;
  id?: string;
};

export function AlertDialogContent({
  title,
  description,
  cancelLabel,
  confirmLabel,
  confirmVariant,
  showCancel,
  titleAlign,
  descriptionAlign,
  actionsAlign,
  rounded,
  padding,
  className,
  id,
}: AlertDialogContentProps) {
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={cn(
        "w-full max-w-lg border border-border bg-background shadow-lg",
        roundedClass(rounded),
        paddingClass(padding),
        className
      )}
      id={id}
    >
      <h2 id="alert-dialog-title" className={cn("text-lg font-semibold", alignClass(titleAlign))}>
        {title}
      </h2>
      <p id="alert-dialog-description" className={cn("mt-2 text-sm text-muted-foreground", alignClass(descriptionAlign))}>
        {description}
      </p>
      <div className={cn("mt-6 flex flex-wrap gap-3", actionsJustifyClass(actionsAlign))}>
        {showCancel && (
          <Button type="button" variant="outline">
            {cancelLabel}
          </Button>
        )}
        <Button type="button" variant={confirmVariant}>
          {confirmLabel}
        </Button>
      </div>
    </div>
  );
}

export { alignClass as alertDialogAlignClass, actionsJustifyClass as alertDialogActionsJustifyClass };
