import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type SpaceProps = Components["Space"];

const sizeMap = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
} as const;

export function Space({ size, direction, className, id }: SpaceProps) {
  const spaceSize = sizeMap[size];
  return (
    <div
      role="presentation"
      aria-hidden
      className={cn(direction === "vertical" ? "w-full" : "h-full shrink-0", className)}
      id={id}
      style={
        direction === "vertical"
          ? { height: spaceSize, minHeight: spaceSize }
          : { width: spaceSize, minWidth: spaceSize }
      }
    />
  );
}
