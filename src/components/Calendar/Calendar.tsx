import { Calendar as CalendarRoot } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

type CalendarProps = Components["Calendar"];

export function Calendar({
  month,
  year,
  defaultMonth,
  showOutsideDays = true,
  captionLayout = "label",
  weekStartsOn = 0,
  buttonVariant = "ghost",
  cellSize = "default",
  className,
  id,
}: CalendarProps) {
  const defaultMonthDate = defaultMonth
    ? new Date(defaultMonth)
    : new Date(year, month - 1);

  return (
    <div id={id || undefined} className={cn("w-fit", className)}>
      <CalendarRoot
        defaultMonth={defaultMonthDate}
        showOutsideDays={showOutsideDays}
        captionLayout={captionLayout}
        weekStartsOn={weekStartsOn}
        mode="single"
        buttonVariant={buttonVariant}
        className={cn(
          cellSize === "sm" && "[--cell-size:1.75rem]",
          cellSize === "lg" && "[--cell-size:2.5rem]"
        )}
      />
    </div>
  );
}
