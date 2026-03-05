import { TextArea } from "@/components/TextArea/TextArea";
import type { Components } from "@/puck/types";

type TextAreaProps = Components["TextArea"];

export const textAreaPuckConfig = {
  TextArea: {
    label: "Text Area",
    fields: {
      placeholder: { type: "text", label: "Placeholder" },
      defaultValue: { type: "textarea", label: "Default value" },
      disabled: {
        type: "select",
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      rows: { type: "number", label: "Rows" },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      placeholder: "Enter text...",
      defaultValue: "",
      disabled: false,
      rows: 3,
      className: "",
      id: "",
    } satisfies TextAreaProps,
    render: (props: Components["TextArea"]) => <TextArea {...props} />,
  },
};
