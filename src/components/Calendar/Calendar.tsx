"use client";

import * as React from "react";
import type { DateRange } from "react-day-picker";
import { Calendar as CalendarRoot } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

type CalendarProps = Components["Calendar"];

function parseDefaultMonth(
  defaultMonth: string | undefined,
  year: number,
  month: number
): Date {
  if (defaultMonth?.trim()) {
    const parsed = new Date(defaultMonth.trim());
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return new Date(year, month - 1);
}

export function Calendar({
  month,
  year,
  defaultMonth,
  showHeader = true,
  showWeekdays = true,
  showOutsideDays = true,
  showNavigation = true,
  captionLayout = "label",
  weekStartsOn = 0,
  mode = "single",
  buttonVariant = "ghost",
  cellSize = "default",
  variant = "default",
  bookedDates = [],
  className,
  id,
}: CalendarProps) {
  const defaultMonthDate = parseDefaultMonth(defaultMonth, year, month);

  const [singleSelected, setSingleSelected] = React.useState<Date | undefined>(
    undefined
  );
  const [rangeSelected, setRangeSelected] = React.useState<
    DateRange | undefined
  >(undefined);

  const disabledDates = React.useMemo(() => {
    if (!bookedDates?.length) return undefined;
    const dates: Date[] = [];
    for (const item of bookedDates) {
      if (item?.date?.trim()) {
        const d = new Date(item.date.trim());
        if (!Number.isNaN(d.getTime())) dates.push(d);
      }
    }
    return dates.length > 0 ? dates : undefined;
  }, [bookedDates]);

  const visibilityClassNames = React.useMemo(
    () => ({
      ...(!showHeader && { month_caption: "!hidden" }),
      ...(!showNavigation && { nav: "!hidden" }),
      ...(!showWeekdays && { weekdays: "!hidden" }),
    }),
    [showHeader, showNavigation, showWeekdays]
  );

  const rootClassName = cn(
    cellSize === "sm" && "[--cell-size:1.75rem]",
    cellSize === "lg" && "[--cell-size:2.5rem]"
  );

  const commonProps = {
    defaultMonth: defaultMonthDate,
    showOutsideDays,
    captionLayout,
    weekStartsOn,
    buttonVariant,
    disabled: disabledDates,
    classNames: visibilityClassNames,
    className: rootClassName,
  };

  return (
    <div
      id={id || undefined}
      className={cn(
        "w-fit",
        variant === "outline" && "rounded-md border border-input p-1",
        className
      )}
    >
      {mode === "range" ? (
        <CalendarRoot
          mode="range"
          {...commonProps}
          defaultMonth={rangeSelected?.from ?? defaultMonthDate}
          numberOfMonths={2}
          selected={rangeSelected}
          onSelect={setRangeSelected}
        />
      ) : (
        <CalendarRoot
          mode="single"
          {...commonProps}
          selected={singleSelected}
          onSelect={setSingleSelected}
        />
      )}
    </div>
  );
}
