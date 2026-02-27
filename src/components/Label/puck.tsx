import { Label } from "@/components/ui/label";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "atoms";

export const labelPuckConfig = {
  Label: {
    label: "Label",
    fields: {
      text: { type: "text", label: "Text" },
      htmlFor: { type: "text", label: "For (input id)" },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      text: "Label",
      htmlFor: "",
      className: "",
      id: "",
    },
    render: ({
      text,
      htmlFor,
      className,
      id,
    }: Components["Label"]) => (
      <Label
        htmlFor={htmlFor || undefined}
        className={className || undefined}
        id={id || undefined}
      >
        {text}
      </Label>
    ),
  },
};
