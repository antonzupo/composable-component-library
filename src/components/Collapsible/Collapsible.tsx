import {
  Collapsible as CollapsibleRoot,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import type { Components } from "@/puck/types";

export type CollapsibleProps = Components["Collapsible"] & { children?: React.ReactNode };

const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
} as const;

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

const paddingMap = {
  none: "py-0",
  sm: "py-2",
  md: "py-4",
  lg: "py-6",
} as const;

const contentPaddingMap = {
  none: "pb-0 pt-0",
  sm: "pb-2 pt-0",
  md: "pb-4 pt-0",
  lg: "pb-6 pt-0",
} as const;

export function Collapsible({
  trigger,
  content: _content,
  children,
  defaultOpen = false,
  appearance = "default",
  triggerAlign = "left",
  contentAlign = "left",
  triggerPadding = "md",
  contentPadding = "md",
  showIcon = true,
  iconPosition = "end",
  variant = "default",
  rounded = "lg",
  fullWidth = true,
  className,
  id,
}: CollapsibleProps) {
  const rootClassName = cn(
    "p-4",
    variant === "bordered" && "border border-border",
    variant === "ghost" && "border-0",
    roundedMap[rounded],
    fullWidth && "w-full",
    appearance === "fileTree" && "pl-6 border-l-2 border-border",
    className
  );

  const triggerClassName = cn(
    "flex w-full items-center gap-2 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
    paddingMap[triggerPadding],
    !showIcon && "[&>svg]:hidden",
    iconPosition === "start" && "[&>svg]:order-first [&>svg]:mr-2",
    alignMap[triggerAlign]
  );

  const triggerLabelClassName = cn("flex-1 min-w-0", alignMap[triggerAlign]);

  const contentClassName = cn(
    "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    alignMap[contentAlign],
    contentPaddingMap[contentPadding]
  );

  return (
    <CollapsibleRoot
      defaultOpen={defaultOpen}
      className={rootClassName}
      id={id}
    >
      <CollapsibleTrigger className={triggerClassName}>
        <span className={triggerLabelClassName}>{trigger || "Toggle"}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className={contentClassName}>{children}</div>
      </CollapsibleContent>
    </CollapsibleRoot>
  );
}
