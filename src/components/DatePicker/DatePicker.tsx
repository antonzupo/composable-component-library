import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

function formatDate(date: Date): string {
  return date.toLocaleDateString(undefined, { dateStyle: "long" });
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" });
}

function formatRange(range: DateRange): string {
  if (range.from && range.to) {
    return `${formatDate(range.from)} – ${formatDate(range.to)}`;
  }
  if (range.from) return formatDate(range.from);
  return "";
}

export type DatePickerAppearance = "basic" | "dateOfBirth" | "input" | "timePicker" | "naturalLanguage";

export interface DatePickerProps {
  appearance?: DatePickerAppearance;
  placeholder?: string;
  mode?: "single" | "range";
  triggerVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  triggerSize?: "default" | "sm" | "lg" | "icon";
  contentClassName?: string;
  className?: string;
  id?: string;
}

const inputLikeClassName =
  "flex h-9 w-full min-w-[280px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

export function DatePicker({
  appearance = "basic",
  placeholder = "Pick a date",
  mode = "single",
  triggerVariant = "outline",
  triggerSize = "default",
  contentClassName,
  className,
  id,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>();
  const [range, setRange] = React.useState<DateRange>({ from: undefined, to: undefined });

  const handleSelect = React.useCallback(
    (value: Date | DateRange) => {
      if (mode === "range" && value && typeof value === "object" && "from" in value) {
        setRange(value);
      } else if (mode === "single" && value instanceof Date) {
        setDate(value);
      }
    },
    [mode]
  );

  const value = mode === "range" ? range : date;
  const label =
    mode === "range"
      ? formatRange(value as DateRange)
      : value instanceof Date
        ? formatDate(value)
        : "";
  const labelShort = mode === "single" && value instanceof Date ? formatDateShort(value) : label;

  const isInputLike = appearance === "input" || appearance === "naturalLanguage";
  const captionLayout = appearance === "dateOfBirth" ? "dropdown" : "label";
  const effectivePlaceholder =
    appearance === "naturalLanguage" ? "e.g. next Friday, tomorrow" : placeholder;

  const calendar =
    mode === "range" ? (
      <Calendar
        mode="range"
        required
        selected={range}
        onSelect={handleSelect as (range: DateRange | undefined) => void}
        captionLayout={captionLayout}
      />
    ) : (
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect as (date: Date | undefined) => void}
        captionLayout={captionLayout}
      />
    );

  const trigger = isInputLike ? (
    <button
      type="button"
      className={cn(
        inputLikeClassName,
        "cursor-pointer text-left",
        !labelShort && "text-muted-foreground",
        className
      )}
      id={id}
    >
      {appearance === "naturalLanguage"
        ? labelShort || effectivePlaceholder
        : labelShort || placeholder}
    </button>
  ) : (
    <Button
      type="button"
      variant={triggerVariant}
      size={triggerSize}
      data-empty={!label}
      className={cn(
        "w-[280px] justify-start text-left font-normal",
        !label && "text-muted-foreground",
        className
      )}
      id={id}
    >
      <CalendarIcon className="mr-2 shrink-0" />
      {label || placeholder}
    </Button>
  );

  return (
    <div className="flex flex-col gap-1">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent className={cn("w-auto p-0", contentClassName)} align="start">
          {calendar}
        </PopoverContent>
      </Popover>
      {appearance === "naturalLanguage" && (
        <p className="text-muted-foreground text-xs">
          {value instanceof Date
            ? `Your date: ${formatDate(value)}`
            : "Enter a date in natural language or pick from the calendar."}
        </p>
      )}
    </div>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
