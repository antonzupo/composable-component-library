import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type GridProps = Components["Grid"] & { children?: React.ReactNode };

const gapClass = (gap: GridProps["gap"]) =>
  gap === "none" ? "gap-0" : gap === "sm" ? "gap-2" : gap === "md" ? "gap-4" : "gap-6";

const colsClass = (columns: GridProps["columns"]) =>
  columns === 2 ? "grid-cols-2" : columns === 3 ? "grid-cols-3" : columns === 4 ? "grid-cols-4" : columns === 6 ? "grid-cols-6" : "grid-cols-12";

export function Grid({ columns, gap, className, id, children }: GridProps) {
  return (
    <div className={cn("grid", colsClass(columns), gapClass(gap), className)} id={id}>
      {children}
    </div>
  );
}

export { gapClass as gridGapClass, colsClass as gridColsClass };
