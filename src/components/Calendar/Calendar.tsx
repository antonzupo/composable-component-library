import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const calendarVariants = cva("inline-block border rounded-md text-sm", {
  variants: {
    variant: {
      default: "border-border bg-card text-card-foreground",
      outline: "border-input bg-background",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type CalendarProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof calendarVariants> & {
    month?: number;
    year?: number;
    showHeader?: boolean;
    showWeekdays?: boolean;
  };

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const days: (number | null)[] = [];
  const startDay = first.getDay();
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= last.getDate(); d++) days.push(d);
  return days;
}

function Calendar({
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  showHeader = true,
  showWeekdays = true,
  variant,
  className,
  id,
  ...props
}: CalendarProps) {
  const days = getDaysInMonth(year, month);

  return (
    <div
      className={cn(calendarVariants({ variant }), "p-3", className)}
      id={id}
      {...props}
    >
      {showHeader && (
        <div className="mb-3 text-center font-medium text-foreground">
          {MONTHS[month]} {year}
        </div>
      )}
      {showWeekdays && (
        <div className="grid grid-cols-7 gap-1 mb-1 text-muted-foreground text-xs font-medium">
          {DAYS.map((d) => (
            <div key={d} className="flex items-center justify-center h-7">
              {d}
            </div>
          ))}
        </div>
      )}
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <div
            key={i}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md text-center",
              d === null ? "invisible" : "text-foreground hover:bg-accent hover:text-accent-foreground cursor-default"
            )}
          >
            {d ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar, calendarVariants };
