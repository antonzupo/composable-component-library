import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

export const gridPuckConfig = {
  Grid: {
    label: "Grid",
    fields: {
      content: { type: "slot", label: "Content" },
      columns: {
        type: "select",
        label: "Columns",
        options: [
          { label: "2", value: 2 },
          { label: "3", value: 3 },
          { label: "4", value: 4 },
          { label: "6", value: 6 },
          { label: "12", value: 12 },
        ],
      },
      gap: {
        type: "select",
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
      gap: "md" as const,
      className: "",
      id: "",
    },
    render: ({ content, columns, gap, className, id }: Components["Grid"]) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const gapClass = gap === "none" ? "gap-0" : gap === "sm" ? "gap-2" : gap === "md" ? "gap-4" : "gap-6";
      const colsClass =
        columns === 2 ? "grid-cols-2" : columns === 3 ? "grid-cols-3" : columns === 4 ? "grid-cols-4" : columns === 6 ? "grid-cols-6" : "grid-cols-12";
      if (!Content) return <div className={cn("grid", colsClass, gapClass, "min-h-[120px]", className)} id={id || undefined} />;
      return (
        <div id={id || undefined} className="contents">
          <Content
            className={cn("grid", colsClass, gapClass, className)}
            minEmptyHeight={160}
          />
        </div>
      );
    },
  },
};
