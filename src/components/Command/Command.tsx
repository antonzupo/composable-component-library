import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const commandVariants = cva("w-full", {
  variants: {
    variant: {
      default: "border border-input bg-background",
      outline: "border border-input bg-background hover:border-primary/50",
    },
    size: {
      sm: "text-sm",
      default: "text-sm",
      lg: "text-base",
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
    size: "default",
    rounded: "lg",
  },
});

export type CommandGroup = {
  heading?: string;
  items: Array<{ label: string; value?: string; shortcut?: string }>;
};

export type CommandProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof commandVariants> & {
    placeholder?: string;
    emptyText?: string;
    groups: CommandGroup[];
    disabled?: boolean;
  };

const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  (
    {
      placeholder = "Type a command or search...",
      emptyText = "No results found.",
      groups,
      disabled = false,
      size,
      variant,
      rounded,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const hasItems = groups.some((g) => g.items?.length > 0);
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col overflow-hidden",
          commandVariants({ variant, size, rounded }),
          disabled && "pointer-events-none opacity-50",
          className
        )}
        id={id}
        {...props}
      >
        <div className="flex items-center border-b px-3 py-2">
          <span className="text-muted-foreground">{placeholder}</span>
        </div>
        <div className="max-h-60 overflow-auto p-1">
          {!hasItems ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              {emptyText}
            </div>
          ) : (
            groups.map((group, gi) => (
              <div key={gi} className="py-1">
                {group.heading && (
                  <div className="mb-1 px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    {group.heading}
                  </div>
                )}
                {group.items?.map((item, ii) => (
                  <div
                    key={ii}
                    className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  >
                    <span>{item.label}</span>
                    {item.shortcut && (
                      <span className="ml-auto text-xs text-muted-foreground">
                        {item.shortcut}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
);
Command.displayName = "Command";

export { Command, commandVariants };
