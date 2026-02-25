import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/Calendar/Calendar";
import { Button } from "@/components/Button/Button";

const datePickerVariants = cva("inline-block", {
  variants: {
    variant: {
      default: "border-border",
      outline: "border-input",
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
    rounded: "md",
  },
});

export type DatePickerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof datePickerVariants> & {
    triggerLabel?: string;
    placeholder?: string;
    defaultMonth?: string;
    mode?: "single" | "range";
    showTime?: boolean;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    cellSize?: "sm" | "default" | "lg";
  };

function parseDefaultMonth(s: string): Date | undefined {
  if (!s?.trim()) return undefined;
  const parts = s.trim().match(/^(\d{4})-(\d{1,2})$/);
  if (!parts) return undefined;
  const [, y, m] = parts.map(Number);
  if (m < 1 || m > 12) return undefined;
  const d = new Date(y, m - 1, 1);
  return isNaN(d.getTime()) ? undefined : d;
}

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      triggerLabel = "Pick a date",
      placeholder = "Select date",
      defaultMonth,
      mode = "single",
      showTime = false,
      weekStartsOn = 0,
      cellSize = "default",
      variant,
      rounded,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const defaultMonthDate = parseDefaultMonth(defaultMonth ?? "");
    const [open, setOpen] = React.useState(false);
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2", datePickerVariants({ variant, rounded }), className)}
        id={id}
        {...props}
      >
        <Button
          type="button"
          variant="outline"
          onClick={() => setOpen((o) => !o)}
          className="w-full justify-start text-left font-normal"
        >
          <span className="text-muted-foreground">
            {triggerLabel}: {placeholder}
          </span>
        </Button>
        {open && (
          <div className="border border-border bg-popover p-3 shadow-md">
            <Calendar
              defaultMonth={defaultMonthDate}
              mode={mode}
              showTime={showTime}
              weekStartsOn={weekStartsOn}
              cellSize={cellSize}
              variant={variant}
              showHeader
              showWeekdays
              showOutsideDays={false}
              showNavigation
              captionLayout="label"
            />
          </div>
        )}
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";

export { DatePicker, datePickerVariants };
