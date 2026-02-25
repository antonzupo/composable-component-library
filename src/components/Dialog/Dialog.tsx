import * as React from "react";
import { cn } from "@/lib/utils";

const roundedClass = (r: string) =>
  r === "none" ? "rounded-none" : r === "sm" ? "rounded-sm" : r === "md" ? "rounded-md" : r === "lg" ? "rounded-lg" : "rounded-full";

const paddingClass = (p: string) =>
  p === "none" ? "p-0" : p === "sm" ? "p-4" : p === "md" ? "p-6" : "p-8";

const alignClass = (a: string) =>
  a === "left" ? "text-left" : a === "center" ? "text-center" : "text-right";

export type DialogContentProps = {
  title: string;
  description: string;
  showClose?: boolean;
  titleAlign?: "left" | "center" | "right";
  descriptionAlign?: "left" | "center" | "right";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export function DialogContent({
  title,
  description,
  showClose = true,
  titleAlign = "left",
  descriptionAlign = "left",
  rounded = "lg",
  padding = "md",
  className,
  id,
  children,
}: DialogContentProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className={cn(
        "w-full max-w-lg border border-border bg-background shadow-lg",
        roundedClass(rounded),
        paddingClass(padding),
        className
      )}
      id={id}
    >
      <div className="relative">
        {showClose && (
          <button
            type="button"
            className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close"
          >
            <span className="inline-flex size-4 items-center justify-center">×</span>
          </button>
        )}
        <h2 id="dialog-title" className={cn("pr-8 text-lg font-semibold", alignClass(titleAlign))}>
          {title}
        </h2>
        <p
          id="dialog-description"
          className={cn("mt-2 text-sm text-muted-foreground", alignClass(descriptionAlign))}
        >
          {description}
        </p>
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
