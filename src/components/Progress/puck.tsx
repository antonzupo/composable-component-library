import { Progress } from "@/components/Progress/Progress";
import type { Components } from "@/puck/types";

type ProgressProps = Components["Progress"];

export const progressPuckConfig = {
  Progress: {
    label: "Progress",
    fields: {
      value: {
        type: "number",
        label: "Value",
        min: 0,
        max: 100,
        step: 1,
        description: "Current progress (0 to max). Ignored when indeterminate.",
      },
      max: {
        type: "number",
        label: "Max",
        min: 1,
        step: 1,
        description: "Maximum value (default 100).",
      },
      indeterminate: {
        type: "select",
        label: "Indeterminate",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
        description: "Show indeterminate (animated) state; value is ignored when on.",
      },
      valueLabel: {
        type: "text",
        label: "Value label (accessibility)",
        description: "Custom label for screen readers. Leave empty for default percentage.",
      },
      className: {
        type: "text",
        label: "Class name",
        description: "Additional CSS classes for the progress root.",
      },
      id: {
        type: "text",
        label: "ID",
        description: "HTML id attribute.",
      },
    },
    defaultProps: {
      value: 33,
      max: 100,
      indeterminate: false,
      valueLabel: "",
      className: "",
      id: "",
    } satisfies ProgressProps,
    render: ({
      value = 33,
      max = 100,
      indeterminate = false,
      valueLabel = "",
      className = "",
      id = "",
    }: ProgressProps) => (
      <Progress
        value={value}
        max={max}
        indeterminate={indeterminate}
        valueLabel={valueLabel}
        className={className}
        id={id}
      />
    ),
  },
};
