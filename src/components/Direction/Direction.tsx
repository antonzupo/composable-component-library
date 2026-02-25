import * as React from "react";
import { cn } from "@/lib/utils";

export type DirectionProps = React.HTMLAttributes<HTMLDivElement> & {
  dir: "ltr" | "rtl";
  children?: React.ReactNode;
};

const Direction = React.forwardRef<HTMLDivElement, DirectionProps>(
  ({ dir, className, id, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        dir={dir}
        className={cn(className)}
        id={id}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Direction.displayName = "Direction";

export { Direction };
