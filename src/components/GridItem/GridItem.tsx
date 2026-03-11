import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type GridItemProps = Components["GridItem"] & { children?: React.ReactNode };

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({ spanColumns = 1, spanRows = 1, className, id, children }, ref) => (
    <div
      ref={ref}
      className={className}
      id={id}
      style={{
        gridColumn: `span ${spanColumns}`,
        gridRow: `span ${spanRows}`,
      }}
    >
      {children}
    </div>
  )
);
GridItem.displayName = "GridItem";
