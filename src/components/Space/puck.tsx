import { Space } from "@/components/Space/Space";
import type { Components } from "@/puck/types";

export const spacePuckConfig = {
  Space: {
    label: "Space",
    fields: {
      size: {
        type: "select" as const,
        label: "Size",
        options: [
          { label: "XS", value: "xs" },
          { label: "SM", value: "sm" },
          { label: "MD", value: "md" },
          { label: "LG", value: "lg" },
          { label: "XL", value: "xl" },
        ],
      },
      direction: {
        type: "select" as const,
        label: "Direction",
        options: [
          { label: "Vertical", value: "vertical" },
          { label: "Horizontal", value: "horizontal" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      size: "md" as const,
      direction: "vertical" as const,
      className: "",
      id: "",
    },
    render: (props: Components["Space"]) => <Space {...props} />,
  },
};
