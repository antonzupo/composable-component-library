import { DatePicker } from "@/components/DatePicker/DatePicker";
import type { Components } from "@/puck/types";

export const datePickerPuckConfig = {
  DatePicker: {
    label: "Date Picker",
    fields: {
      appearance: {
        type: "select",
        label: "Appearance",
        options: [
          { label: "Basic", value: "basic" },
          { label: "Date of Birth", value: "dateOfBirth" },
          { label: "Input", value: "input" },
          { label: "Time Picker", value: "timePicker" },
          { label: "Natural Language Picker", value: "naturalLanguage" },
        ],
      },
      placeholder: {
        type: "text",
        label: "Placeholder",
      },
      mode: {
        type: "select",
        label: "Mode",
        options: [
          { label: "Single date", value: "single" },
          { label: "Range", value: "range" },
        ],
      },
      triggerVariant: {
        type: "select",
        label: "Trigger button variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Secondary", value: "secondary" },
          { label: "Ghost", value: "ghost" },
          { label: "Link", value: "link" },
        ],
      },
      triggerSize: {
        type: "select",
        label: "Trigger button size",
        options: [
          { label: "Default", value: "default" },
          { label: "Small", value: "sm" },
          { label: "Large", value: "lg" },
          { label: "Icon", value: "icon" },
        ],
      },
      contentClassName: { type: "text", label: "Popover content class name" },
      className: { type: "text", label: "Trigger wrapper class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      appearance: "basic",
      placeholder: "Pick a date",
      mode: "single",
      triggerVariant: "outline",
      triggerSize: "default",
      contentClassName: "",
      className: "",
      id: "",
    },
    render: (props: Components["DatePicker"]) => <DatePicker {...props} />,
  },
};
