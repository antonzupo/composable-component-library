import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type GridProps = Components["Grid"] & { children?: React.ReactNode };

const gapClass = (gap: GridProps["gap"]) =>
  gap === "none" ? "gap-0" : gap === "sm" ? "gap-2" : gap === "md" ? "gap-4" : "gap-6";

const colsClass = (columns: GridProps["columns"]) =>
  columns === 2 ? "grid-cols-2" : columns === 3 ? "grid-cols-3" : columns === 4 ? "grid-cols-4" : columns === 6 ? "grid-cols-6" : "grid-cols-12";

const rowsClass = (rows: number | undefined) =>
  rows === 1 ? "grid-rows-1" : rows === 2 ? "grid-rows-2" : rows === 3 ? "grid-rows-3" : rows === 4 ? "grid-rows-4" : rows === 5 ? "grid-rows-5" : rows === 6 ? "grid-rows-6" : undefined;

export function Grid({ columns, rows, gap, className, id, children }: GridProps) {
  const useRows = rows !== undefined && rows > 0;
  return (
    <div
      className={cn("grid", colsClass(columns), useRows && rowsClass(rows), gapClass(gap), className)}
      style={useRows && rows >= 7 && rows <= 12 ? { gridTemplateRows: `repeat(${rows}, auto)` } : undefined}
      id={id}
    >
      {children}
    </div>
  );
}

export { gapClass as gridGapClass, colsClass as gridColsClass, rowsClass as gridRowsClass };
