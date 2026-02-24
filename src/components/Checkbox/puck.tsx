import { Checkbox } from "@/components/Checkbox/Checkbox";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "atoms";

export const checkboxPuckConfig = {
  Checkbox: {
    label: "Checkbox",
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
      label: "Accept terms",
      checked: false,
      disabled: false,
      size: "default" as const,
      className: "",
      id: "",
    },
    render: ({ label, checked, disabled, size, className, id }: Components["Checkbox"]) => (
      <Checkbox
        label={label || undefined}
        defaultChecked={checked}
        disabled={disabled}
        size={size}
        className={className || undefined}
        id={id || undefined}
      />
    ),
  },
};
