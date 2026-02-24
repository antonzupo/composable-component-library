import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const collapsibleVariants = cva("", {
  variants: {
    variant: {
      default: "border border-border bg-card",
      bordered: "border border-border bg-card",
      ghost: "border-0 bg-transparent",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    rounded: "lg",
  },
});

const triggerPaddingClass = (p: string) =>
  p === "none" ? "py-0" : p === "sm" ? "py-2" : p === "md" ? "py-4" : "py-5";

const contentPaddingClass = (p: string) =>
  p === "none" ? "pb-0" : p === "sm" ? "pb-2" : p === "md" ? "pb-4" : "pb-5";

const alignClass = (a: string) =>
  a === "left" ? "text-left" : a === "center" ? "text-center" : "text-right";

const ChevronIcon = ({ open }: { open: boolean }) => (
  <span
    className={cn("inline-flex size-5 shrink-0 transition-transform duration-200", open && "rotate-180")}
    aria-hidden
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </span>
);

export type CollapsibleProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof collapsibleVariants> & {
    trigger: string;
    defaultOpen?: boolean;
    triggerAlign?: "left" | "center" | "right";
    contentAlign?: "left" | "center" | "right";
    triggerPadding?: "none" | "sm" | "md" | "lg";
    contentPadding?: "none" | "sm" | "md" | "lg";
    showIcon?: boolean;
    iconPosition?: "start" | "end";
    fullWidth?: boolean;
    children?: React.ReactNode;
  };

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      trigger,
      defaultOpen = false,
      triggerAlign = "left",
      contentAlign = "left",
      triggerPadding = "md",
      contentPadding = "md",
      showIcon = true,
      iconPosition = "end",
      variant,
      rounded,
      fullWidth = false,
      className,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const triggerId = React.useId();
    const contentId = React.useId();

    const icon = showIcon ? <ChevronIcon open={open} /> : null;

    return (
      <div
        ref={ref}
        data-state={open ? "open" : "closed"}
        className={cn(
          collapsibleVariants({ variant, rounded }),
          fullWidth && "w-full",
          className
        )}
        id={id}
        {...props}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-controls={contentId}
          id={triggerId}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "flex w-full items-center gap-2 font-medium transition-[color,background-color] hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            triggerPaddingClass(triggerPadding),
            "px-4",
            iconPosition === "start" ? "flex-row" : "flex-row-reverse",
            alignClass(triggerAlign)
          )}
        >
          {iconPosition === "start" && icon}
          <span className="flex-1 min-w-0">{trigger}</span>
          {iconPosition === "end" && icon}
        </button>
        <div
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          hidden={!open}
          className="overflow-hidden data-[state=closed]:hidden"
        >
          <div
            className={cn(
              "text-muted-foreground text-sm",
              contentPaddingClass(contentPadding),
              "px-4",
              alignClass(contentAlign)
            )}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
Collapsible.displayName = "Collapsible";

export { Collapsible, collapsibleVariants };
