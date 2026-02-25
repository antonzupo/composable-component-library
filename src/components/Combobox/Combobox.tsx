import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const comboboxVariants = cva("w-full", {
  variants: {
    variant: {
      default: "border border-input bg-background",
      outline: "border border-input bg-background hover:border-primary/50",
    },
    size: {
      sm: "h-8 text-sm",
      default: "h-9 text-sm",
      lg: "h-10 text-base",
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
    rounded: "md",
  },
});

const positionClass = (p: string) => (p === "end" ? "justify-end" : "justify-start");

export type ComboboxProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof comboboxVariants> & {
    placeholder?: string;
    emptyText?: string;
    options: Array<{ value: string; label: string }>;
    multiple?: boolean;
    disabled?: boolean;
    position?: "start" | "end";
  };

const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      placeholder = "Search...",
      emptyText = "No results found.",
      options,
      multiple = false,
      disabled = false,
      size,
      variant,
      position = "start",
      rounded,
      className,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1", className)}
        id={id}
        {...props}
      >
        <div
          className={cn(
            "flex items-center px-3 py-2",
            comboboxVariants({ variant, size, rounded }),
            positionClass(position),
            disabled && "pointer-events-none opacity-50"
          )}
        >
          <span className="text-muted-foreground">{placeholder}</span>
        </div>
        <div
          className={cn(
            "max-h-60 overflow-auto border border-border bg-popover text-popover-foreground shadow-md",
            comboboxVariants({ rounded })
          )}
        >
          {options.length === 0 ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              {emptyText}
            </div>
          ) : (
            <ul className="p-1">
              {options.map((opt) => (
                <li
                  key={opt.value}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                >
                  {opt.label}
                  {multiple && (
                    <span className="ml-2 inline-flex size-4 items-center justify-center rounded border border-primary">
                      <span className="sr-only">Select</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
);
Combobox.displayName = "Combobox";

export { Combobox, comboboxVariants };
