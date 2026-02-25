import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button/Button";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const DEFAULT_PRESETS: CalendarPreset[] = [
  { id: "today", label: "Today", getValue: () => startOfDay(new Date()) },
  { id: "tomorrow", label: "Tomorrow", getValue: () => { const d = new Date(); d.setDate(d.getDate() + 1); return startOfDay(d); } },
  {
    id: "thisWeek",
    label: "This week",
    getValue: () => {
      const d = new Date();
      const day = d.getDay();
      const start = new Date(d);
      start.setDate(d.getDate() - day);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return { from: startOfDay(start), to: startOfDay(end) };
    },
  },
  {
    id: "next7days",
    label: "Next 7 days",
    getValue: () => {
      const from = startOfDay(new Date());
      const to = new Date(from);
      to.setDate(to.getDate() + 6);
      return { from, to: startOfDay(to) };
    },
  },
  {
    id: "thisMonth",
    label: "This month",
    getValue: () => {
      const d = new Date();
      const from = new Date(d.getFullYear(), d.getMonth(), 1);
      const to = new Date(d.getFullYear(), d.getMonth() + 1, 0);
      return { from: startOfDay(from), to: startOfDay(to) };
    },
  },
];

const CELL_SIZE_CLASSES = {
  sm: "h-6 w-6 text-xs",
  default: "h-8 w-8 text-sm",
  lg: "h-10 w-10 text-base",
} as const;

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

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function startOfDay(d: Date) {
  const out = new Date(d);
  out.setHours(0, 0, 0, 0);
  return out;
}

export type DateRange = { from?: Date; to?: Date };

export type CalendarPreset = { id?: string; label: string; getValue: () => Date | DateRange };

/** Month is 1–12 (January = 1, December = 12). */
export type CalendarProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof calendarVariants> & {
    month?: number;
    year?: number;
    defaultMonth?: Date;
    showHeader?: boolean;
    showWeekdays?: boolean;
    showOutsideDays?: boolean;
    showNavigation?: boolean;
    captionLayout?: "label" | "dropdown";
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    mode?: "single" | "range";
    value?: Date | DateRange;
    onSelect?: (date: Date | DateRange) => void;
    onMonthChange?: (month: number, year: number) => void;
    minDate?: Date;
    maxDate?: Date;
    disabled?: (date: Date) => boolean;
    buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    showPresets?: boolean;
    presets?: CalendarPreset[];
    /** When provided (e.g. from CMS), show only these preset IDs from the default set. */
    presetKeys?: string[];
    showTime?: boolean;
    bookedDates?: Date[];
    cellSize?: "sm" | "default" | "lg";
  };

type CalendarCell = { date: Date | null; isCurrentMonth: boolean };

/** monthIndex is 0–11 (JavaScript Date convention). */
function getCalendarCells(
  year: number,
  monthIndex: number,
  weekStartsOn: number,
  showOutsideDays: boolean
): CalendarCell[] {
  const first = new Date(year, monthIndex, 1);
  const last = new Date(year, monthIndex + 1, 0);
  const startOffset = (first.getDay() - weekStartsOn + 7) % 7;
  const daysInMonth = last.getDate();
  const cells: CalendarCell[] = [];

  if (showOutsideDays && startOffset > 0) {
    const prevMonth = monthIndex === 0 ? 11 : monthIndex - 1;
    const prevYear = monthIndex === 0 ? year - 1 : year;
    const prevLast = new Date(prevYear, prevMonth + 1, 0).getDate();
    for (let i = startOffset - 1; i >= 0; i--) {
      cells.push({
        date: new Date(prevYear, prevMonth, prevLast - i),
        isCurrentMonth: false,
      });
    }
  } else if (!showOutsideDays) {
    for (let i = 0; i < startOffset; i++) {
      cells.push({ date: null, isCurrentMonth: false });
    }
  }

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, monthIndex, d), isCurrentMonth: true });
  }

  if (showOutsideDays) {
    const remaining = 42 - cells.length;
    for (let i = 1; i <= remaining; i++) {
      cells.push({
        date: new Date(year, monthIndex + 1, i),
        isCurrentMonth: false,
      });
    }
  } else {
    const endOffset = 7 - (cells.length % 7);
    if (endOffset < 7) {
      for (let i = 0; i < endOffset; i++) {
        cells.push({ date: null, isCurrentMonth: false });
      }
    }
  }

  return cells;
}

