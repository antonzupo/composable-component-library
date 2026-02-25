import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const contextMenuVariants = cva("min-w-[8rem] overflow-hidden", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: { rounded: "md" },
});

const sideClasses: Record<string, string> = {
  top: "origin-bottom",
  right: "origin-left",
  bottom: "origin-top",
  left: "origin-right",
};

export type ContextMenuItem = {
  label: string;
  shortcut?: string;
  disabled?: boolean;
};

export type ContextMenuProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof contextMenuVariants> & {
    items: ContextMenuItem[];
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
  };

const ContextMenu = React.forwardRef<HTMLDivElement, ContextMenuProps>(
  (
    {
      items,
      side = "bottom",
      align = "start",
      rounded,
      className,
      id,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("relative inline-block", className)} id={id} {...props}>
        <div className="inline-flex cursor-context-menu items-center justify-center rounded-md border border-dashed border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          {children ?? "Right-click context area"}
        </div>
        <div
          className={cn(
            "absolute z-50 mt-1 border border-border bg-popover text-popover-foreground shadow-md",
            contextMenuVariants({ rounded }),
            sideClasses[side],
            align === "end" && "right-0",
            align === "center" && "left-1/2 -translate-x-1/2"
          )}
        >
          <ul className="p-1">
            {items.map((item, i) => (
              <li
                key={i}
                className={cn(
                  "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
                  item.disabled
                    ? "pointer-events-none opacity-50"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className="ml-auto text-xs text-muted-foreground">
                    {item.shortcut}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);
ContextMenu.displayName = "ContextMenu";

export { ContextMenu, contextMenuVariants };
