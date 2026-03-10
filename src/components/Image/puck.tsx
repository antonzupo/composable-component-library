import { Image } from "@/components/Image/Image";
import type { Components } from "@/puck/types";

export const imagePuckConfig = {
  Image: {
    label: "Image",
    fields: {
      src: { type: "text", label: "Image URL" },
      alt: { type: "text", label: "Alt text" },
      objectFit: {
        type: "select" as const,
        label: "Object fit",
        options: [
          { label: "Cover", value: "cover" },
          { label: "Contain", value: "contain" },
          { label: "Fill", value: "fill" },
          { label: "None", value: "none" },
        ],
      },
      align: {
        type: "select" as const,
        label: "Alignment",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ],
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
    defaultProps: {
      src: "https://placehold.co/600x400",
      alt: "",
      objectFit: "cover" as const,
      align: "center" as const,
      rounded: "md" as const,
      className: "",
      id: "",
    },
    render: (props: Components["Image"]) => <Image {...props} />,
  },
};
