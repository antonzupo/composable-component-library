import Autoplay from "embla-carousel-autoplay";
import type { ComponentType } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

const slideAllow = [
  "Text",
  "Badge",
  "Button",
  "Image",
  "Card",
  "Accordion",
  "Alert",
  "AspectRatio",
  "Avatar",
  "Breadcrumb",
  "Calendar",
  "Chart",
  "Collapsible",
  "Empty",
  "Field",
  "Flex",
  "Grid",
  "HeroCard",
  "Section",
  "Space",
] as const;

const defaultProps: Components["Carousel"] = {
  slides: [],
  autoPlay: false,
  interval: 5000,
  showArrows: true,
  showDots: false,
  size: "1",
  spacing: "md",
  orientation: "horizontal",
  rounded: "none",
  className: "",
  id: "",
};

const roundedClasses: Record<Components["Carousel"]["rounded"], string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const spacingClasses: Record<Components["Carousel"]["spacing"], string> = {
  none: "pl-0",
  sm: "pl-2",
  md: "pl-4",
  lg: "pl-6",
};

const contentSpacingClasses: Record<
  Components["Carousel"]["spacing"],
  { horizontal: string; vertical: string }
> = {
  none: { horizontal: "-ml-0", vertical: "-mt-0" },
  sm: { horizontal: "-ml-2", vertical: "-mt-2" },
  md: { horizontal: "-ml-4", vertical: "-mt-4" },
  lg: { horizontal: "-ml-6", vertical: "-mt-6" },
};

const basisClasses: Record<Components["Carousel"]["size"], string> = {
  "1": "basis-full",
  "2": "basis-1/2",
  "3": "basis-1/3",
};

export const carouselPuckConfig = {
  Carousel: {
    label: "Carousel",
    fields: {
      slides: {
        type: "array",
        label: "Slides",
        getItemSummary: (_item: { slide: unknown }, i: number) => `Slide ${i + 1}`,
        arrayFields: {
          slide: {
            type: "slot",
            label: "Slide content",
            allow: [...slideAllow],
          },
        },
        defaultItemProps: () => ({ slide: [] }),
      },
      orientation: {
        type: "select",
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
      },
      size: {
        type: "select",
        label: "Slides per view",
        options: [
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ],
      },
      spacing: {
        type: "select",
        label: "Spacing",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      showArrows: {
        type: "select",
        label: "Show arrows",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showDots: {
        type: "select",
        label: "Show dots",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      autoPlay: {
        type: "select",
        label: "Autoplay",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      interval: {
        type: "number",
        label: "Autoplay interval (ms)",
        min: 1000,
        max: 30000,
        step: 1000,
      },
      rounded: {
        type: "select",
        label: "Rounded",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
          { label: "Full", value: "full" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps,
    render: ({
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
    }: Components["Carousel"]) => {
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

      const plugins = autoPlay ? [Autoplay({ delay: interval, stopOnInteraction: true })] : undefined;

      return (
        <Carousel
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
                <div className="flex h-[120px] items-center justify-center rounded border border-dashed border-muted-foreground/30 bg-muted/20 text-muted-foreground text-sm">
                  Add slides using the panel
                </div>
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
                    <SlideContent className="h-full min-h-[120px]" minEmptyHeight={120} />
                  ) : SlideContent != null && !Array.isArray(SlideContent) ? (
                    (SlideContent as React.ReactNode)
                  ) : (
                    <div className="flex h-[120px] items-center justify-center rounded border border-dashed border-muted-foreground/30 bg-muted/20 text-muted-foreground text-sm">
                      Add slide content
                    </div>
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
        </Carousel>
      );
    },
  },
};
