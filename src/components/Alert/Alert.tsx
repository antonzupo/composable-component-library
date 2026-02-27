import * as React from "react";
import { Alert as AlertRoot, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

type AlertProps = Components["Alert"] & { children?: React.ReactNode };

export function Alert({
  title = "",
  description = "",
  showTitle = true,
  variant = "default",
  showAction = false,
  className,
  id,
  children,
}: AlertProps) {
  return (
    <AlertRoot
      variant={variant}
      role="alert"
      className={cn(
        "w-full",
        showAction && "flex flex-row items-start gap-3",
        className
      )}
      id={id || undefined}
    >
      <div className={cn(showAction && "min-w-0 flex-1 space-y-1")}>
        {showTitle && title ? <AlertTitle>{title}</AlertTitle> : null}
        {description ? <AlertDescription>{description}</AlertDescription> : null}
      </div>
      {showAction && (
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 pl-0 ml-auto">
          {children ?? null}
        </div>
      )}
    </AlertRoot>
  );
}
