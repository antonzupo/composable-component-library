import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

type CarouselProps = Components["Carousel"];

const sizeClass = { "1": "w-full", "2": "w-1/2", "3": "w-1/3" };
const spacingClass = { none: "gap-0", sm: "gap-2", md: "gap-4", lg: "gap-6" };
const roundedClass = { none: "rounded-none", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", full: "rounded-full" };

export function Carousel({
  slides = [],
  orientation = "horizontal",
  size = "1",
  spacing = "md",
  rounded = "lg",
  className,
  id,
}: CarouselProps) {
  return (
    <div
      className={cn(
        "overflow-auto",
        orientation === "horizontal" ? "flex flex-row" : "flex flex-col",
        spacingClass[spacing],
        className
      )}
      id={id || undefined}
    >
      {slides.length === 0 ? (
        <div className={cn("flex min-h-[120px] flex-1 items-center justify-center bg-muted/50 p-4", roundedClass[rounded])}>
          <span className="text-muted-foreground text-sm">Add slides</span>
        </div>
      ) : (
        slides.map((item, index) => {
          const SlideContent = item.slide as ComponentType<AreaContentProps> | undefined;
          return (
            <div
              key={index}
              className={cn(
                "shrink-0 overflow-hidden",
                sizeClass[size],
                roundedClass[rounded]
              )}
            >
              {SlideContent ? (
                <SlideContent minEmptyHeight={120} />
              ) : (
                <div className="flex min-h-[120px] items-center justify-center bg-muted/50 p-4">
                  <span className="text-muted-foreground text-sm">Slide {index + 1}</span>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
