import { TextArea } from "@/components/TextArea/TextArea";
import type { Components } from "@/puck/types";

type TextAreaProps = Components["TextArea"];

export const textAreaPuckConfig = {
  TextArea: {
    label: "Text Area",
    fields: {
      placeholder: { type: "text" as const, label: "Placeholder" },
      defaultValue: { type: "textarea" as const, label: "Default value" },
      disabled: {
        type: "radio" as const,
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      rows: { type: "number" as const, label: "Rows" },
      className: { type: "text" as const, label: "Class name" },
      id: { type: "text" as const, label: "ID" },
    },
    defaultProps: {
      placeholder: "Enter text...",
      defaultValue: "",
      disabled: false,
      rows: 3,
      className: "",
      id: "",
    } satisfies TextAreaProps,
    render: (props: TextAreaProps) => <TextArea {...props} />,
  },
};
