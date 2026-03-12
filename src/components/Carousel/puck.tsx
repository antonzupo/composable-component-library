import { Carousel } from "@/components/Carousel/Carousel";
import type { Components } from "@/puck/types";

type CarouselProps = Components["Carousel"];

const slideAllow = [
  "Typography",
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

const defaultProps: CarouselProps = {
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

export const carouselPuckConfig = {
  Carousel: {
    label: "Carousel",
    fields: {
      slides: {
        type: "array" as const,
        label: "Slides",
        getItemSummary: (_item: { slide: unknown }, i: number) => `Slide ${i + 1}`,
        arrayFields: {
          slide: {
            type: "slot" as const,
            label: "Slide content",
            allow: [...slideAllow],
          },
        },
        defaultItemProps: () => ({ slide: [] }),
      },
      orientation: {
        type: "select" as const,
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
      },
      size: {
        type: "select" as const,
        label: "Slides per view",
        options: [
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ],
      },
      spacing: {
        type: "select" as const,
        label: "Spacing",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      showArrows: {
        type: "select" as const,
        label: "Show arrows",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      showDots: {
        type: "select" as const,
        label: "Show dots",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      autoPlay: {
        type: "select" as const,
        label: "Autoplay",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      interval: {
        type: "number" as const,
        label: "Autoplay interval (ms)",
        min: 1000,
        max: 30000,
        step: 1000,
      },
      rounded: {
        type: "select" as const,
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
    defaultProps: defaultProps satisfies CarouselProps,
    render: (props: CarouselProps) => <Carousel {...props} />,
  },
};
