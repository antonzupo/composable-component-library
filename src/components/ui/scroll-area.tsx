import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const ScrollAreaRoot = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    {children}
  </ScrollAreaPrimitive.Root>
));
ScrollAreaRoot.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaViewport = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    ref={ref}
    className={cn("h-full w-full rounded-[inherit]", className)}
    {...props}
  />
));
ScrollAreaViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;

const ScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.Scrollbar>
));

ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaRoot ref={ref} className={className} {...props}>
    <ScrollAreaViewport>{children}</ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
));
ScrollArea.displayName = "ScrollArea";

export {
  ScrollArea,
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollBar,
  ScrollAreaCorner,
};
