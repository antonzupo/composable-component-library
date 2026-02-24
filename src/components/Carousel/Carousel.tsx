import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const carouselVariants = cva("relative w-full overflow-hidden", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "md",
  },
});

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof carouselVariants> & {
    children?: React.ReactNode;
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
  };

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      autoPlay = false,
      interval = 5000,
      showArrows = true,
      showDots = true,
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

    React.useEffect(() => {
      if (!autoPlay || count <= 1) return;
      const t = setInterval(() => setIndex((i) => i + 1), interval);
      return () => clearInterval(t);
    }, [autoPlay, interval, count]);

    return (
      <div
        ref={ref}
        className={cn(carouselVariants({ rounded }), className)}
        id={id}
        {...props}
      >
        <div className="relative flex overflow-hidden">
          {items.map((child, i) => (
            <div
              key={i}
              className="min-w-full flex-shrink-0 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${safeIndex * 100}%)` }}
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
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => i + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
        {showDots && count > 1 && (
          <div className="flex justify-center gap-1.5 py-2">
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
