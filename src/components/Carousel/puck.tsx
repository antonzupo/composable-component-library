import { Carousel } from "@/components/Carousel/Carousel";
import type { Components, PuckCategory } from "@/puck/types";

type CarouselProps = Components["Carousel"];

const slideAllow = ["Image", "Text", "Badge", "Button", "Card", "Section", "Flex", "Grid", "AspectRatio", "Avatar"] as const;

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
            allow: [...slideAllow],
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
      interval: { type: "number", label: "Interval (ms)" },
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
        label: "Slide size",
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
      rounded: "lg" as const,
      className: "",
      id: "",
    },
    render: (props: CarouselProps) => <Carousel {...props} />,
  },
};
