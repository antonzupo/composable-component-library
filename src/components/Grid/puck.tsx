import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

/** Grid uses Grid container – Grid item pattern: only GridItem can be dropped into Grid. */
const gridContentAllow = ["GridItem"] as const;

/** Gap in px for slot style (Puck multi-column / advanced layout docs) */
const gapPx = (gap: Components["Grid"]["gap"]) =>
  gap === "none" ? 0 : gap === "sm" ? 8 : gap === "md" ? 16 : 24;

export const gridPuckConfig = {
  Grid: {
    label: "Grid",
    fields: {
      content: { type: "slot", label: "Content", allow: [...gridContentAllow] },
      columns: {
        type: "select" as const,
        label: "Columns",
        options: [
          { label: "2", value: 2 },
          { label: "3", value: 3 },
          { label: "4", value: 4 },
          { label: "6", value: 6 },
          { label: "12", value: 12 },
        ],
      },
      rows: {
        type: "select" as const,
        label: "Rows",
        options: [
          { label: "Auto", value: 0 },
          { label: "1", value: 1 },
          { label: "2", value: 2 },
          { label: "3", value: 3 },
          { label: "4", value: 4 },
          { label: "5", value: 5 },
          { label: "6", value: 6 },
        ],
      },
      gap: {
        type: "select" as const,
        label: "Gap",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      content: [],
      columns: 3 as const,
      rows: 0,
      gap: "md" as const,
      className: "",
      id: "",
    },
    render: ({ content, columns, rows, gap, className, id }: Components["Grid"]) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const gridStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        ...(rows && rows > 0 && { gridTemplateRows: `repeat(${rows}, auto)` }),
        gap: gapPx(gap),
      };
      if (!Content)
        return (
          <div
            style={gridStyle}
            className={cn("min-h-[120px]", className)}
            id={id || undefined}
          />
        );
      return (
        <div id={id || undefined} className="contents">
          <Content
            style={gridStyle}
            className={className}
            minEmptyHeight={160}
            collisionAxis="dynamic"
          />
        </div>
      );
    },
  },
};
