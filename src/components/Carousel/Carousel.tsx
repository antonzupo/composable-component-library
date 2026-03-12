import Autoplay from "embla-carousel-autoplay";
import type { ComponentType } from "react";
import {
  Carousel as UICarousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

export type CarouselProps = Components["Carousel"];

const roundedClasses: Record<CarouselProps["rounded"], string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const spacingClasses: Record<CarouselProps["spacing"], string> = {
  none: "pl-0",
  sm: "pl-2",
  md: "pl-4",
  lg: "pl-6",
};

const contentSpacingClasses: Record<
  CarouselProps["spacing"],
  { horizontal: string; vertical: string }
> = {
  none: { horizontal: "-ml-0", vertical: "-mt-0" },
  sm: { horizontal: "-ml-2", vertical: "-mt-2" },
  md: { horizontal: "-ml-4", vertical: "-mt-4" },
  lg: { horizontal: "-ml-6", vertical: "-mt-6" },
};

const basisClasses: Record<CarouselProps["size"], string> = {
  "1": "basis-full",
  "2": "basis-1/2",
  "3": "basis-1/3",
};

const emptySlidePlaceholder = (
  <div className="flex h-[120px] items-center justify-center rounded border border-dashed border-muted-foreground/30 bg-muted/20 text-muted-foreground text-sm">
    Add slide content
  </div>
);

const emptySlidesPlaceholder = (
  <div className="flex h-[120px] items-center justify-center rounded border border-dashed border-muted-foreground/30 bg-muted/20 text-muted-foreground text-sm">
    Add slides using the panel
  </div>
);

export function Carousel({
  slides = [],
  orientation = "horizontal",
  size = "1",
  spacing = "md",
  showArrows = true,
  showDots = false,
  autoPlay = false,
  interval = 5000,
  rounded = "none",
  className,
  id,
}: CarouselProps) {
  const basisClass = basisClasses[size];
  const itemPadding =
    orientation === "horizontal"
      ? spacingClasses[spacing]
      : spacingClasses[spacing].replace("pl-", "pt-");
  const contentMargin = contentSpacingClasses[spacing];
  const contentMarginClass =
    orientation === "horizontal"
      ? contentMargin.horizontal
      : `${contentMargin.vertical} flex-col`;

  const plugins = autoPlay
    ? [Autoplay({ delay: interval, stopOnInteraction: true })]
    : undefined;

  return (
    <UICarousel
      orientation={orientation}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={plugins}
      className={cn("w-full max-w-full", className)}
      id={id || undefined}
    >
      <CarouselContent className={cn("flex", contentMarginClass)}>
        {slides.length === 0 ? (
          <CarouselItem
            className={cn(
              "min-w-0 shrink-0 grow-0 basis-full",
              itemPadding,
              roundedClasses[rounded]
            )}
          >
            {emptySlidesPlaceholder}
          </CarouselItem>
        ) : (
          slides.map((item, index) => {
            const SlideContent = item?.slide as unknown as
              | ComponentType<AreaContentProps>
              | undefined;
            const isSlotFunction = typeof SlideContent === "function";

            return (
              <CarouselItem
                key={index}
                className={cn(
                  "min-w-0 shrink-0 grow-0",
                  basisClass,
                  itemPadding,
                  roundedClasses[rounded]
                )}
              >
                {isSlotFunction ? (
                  <SlideContent
                    className="h-full min-h-[120px]"
                    minEmptyHeight={120}
                  />
                ) : SlideContent != null && !Array.isArray(SlideContent) ? (
                  (SlideContent as React.ReactNode)
                ) : (
                  emptySlidePlaceholder
                )}
              </CarouselItem>
            );
          })
        )}
      </CarouselContent>
      {showArrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
      {showDots && slides.length > 0 && (
        <CarouselDots slideCount={slides.length} />
      )}
    </UICarousel>
  );
}
