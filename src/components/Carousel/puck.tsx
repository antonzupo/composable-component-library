import type { ComponentType } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

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
            allow: ["Card", "Image", "Section", "Text"],
          },
        },
      },
      autoPlay: {
        type: "select",
        label: "Auto play",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      interval: {
        type: "number",
        label: "Interval (ms)",
        min: 2000,
        max: 15000,
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
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      size: {
        type: "select",
        label: "Size",
        options: [
          { label: "1 slide", value: "1" },
          { label: "2 slides (basis-1/2)", value: "2" },
          { label: "3 slides (basis-1/3)", value: "3" },
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
      orientation: {
        type: "select",
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
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
    defaultProps: {
      slides: [],
      autoPlay: false,
      interval: 5000,
      showArrows: true,
      showDots: true,
      size: "1" as const,
      spacing: "md" as const,
      orientation: "horizontal" as const,
      rounded: "md" as const,
      className: "",
      id: "",
    },
    render: ({ slides, autoPlay, interval, showArrows, showDots, size, spacing, orientation, rounded, className, id }: Components["Carousel"]) => {
      const slideComponents = (slides ?? []).map((item, i) => {
        const Slide = item.slide as ComponentType<AreaContentProps> | undefined;
        return Slide ? <Slide key={i} minEmptyHeight={200} /> : <div key={i} className="flex min-h-[200px] items-center justify-center bg-muted text-muted-foreground">Slide</div>;
      });
      return (
        <Carousel
          autoPlay={autoPlay}
          interval={interval}
          showArrows={showArrows}
          showDots={showDots}
          size={size}
          spacing={spacing}
          orientation={orientation}
          rounded={rounded}
          className={className || undefined}
          id={id || undefined}
        >
          {slideComponents.length > 0 ? slideComponents : <div className="flex min-h-[200px] items-center justify-center bg-muted text-muted-foreground">Add slides</div>}
        </Carousel>
      );
    },
  },
};
