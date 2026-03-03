import * as React from "react";
import { Alert as AlertRoot, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

type AlertProps = Components["Alert"] & { children?: React.ReactNode };

const ALERT_ICON_SIZE = 20;

export function Alert({
  title = "",
  description = "",
  showTitle = true,
  variant = "default",
  showIcon = false,
  icon = "",
  showAction = false,
  className,
  id,
  children,
}: AlertProps) {
  const hasIcon = showIcon && icon;
  const iconEl = hasIcon ? (
    <span
      className={cn(
        "absolute left-4 top-4 flex size-5 shrink-0 items-center justify-center [&_svg]:size-5",
        variant === "destructive" ? "text-destructive [&_svg]:text-destructive" : "text-foreground [&_svg]:text-foreground"
      )}
      aria-hidden
    >
      <DynamicIcon
        name={icon as React.ComponentProps<typeof DynamicIcon>["name"]}
        size={ALERT_ICON_SIZE}
        className="shrink-0"
        aria-hidden
      />
    </span>
  ) : null;

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
      {iconEl}
      <div
        className={cn(
          showAction && "min-w-0 flex-1 space-y-1",
          hasIcon && "pl-7"
        )}
      >
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
