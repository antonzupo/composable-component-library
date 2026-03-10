import { Sonner } from "@/components/Sonner/Sonner";
import type { Components } from "@/puck/types";

type SonnerProps = Components["Sonner"];

export const sonnerPuckConfig = {
  Sonner: {
    label: "Sonner",
    fields: {
      position: {
        type: "select" as const,
        label: "Position",
        options: [
          { label: "Top left", value: "top-left" },
          { label: "Top center", value: "top-center" },
          { label: "Top right", value: "top-right" },
          { label: "Bottom left", value: "bottom-left" },
          { label: "Bottom center", value: "bottom-center" },
          { label: "Bottom right", value: "bottom-right" },
        ],
      },
      expand: {
        type: "radio" as const,
        label: "Expand",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      richColors: {
        type: "radio" as const,
        label: "Rich colors",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      closeButton: {
        type: "radio" as const,
        label: "Close button",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      position: "bottom-right" as const,
      expand: false,
      richColors: false,
      closeButton: false,
      className: "",
      id: "",
    } satisfies SonnerProps,
    render: (props: SonnerProps) => <Sonner {...props} />,
  },
};
