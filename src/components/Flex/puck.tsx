import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "layout";

export const flexPuckConfig = {
  Flex: {
    label: "Flex",
    fields: {
      content: { type: "slot", label: "Content" },
      direction: {
        type: "select",
        label: "Direction",
        options: [
          { label: "Row", value: "row" },
          { label: "Column", value: "column" },
          { label: "Row reverse", value: "row-reverse" },
          { label: "Column reverse", value: "column-reverse" },
        ],
      },
      justify: {
        type: "select",
        label: "Justify",
        options: [
          { label: "Start", value: "start" },
          { label: "Center", value: "center" },
          { label: "End", value: "end" },
          { label: "Between", value: "between" },
          { label: "Around", value: "around" },
        ],
      },
      align: {
        type: "select",
        label: "Align",
        options: [
          { label: "Start", value: "start" },
          { label: "Center", value: "center" },
          { label: "End", value: "end" },
          { label: "Stretch", value: "stretch" },
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
      wrap: {
        type: "select",
        label: "Wrap",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      content: [],
      direction: "row" as const,
      justify: "start" as const,
      align: "start" as const,
      gap: "md" as const,
      wrap: false,
      className: "",
      id: "",
    },
    render: ({ content, direction, justify, align, gap, wrap, className, id }: Components["Flex"]) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const justifyClass =
        justify === "start" ? "justify-start" : justify === "center" ? "justify-center" : justify === "end" ? "justify-end" : justify === "between" ? "justify-between" : "justify-around";
      const alignClass =
        align === "start" ? "items-start" : align === "center" ? "items-center" : align === "end" ? "items-end" : "items-stretch";
      const gapClass = gap === "none" ? "gap-0" : gap === "sm" ? "gap-2" : gap === "md" ? "gap-4" : "gap-6";
      const flexDir =
        direction === "row" ? "flex-row" : direction === "column" ? "flex-col" : direction === "row-reverse" ? "flex-row-reverse" : "flex-col-reverse";
      if (!Content) return <div className={cn("flex", flexDir, justifyClass, alignClass, gapClass, wrap && "flex-wrap", "min-h-[120px]", className)} id={id || undefined} />;
      return (
        <div id={id || undefined} className="contents">
          <Content
            className={cn("flex", flexDir, justifyClass, alignClass, gapClass, wrap && "flex-wrap", className)}
            minEmptyHeight={160}
          />
        </div>
      );
    },
  },
};
