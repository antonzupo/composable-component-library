import { Label } from "@/components/Label/Label";
import type { Components } from "@/puck/types";

type LabelProps = Components["Label"];

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
    } satisfies LabelProps,
    render: (props: LabelProps) => <Label {...props} />,
  },
};