function isBooked(date: Date, bookedDates?: Date[]) {
  if (!bookedDates?.length) return false;
  const d = startOfDay(date);
  return bookedDates.some((b) => isSameDay(startOfDay(b), d));
}

function Calendar({
  month: monthProp,
  year: yearProp,
  defaultMonth,
  showHeader = true,
  showWeekdays = true,
  showOutsideDays = false,
  showNavigation = false,
  captionLayout = "label",
  weekStartsOn = 0,
  mode = "single",
  value,
  onSelect,
  onMonthChange,
  minDate,
  maxDate,
  disabled,
  buttonVariant = "ghost",
  showPresets = false,
  presets: presetsProp,
  presetKeys,
  showTime = false,
  bookedDates,
  cellSize = "default",
  variant,
  className,
  id,
  ...props
}: CalendarProps) {
  const today = React.useMemo(() => startOfDay(new Date()), []);
  const presets = React.useMemo(() => {
    const base = presetsProp ?? DEFAULT_PRESETS;
    if (presetKeys?.length) {
      return base.filter((p) => p.id && presetKeys.includes(p.id));
    }
    return base;
  }, [presetsProp, presetKeys]);

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(() => today);
  const [range, setRange] = React.useState<DateRange>(() => ({ from: today }));
  const [rangeSelectingFrom, setRangeSelectingFrom] = React.useState(true);
  const [timeValue, setTimeValue] = React.useState(() => {
    const v = value;
    if (v instanceof Date) return { hours: v.getHours(), minutes: v.getMinutes() };
    return { hours: new Date().getHours(), minutes: new Date().getMinutes() };
  });
  React.useEffect(() => {
    const v = value;
    if (v instanceof Date) setTimeValue({ hours: v.getHours(), minutes: v.getMinutes() });
  }, [value]);
  const [viewMonth, setViewMonth] = React.useState(() => {
    if (monthProp !== undefined && yearProp !== undefined) return { month: monthProp, year: yearProp };
    const d = defaultMonth ?? new Date();
    return { month: d.getMonth() + 1, year: d.getFullYear() };
  });

  const month = monthProp ?? viewMonth.month;
  const year = yearProp ?? viewMonth.year;
  const monthIndex = month - 1;

  const setMonthYear = React.useCallback(
    (m: number, y: number) => {
      if (monthProp === undefined && yearProp === undefined) {
        setViewMonth({ month: m, year: y });
      }
      onMonthChange?.(m, y);
    },
    [monthProp, yearProp, onMonthChange]
  );

  React.useEffect(() => {
    if (monthProp !== undefined && yearProp !== undefined) {
      setViewMonth({ month: monthProp, year: yearProp });
    }
  }, [monthProp, yearProp]);

  const useTwoPanels = mode === "range";
  const month2 = month === 12 ? 1 : month + 1;
  const year2 = month === 12 ? year + 1 : year;
  const monthIndex2 = month2 - 1;

  const days = getCalendarCells(year, monthIndex, weekStartsOn, showOutsideDays);
  const daysRight = useTwoPanels ? getCalendarCells(year2, monthIndex2, weekStartsOn, showOutsideDays) : [];
  const weekdayLabels = React.useMemo(
    () => DAYS.slice(weekStartsOn).concat(DAYS.slice(0, weekStartsOn)),
    [weekStartsOn]
  );

  const currentRange = value !== undefined && typeof value === "object" && "from" in value ? value : range;
  const currentSingle = value !== undefined && typeof value !== "object" ? value : selectedDate;

  const isSelected = (cell: CalendarCell) => {
    if (!cell.date || (!cell.isCurrentMonth && !showOutsideDays)) return false;
    if (mode === "single") {
      return currentSingle !== null && isSameDay(currentSingle, cell.date);
    }
    const from = currentRange.from;
    const to = currentRange.to;
    if (!from) return false;
    if (!to) return isSameDay(from, cell.date);
    return isSameDay(from, cell.date) || isSameDay(to, cell.date);
  };

  const isRangeStart = (cell: CalendarCell) => {
    if (mode !== "range" || !cell.date) return false;
    const from = currentRange.from;
    return from !== undefined && isSameDay(from, cell.date);
  };

  const isRangeEnd = (cell: CalendarCell) => {
    if (mode !== "range" || !cell.date) return false;
    const to = currentRange.to;
    return to !== undefined && isSameDay(to, cell.date);
  };

  const isInRange = (cell: CalendarCell) => {
    if (mode !== "range" || !cell.date) return false;
    const from = currentRange.from;
    const to = currentRange.to;
    if (!from || !to) return false;
    const cellTime = cell.date.getTime();
    const fromTime = startOfDay(from).getTime();
    const toTime = startOfDay(to).getTime();
    const [minT, maxT] = fromTime <= toTime ? [fromTime, toTime] : [toTime, fromTime];
    return cellTime >= minT && cellTime <= maxT;
  };

  const isToday = (cell: CalendarCell) => cell.date !== null && isSameDay(today, cell.date);

  const isDisabled = (cell: CalendarCell) => {
    if (!cell.date) return true;
    if (minDate && cell.date < startOfDay(minDate)) return true;
    if (maxDate && cell.date > startOfDay(maxDate)) return true;
    if (bookedDates?.length && isBooked(cell.date, bookedDates)) return true;
    return disabled?.(cell.date) ?? false;
  };

  const isBookedCell = (cell: CalendarCell) => cell.date !== null && isBooked(cell.date, bookedDates);

  const applyTime = (d: Date) => {
    const out = new Date(d);
    out.setHours(timeValue.hours, timeValue.minutes, 0, 0);
    return out;
  };

  const handleDayClick = (cell: CalendarCell) => {
    if (!cell.date || (!cell.isCurrentMonth && !showOutsideDays)) return;
    if (isDisabled(cell)) return;
    const date = startOfDay(cell.date);
    const dateWithTime = showTime ? applyTime(date) : date;
    if (mode === "single") {
      onSelect?.(dateWithTime);
      if (value === undefined) setSelectedDate(date);
    } else {
      if (rangeSelectingFrom) {
        const newRange: DateRange = { from: date, to: undefined };
        setRangeSelectingFrom(false);
        if (value === undefined) setRange(newRange);
        onSelect?.(newRange);
      } else {
        const from = currentRange.from ?? date;
        const fromTime = startOfDay(from).getTime();
        const toTime = date.getTime();
        const [fromFinal, toFinal] = fromTime <= toTime ? [from, date] : [date, from];
        const newRange = { from: fromFinal, to: toFinal };
        setRangeSelectingFrom(true);
        if (value === undefined) setRange(newRange);
        onSelect?.(newRange);
      }
    }
    if (!cell.isCurrentMonth) {
      setMonthYear(cell.date.getMonth() + 1, cell.date.getFullYear());
    }
  };

  const handlePresetClick = (preset: CalendarPreset) => {
    const v = preset.getValue();
    if (v instanceof Date) {
      const withTime = showTime ? applyTime(v) : v;
      onSelect?.(withTime);
      setSelectedDate(v);
      setRange({});
      setRangeSelectingFrom(true);
    } else {
      onSelect?.(v);
      setRange(v);
      setRangeSelectingFrom(true);
      if (v.from) setSelectedDate(v.from);
    }
  };

  const goPrev = () => {
    if (month === 1) setMonthYear(12, year - 1);
    else setMonthYear(month - 1, year);
  };

  const goNext = () => {
    if (month === 12) setMonthYear(1, year + 1);
    else setMonthYear(month + 1, year);
  };

  const canGoPrev = !minDate || new Date(year, monthIndex, 1) > startOfDay(minDate);
  const canGoNext = useTwoPanels
    ? !maxDate || new Date(year2, monthIndex2 + 1, 0) < startOfDay(maxDate)
    : !maxDate || new Date(year, monthIndex + 1, 0) < startOfDay(maxDate);

  const cellSizeClass = CELL_SIZE_CLASSES[cellSize];
  const weekdayHeightClass = cellSize === "sm" ? "h-6" : cellSize === "lg" ? "h-10" : "h-7";

  return (
    <div
      className={cn(calendarVariants({ variant }), "p-3", className)}
      id={id}
      {...props}
    >
      {showPresets && presets.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              type="button"
              variant={buttonVariant}
              size="sm"
              className="text-xs"
              onClick={() => handlePresetClick(preset)}
            >
              {preset.label}
            </Button>
          ))}
        </div>
      )}
      {showTime && mode === "single" && (
        <div className="mb-3 flex items-center gap-2">
          <label className="text-xs text-muted-foreground">Time</label>
          <input
            type="number"
            min={0}
            max={23}
            value={timeValue.hours}
            onChange={(e) => setTimeValue((t) => ({ ...t, hours: Math.max(0, Math.min(23, Number(e.target.value) || 0)) }))}
            className="w-12 rounded border border-input bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Hours"
          />
          <span className="text-muted-foreground">:</span>
          <input
            type="number"
            min={0}
            max={59}
            value={timeValue.minutes}
            onChange={(e) => setTimeValue((t) => ({ ...t, minutes: Math.max(0, Math.min(59, Number(e.target.value) || 0)) }))}
            className="w-12 rounded border border-input bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Minutes"
          />
        </div>
      )}
      {showHeader && !useTwoPanels && (
        <div className="mb-3 flex w-full items-center">
          <div className="flex w-8 shrink-0 justify-start">
            {showNavigation && captionLayout === "label" && (
              <Button
                type="button"
                variant={buttonVariant}
                size="icon"
                className="h-8 w-8"
                onClick={goPrev}
                disabled={!canGoPrev}
                aria-label="Previous month"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
            )}
          </div>
          <div className="flex flex-1 items-center justify-center">
            {captionLayout === "label" && (
              <div className="text-center font-medium text-foreground">
                {MONTHS[monthIndex]} {year}
              </div>
            )}
            {captionLayout === "dropdown" && (
              <div className="flex items-center gap-1">
                <select
                  className="rounded-md border border-input bg-background px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
                  value={month}
                  onChange={(e) => setMonthYear(Number(e.target.value), year)}
                  aria-label="Month"
                >
                  {MONTHS.map((m, i) => (
                    <option key={m} value={i + 1}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  className="rounded-md border border-input bg-background px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
                  value={year}
                  onChange={(e) => setMonthYear(month, Number(e.target.value))}
                  aria-label="Year"
                >
                  {Array.from({ length: maxDate && minDate ? maxDate.getFullYear() - minDate.getFullYear() + 1 : 101 }, (_, i) => {
                    const y = minDate ? minDate.getFullYear() + i : new Date().getFullYear() - 50 + i;
                    return (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}
          </div>
          <div className="flex w-8 shrink-0 justify-end">
            {showNavigation && captionLayout === "label" && (
              <Button
                type="button"
                variant={buttonVariant}
                size="icon"
                className="h-8 w-8"
                onClick={goNext}
                disabled={!canGoNext}
                aria-label="Next month"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            )}
          </div>
        </div>
      )}
      <div className={cn(useTwoPanels && "flex gap-6")}>
        <div className={cn(useTwoPanels && "min-w-0 flex-1")}>
          {showHeader && useTwoPanels && (
            <div className="mb-3 flex w-full items-center">
              <div className="flex w-8 shrink-0 justify-start">
                {showNavigation && captionLayout === "label" && (
                  <Button
                    type="button"
                    variant={buttonVariant}
                    size="icon"
                    className="h-8 w-8"
                    onClick={goPrev}
                    disabled={!canGoPrev}
                    aria-label="Previous month"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                )}
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="text-center font-medium text-foreground">
                  {MONTHS[monthIndex]} {year}
                </div>
              </div>
              <div className="flex w-8 shrink-0" />
            </div>
          )}
          {showWeekdays && (
            <div className={cn("grid grid-cols-7 gap-1 mb-1 text-muted-foreground text-xs font-medium", weekdayHeightClass)}>
              {weekdayLabels.map((d) => (
                <div key={d} className="flex items-center justify-center">
                  {d}
                </div>
              ))}
            </div>
          )}
          <div className="grid grid-cols-7 gap-1">
            {days.map((cell, i) => {
              const isEmpty = cell.date === null;
              const clickable = !isEmpty && (cell.isCurrentMonth || showOutsideDays) && !isDisabled(cell);
              const inRange = mode === "range" && isInRange(cell);
              const rangeStart = isRangeStart(cell);
              const rangeEnd = isRangeEnd(cell);
              const booked = isBookedCell(cell);
              return (
                <div
                  key={i}
                  role={clickable ? "button" : undefined}
                  tabIndex={clickable ? 0 : undefined}
                  onClick={clickable ? () => handleDayClick(cell) : undefined}
                  onKeyDown={
                    clickable
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleDayClick(cell);
                          }
                        }
                      : undefined
                  }
                  className={cn(
                    "flex items-center justify-center rounded-md text-center",
                    cellSizeClass,
                    isEmpty && "invisible",
                    clickable && "text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer select-none",
                    !clickable && !isEmpty && "text-muted-foreground opacity-50 cursor-not-allowed",
                    !cell.isCurrentMonth && showOutsideDays && "text-muted-foreground",
                    inRange && !rangeStart && !rangeEnd && "bg-primary/20 text-foreground",
                    rangeStart && "rounded-r-none bg-primary text-primary-foreground hover:bg-primary/90",
                    rangeEnd && "rounded-l-none bg-primary text-primary-foreground hover:bg-primary/90",
                    rangeStart && rangeEnd && "rounded-md",
                    isSelected(cell) && !inRange && !rangeStart && !rangeEnd && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
                    isToday(cell) && !isSelected(cell) && !inRange && "bg-accent text-accent-foreground font-medium",
                    booked && !isEmpty && "ring-1 ring-amber-500/50 bg-amber-500/5"
                  )}
                >
                  {cell.date ? cell.date.getDate() : ""}
                </div>
              );
            })}
          </div>
        </div>
        {useTwoPanels && (
          <div className="flex min-w-0 flex-1 flex-col">
            {showHeader && (
              <div className="mb-3 flex w-full items-center">
                <div className="flex w-8 shrink-0" />
                <div className="flex flex-1 items-center justify-center">
                  <div className="text-center font-medium text-foreground">
                    {MONTHS[monthIndex2]} {year2}
                  </div>
                </div>
                <div className="flex w-8 shrink-0 justify-end">
                  {showNavigation && captionLayout === "label" && (
                    <Button
                      type="button"
                      variant={buttonVariant}
                      size="icon"
                      className="h-8 w-8"
                      onClick={goNext}
                      disabled={!canGoNext}
                      aria-label="Next month"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Button>
                  )}
                </div>
              </div>
            )}
            {showWeekdays && (
              <div className={cn("grid grid-cols-7 gap-1 mb-1 text-muted-foreground text-xs font-medium", weekdayHeightClass)}>
                {weekdayLabels.map((d) => (
                  <div key={`R-${d}`} className="flex items-center justify-center">
                    {d}
                  </div>
                ))}
              </div>
            )}
            <div className="grid grid-cols-7 gap-1">
              {daysRight.map((cell, i) => {
                const isEmpty = cell.date === null;
                const clickable = !isEmpty && (cell.isCurrentMonth || showOutsideDays) && !isDisabled(cell);
                const inRange = mode === "range" && isInRange(cell);
                const rangeStart = isRangeStart(cell);
                const rangeEnd = isRangeEnd(cell);
                const booked = isBookedCell(cell);
                return (
                  <div
                    key={`R-${i}`}
                    role={clickable ? "button" : undefined}
                    tabIndex={clickable ? 0 : undefined}
                    onClick={clickable ? () => handleDayClick(cell) : undefined}
                    onKeyDown={
                      clickable
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleDayClick(cell);
                            }
                          }
                        : undefined
                    }
                    className={cn(
                      "flex items-center justify-center rounded-md text-center",
                      cellSizeClass,
                      isEmpty && "invisible",
                      clickable && "text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer select-none",
                      !clickable && !isEmpty && "text-muted-foreground opacity-50 cursor-not-allowed",
                      !cell.isCurrentMonth && showOutsideDays && "text-muted-foreground",
                      inRange && !rangeStart && !rangeEnd && "bg-primary/20 text-foreground",
                      rangeStart && "rounded-r-none bg-primary text-primary-foreground hover:bg-primary/90",
                      rangeEnd && "rounded-l-none bg-primary text-primary-foreground hover:bg-primary/90",
                      rangeStart && rangeEnd && "rounded-md",
                      isSelected(cell) && !inRange && !rangeStart && !rangeEnd && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
                      isToday(cell) && !isSelected(cell) && !inRange && "bg-accent text-accent-foreground font-medium",
                      booked && !isEmpty && "ring-1 ring-amber-500/50 bg-amber-500/5"
                    )}
                  >
                    {cell.date ? cell.date.getDate() : ""}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar, calendarVariants };
