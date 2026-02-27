import {
  AlertDialog as AlertDialogRoot,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

type AlertDialogProps = Components["AlertDialog"];

const alignClass = { left: "text-left", center: "text-center", right: "text-right" };
const actionsAlignClass = { start: "justify-start", center: "justify-center", end: "justify-end" };
const roundedClass = { none: "rounded-none", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", full: "rounded-full" };
const paddingClass = { none: "p-0", sm: "p-3", md: "p-6", lg: "p-8" };

export function AlertDialog({
  title,
  description,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  confirmVariant = "default",
  showCancel = true,
  titleAlign = "left",
  descriptionAlign = "left",
  actionsAlign = "end",
  rounded = "lg",
  padding = "md",
  className,
  id,
}: AlertDialogProps) {
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        className={cn(roundedClass[rounded], paddingClass[padding], className)}
        id={id || undefined}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className={alignClass[titleAlign]}>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className={alignClass[descriptionAlign]}>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={actionsAlignClass[actionsAlign]}>
          {showCancel && (
            <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          )}
          <AlertDialogAction className={cn(confirmVariant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90")}>
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
}
