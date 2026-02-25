import { DatePicker } from "@/components/DatePicker/DatePicker";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const datePickerPuckConfig = {
  DatePicker: {
    label: "Date Picker",
    fields: {
      triggerLabel: { type: "text", label: "Trigger label" },
      placeholder: { type: "text", label: "Placeholder" },
      defaultMonth: {
        type: "text",
        label: "Default month (YYYY-MM)",
      },
      mode: {
        type: "select",
        label: "Mode",
        options: [
          { label: "Single", value: "single" },
          { label: "Range", value: "range" },
        ],
      },
      showTime: {
        type: "select",
        label: "Show time",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      weekStartsOn: {
        type: "select",
        label: "Week starts on",
        options: [
          { label: "Sunday", value: 0 },
          { label: "Monday", value: 1 },
          { label: "Tuesday", value: 2 },
          { label: "Wednesday", value: 3 },
          { label: "Thursday", value: 4 },
          { label: "Friday", value: 5 },
          { label: "Saturday", value: 6 },
        ],
      },
      cellSize: {
        type: "select",
        label: "Cell size",
        options: [
          { label: "Small", value: "sm" },
          { label: "Default", value: "default" },
          { label: "Large", value: "lg" },
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
      rounded: {
        type: "select",
        label: "Rounded",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
          { label: "Full", value: "full" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      triggerLabel: "Pick a date",
      placeholder: "Select date",
      defaultMonth: "",
      mode: "single" as const,
      showTime: false,
      weekStartsOn: 0 as const,
      cellSize: "default" as const,
      variant: "default" as const,
      rounded: "md" as const,
      className: "",
      id: "",
    },
    render: (props: Components["DatePicker"]) => (
      <DatePicker
        triggerLabel={props.triggerLabel}
        placeholder={props.placeholder}
        defaultMonth={props.defaultMonth || undefined}
        mode={props.mode}
        showTime={props.showTime}
        weekStartsOn={props.weekStartsOn}
        cellSize={props.cellSize}
        variant={props.variant}
        rounded={props.rounded}
        className={props.className || undefined}
        id={props.id || undefined}
      />
    ),
  },
};
