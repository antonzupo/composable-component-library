import { Progress } from "@/components/Progress/Progress";
import type { Components } from "@/puck/types";

type ProgressProps = Components["Progress"];

export const progressPuckConfig = {
  Progress: {
    label: "Progress",
    fields: {
      value: {
        type: "number" as const,
        label: "Value",
        min: 0,
        max: 100,
        step: 1,
      },
      max: {
        type: "number" as const,
        label: "Max",
        min: 1,
        step: 1,
      },
      indeterminate: {
        type: "radio" as const,
        label: "Indeterminate",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      valueLabel: { type: "text" as const, label: "Value label (accessibility)" },
      className: { type: "text" as const, label: "Class name" },
      id: { type: "text" as const, label: "ID" },
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
