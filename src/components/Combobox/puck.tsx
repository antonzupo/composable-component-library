import { Combobox } from "@/components/Combobox/Combobox";
import type { Components } from "@/puck/types";

type ComboboxProps = Components["Combobox"];

export const comboboxPuckConfig = {
  Combobox: {
    label: "Combobox",
    fields: {
      options: {
        type: "array" as const,
        label: "Options",
        getItemSummary: (item: { value: string; label: string }) => item?.label || item?.value || "Option",
        arrayFields: {
          value: { type: "text", label: "Value" },
          label: { type: "text", label: "Label" },
        },
      },
      value: { type: "text", label: "Selected value" },
      placeholder: { type: "text", label: "Placeholder" },
      searchPlaceholder: { type: "text", label: "Search placeholder" },
      emptyText: { type: "text", label: "Empty text" },
      disabled: {
        type: "select" as const,
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
      options: [
        { value: "a", label: "Option A" },
        { value: "b", label: "Option B" },
        { value: "c", label: "Option C" },
      ],
      value: "",
      placeholder: "Select option...",
      searchPlaceholder: "Search...",
      emptyText: "No option found.",
      disabled: false,
      className: "",
      id: "",
    },
    render: (props: ComboboxProps) => (
      <Combobox
        options={props.options}
        value={props.value}
        placeholder={props.placeholder}
        searchPlaceholder={props.searchPlaceholder}
        emptyText={props.emptyText}
        disabled={props.disabled}
        className={props.className || undefined}
      />
    ),
  },
};
