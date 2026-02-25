import * as React from "react";
import { cn } from "@/lib/utils";

const roundedClass = (r: string) =>
  r === "none" ? "rounded-none" : r === "sm" ? "rounded-sm" : r === "md" ? "rounded-md" : r === "lg" ? "rounded-lg" : "rounded-full";

const paddingClass = (p: string) =>
  p === "none" ? "p-0" : p === "sm" ? "p-4" : p === "md" ? "p-6" : "p-8";

const alignClass = (a: string) =>
  a === "left" ? "text-left" : a === "center" ? "text-center" : "text-right";

const sideClasses = {
  top: "inset-x-0 top-0 border-b",
  right: "inset-y-0 right-0 border-l h-full w-full max-w-sm",
  bottom: "inset-x-0 bottom-0 border-t",
  left: "inset-y-0 left-0 border-r h-full w-full max-w-sm",
};

export type DrawerContentProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    description?: string;
    side?: "top" | "right" | "bottom" | "left";
    showHandle?: boolean;
    titleAlign?: "left" | "center" | "right";
    descriptionAlign?: "left" | "center" | "right";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    padding?: "none" | "sm" | "md" | "lg";
    children?: React.ReactNode;
  };

export function DrawerContent({
  title,
  description,
  side = "right",
  showHandle = true,
  titleAlign = "left",
  descriptionAlign = "left",
  rounded = "lg",
  padding = "md",
  className,
  id,
  children,
  ...props
}: DrawerContentProps) {
  return (
    <div
      className={cn(
        "fixed z-50 border-border bg-background shadow-lg",
        sideClasses[side],
        roundedClass(rounded),
        paddingClass(padding),
        className
      )}
      id={id}
      {...props}
    >
      {showHandle && (
        <div className="absolute left-1/2 top-2 h-1.5 w-8 -translate-x-1/2 rounded-full bg-muted-foreground/30" />
      )}
      <div className={showHandle ? "mt-4" : ""}>
        {title && (
          <h2 className={cn("text-lg font-semibold", alignClass(titleAlign))}>
            {title}
          </h2>
        )}
        {description && (
          <p
            className={cn(
              "mt-1 text-sm text-muted-foreground",
              alignClass(descriptionAlign)
            )}
          >
            {description}
          </p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
