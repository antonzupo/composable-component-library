import { iconNames } from "lucide-react/dynamic";
import { Toggle } from "@/components/Toggle/Toggle";
import type { Components } from "@/puck/types";

type ToggleProps = Components["Toggle"];

const lucideIconOptions = [
  { label: "— None —", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

export const togglePuckConfig = {
  Toggle: {
    label: "Toggle",
    fields: {
      label: { type: "text", label: "Label" },
      icon: {
        type: "select",
        label: "Icon",
        options: lucideIconOptions,
      },
      iconPosition: {
        type: "select",
        label: "Icon position",
        options: [
          { label: "Start", value: "start" },
          { label: "End", value: "end" },
        ],
      },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Outline", value: "outline" },
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
      defaultPressed: {
        type: "select",
        label: "Default pressed",
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
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      label: "Toggle",
      icon: "",
      iconPosition: "start",
      variant: "default",
      size: "default",
      defaultPressed: false,
      disabled: false,
      className: "",
      id: "",
    } satisfies ToggleProps,
    render: (props: Components["Toggle"]) => <Toggle {...props} />,
  },
};
