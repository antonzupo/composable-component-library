import { Switch } from "@/components/Switch/Switch";
import type { Components } from "@/puck/types";

type SwitchProps = Components["Switch"];

export const switchPuckConfig = {
  Switch: {
    label: "Switch",
    fields: {
      label: { type: "text", label: "Label" },
      checked: {
        type: "select",
        label: "Checked",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      disabled: {
        type: "select",
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      size: {
        type: "select",
        label: "Size",
        options: [
          { label: "Default", value: "default" },
          { label: "Small", value: "sm" },
          { label: "Large", value: "lg" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      label: "Toggle",
      checked: false,
      disabled: false,
      size: "default" as const,
      className: "",
      id: "",
    } satisfies SwitchProps,
    render: (props: SwitchProps) => <Switch {...props} />,
  },
};
