import { Checkbox } from "@/components/Checkbox/Checkbox";
import type { Components } from "@/puck/types";

type CheckboxProps = Components["Checkbox"];

export const checkboxPuckConfig = {
  Checkbox: {
    label: "Checkbox",
    fields: {
      label: { type: "text" as const, label: "Label" },
      checked: {
        type: "radio" as const,
        label: "Checked",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      disabled: {
        type: "radio" as const,
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      size: {
        type: "select" as const,
        label: "Size",
        options: [
          { label: "Default", value: "default" },
          { label: "Small", value: "sm" },
          { label: "Large", value: "lg" },
        ],
      },
      className: { type: "text" as const, label: "Class name" },
      id: { type: "text" as const, label: "ID" },
    },
    defaultProps: {
      label: "Option",
      checked: false,
      disabled: false,
      size: "default" as const,
      className: "",
      id: "",
    } satisfies CheckboxProps,
    render: (props: CheckboxProps) => <Checkbox {...props} />,
  },
};
