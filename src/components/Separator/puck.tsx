import { Separator } from "@/components/Separator/Separator";
import type { Components } from "@/puck/types";

type SeparatorProps = Components["Separator"];

export const separatorPuckConfig = {
  Separator: {
    label: "Separator",
    fields: {
      orientation: {
        type: "select",
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
        description: "Layout direction of the separator line.",
      },
      decorative: {
        type: "select",
        label: "Decorative",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
        description:
          "When true, the separator has no semantic meaning (role=\"none\"). Use false if it divides content sections for assistive tech.",
      },
      className: {
        type: "text",
        label: "Class name",
        description: "Additional CSS classes for the separator.",
      },
      id: {
        type: "text",
        label: "ID",
        description: "HTML id attribute.",
      },
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
