import { cn } from "@/lib/utils";

export type FlexProps = {
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  justify: "start" | "center" | "end" | "between" | "around";
  align: "start" | "center" | "end" | "stretch";
  gap: "none" | "sm" | "md" | "lg";
  wrap: boolean;
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

const justifyClass = (j: FlexProps["justify"]) =>
  j === "start" ? "justify-start" : j === "center" ? "justify-center" : j === "end" ? "justify-end" : j === "between" ? "justify-between" : "justify-around";

const alignClass = (a: FlexProps["align"]) =>
  a === "start" ? "items-start" : a === "center" ? "items-center" : a === "end" ? "items-end" : "items-stretch";

const gapClass = (gap: FlexProps["gap"]) =>
  gap === "none" ? "gap-0" : gap === "sm" ? "gap-2" : gap === "md" ? "gap-4" : "gap-6";

const flexDir = (d: FlexProps["direction"]) =>
  d === "row" ? "flex-row" : d === "column" ? "flex-col" : d === "row-reverse" ? "flex-row-reverse" : "flex-col-reverse";

export function Flex({ direction, justify, align, gap, wrap, className, id, children }: FlexProps) {
  return (
    <div
      className={cn(
        "flex",
        flexDir(direction),
        justifyClass(justify),
        alignClass(align),
        gapClass(gap),
        wrap && "flex-wrap",
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
}

export { justifyClass as flexJustifyClass, alignClass as flexAlignClass, gapClass as flexGapClass, flexDir as flexDirectionClass };
