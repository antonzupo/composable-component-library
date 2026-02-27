import { AspectRatio } from "@/components/AspectRatio/AspectRatio";
import type { Components, PuckCategory } from "@/puck/types";

type AspectRatioProps = Components["AspectRatio"];

const slotAllow = ["Image", "Text", "Badge", "Button", "Card", "Section", "Flex", "Grid"] as const;

export const puckCategory: PuckCategory = "atoms";

export const aspectRatioPuckConfig = {
  AspectRatio: {
    label: "Aspect Ratio",
    fields: {
      ratio: {
        type: "select",
        label: "Ratio",
        options: [
          { label: "1:1", value: "1/1" },
          { label: "4:3", value: "4/3" },
          { label: "3:4", value: "3/4" },
          { label: "16:9", value: "16/9" },
          { label: "9:16", value: "9/16" },
          { label: "21:9", value: "21/9" },
          { label: "9:21", value: "9/21" },
        ],
      },
      objectFit: {
        type: "select",
        label: "Object fit",
        options: [
          { label: "Cover", value: "cover" },
          { label: "Contain", value: "contain" },
          { label: "Fill", value: "fill" },
          { label: "None", value: "none" },
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
      content: {
        type: "slot",
        label: "Content",
        allow: [...slotAllow],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      ratio: "16/9" as const,
      objectFit: "cover" as const,
      rounded: "none" as const,
      content: [],
      className: "",
      id: "",
    },
    render: (props: AspectRatioProps) => (
      <AspectRatio
        ratio={props.ratio}
        objectFit={props.objectFit}
        rounded={props.rounded}
        content={props.content}
        className={props.className ?? ""}
        id={props.id ?? ""}
      />
    ),
  },
};
