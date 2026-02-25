import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const carouselVariants = cva("relative w-full min-h-[200px] overflow-hidden flex flex-col", {
  variants: {
    spacing: {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    spacing: "md",
    orientation: "horizontal",
    rounded: "md",
  },
});

/** Number of slides visible at once (1 = full width, 2 = basis-1/2, 3 = basis-1/3). */
const SLIDE_BASIS: Record<"1" | "2" | "3", { class: string; translatePercent: number }> = {
  "1": { class: "min-w-full", translatePercent: 100 },
  "2": { class: "min-w-1/2 basis-1/2", translatePercent: 50 },
  "3": { class: "min-w-1/3 basis-1/3", translatePercent: 100 / 3 },
};
const SLIDE_BASIS_VERTICAL: Record<"1" | "2" | "3", { class: string; translatePercent: number }> = {
  "1": { class: "min-h-full w-full", translatePercent: 100 },
  "2": { class: "min-h-1/2 basis-1/2 w-full", translatePercent: 50 },
  "3": { class: "min-h-1/3 basis-1/3 w-full", translatePercent: 100 / 3 },
};

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof carouselVariants> & {
    children?: React.ReactNode;
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
    /** Number of slides visible at once (1 = full, 2 = basis-1/2, 3 = basis-1/3). */
    size?: CarouselSize;
  };
export type CarouselSize = "1" | "2" | "3";
export type CarouselSpacing = "none" | "sm" | "md" | "lg";
export type CarouselOrientation = "horizontal" | "vertical";

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      autoPlay = false,
      interval = 5000,
      showArrows = true,
      showDots = true,
      size = "1",
      spacing,
      orientation = "horizontal",
      rounded,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const [index, setIndex] = React.useState(0);
    const items = React.Children.toArray(children);
    const count = items.length;
    const safeIndex = count ? ((index % count) + count) % count : 0;
    const isVertical = orientation === "vertical";
    const basis = isVertical ? SLIDE_BASIS_VERTICAL[size] : SLIDE_BASIS[size];
    const translatePercent = basis.translatePercent;

    React.useEffect(() => {
      if (!autoPlay || count <= 1) return;
      const t = setInterval(() => setIndex((i) => i + 1), interval);
      return () => clearInterval(t);
    }, [autoPlay, interval, count]);

    return (
      <div
        ref={ref}
        className={cn(carouselVariants({ spacing, orientation, rounded }), className)}
        id={id}
        {...props}
      >
        <div className={cn("relative flex flex-1 min-h-0 overflow-hidden", isVertical ? "flex-col" : "flex-row")}>
          {items.map((child, i) => (
            <div
              key={i}
              className={cn("flex-shrink-0 transition-transform duration-300 ease-out", basis.class)}
              style={
                isVertical
                  ? { transform: `translateY(-${safeIndex * translatePercent}%)` }
                  : { transform: `translateX(-${safeIndex * translatePercent}%)` }
              }
            >
              {child}
            </div>
          ))}
        </div>
        {showArrows && count > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => i - 1)}
              className={cn(
                "absolute rounded-full bg-background/80 p-2 shadow hover:bg-background",
                isVertical
                  ? "left-1/2 top-2 -translate-x-1/2 -rotate-90"
                  : "left-2 top-1/2 -translate-y-1/2"
              )}
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => i + 1)}
              className={cn(
                "absolute rounded-full bg-background/80 p-2 shadow hover:bg-background",
                isVertical
                  ? "bottom-2 left-1/2 -translate-x-1/2 -rotate-90"
                  : "right-2 top-1/2 -translate-y-1/2"
              )}
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
        {showDots && count > 1 && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-3 pt-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-colors",
                  i === safeIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

export { Carousel, carouselVariants };
