import { Slider } from "@/components/Slider/Slider";
import type { Components } from "@/puck/types";

type SliderProps = Components["Slider"];

export const sliderPuckConfig = {
  Slider: {
    label: "Slider",
    fields: {
      value: {
        type: "number" as const,
        label: "Value",
        min: 0,
        max: 100,
        step: 1,
      },
      min: {
        type: "number" as const,
        label: "Min",
        min: 0,
        step: 1,
      },
      max: {
        type: "number" as const,
        label: "Max",
        min: 1,
        step: 1,
      },
      step: {
        type: "number" as const,
        label: "Step",
        min: 0,
        step: 0.1,
      },
      disabled: {
        type: "radio" as const,
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      disabled: false,
      className: "",
      id: "",
    } satisfies SliderProps,
    render: (props: SliderProps) => <Slider {...props} />,
  },
};
