import { Separator } from "@/components/Separator/Separator";
import type { Components } from "@/puck/types";

type SeparatorProps = Components["Separator"];

export const separatorPuckConfig = {
  Separator: {
    label: "Separator",
    fields: {
      orientation: {
        type: "radio" as const,
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
      },
      decorative: {
        type: "radio" as const,
        label: "Decorative",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text" as const, label: "Class name" },
      id: { type: "text" as const, label: "ID" },
    },
    defaultProps: {
      orientation: "horizontal",
      decorative: true,
      className: "",
      id: "",
    } satisfies SeparatorProps,
    render: ({
      orientation = "horizontal",
      decorative = true,
      className = "",
      id = "",
    }: SeparatorProps) => (
      <Separator
        orientation={orientation}
        decorative={decorative}
        className={className}
        id={id}
      />
    ),
  },
};
