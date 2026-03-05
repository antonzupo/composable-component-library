import { Spinner } from "@/components/Spinner/Spinner";
import type { Components } from "@/puck/types";

type SpinnerProps = Components["Spinner"];

export const spinnerPuckConfig = {
  Spinner: {
    label: "Spinner",
    fields: {
      size: {
        type: "select",
        label: "Size",
        options: [
          { label: "Small", value: "sm" },
          { label: "Default", value: "default" },
          { label: "Large", value: "lg" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
      ariaLabel: { type: "text", label: "Aria label" },
    },
    defaultProps: {
      size: "default" as const,
      className: "",
      id: "",
      ariaLabel: "Loading",
    } satisfies SpinnerProps,
    render: (props: SpinnerProps) => <Spinner {...props} />,
  },
};
