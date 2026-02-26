import { Combobox } from "@/components/Combobox/Combobox";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const comboboxPuckConfig = {
  Combobox: {
    label: "Combobox",
    fields: {
      options: {
        type: "array",
        label: "Options",
        getItemSummary: (item: { value: string; label: string }) =>
          item?.label ? `${item.label} (${item.value})` : "Option",
        arrayFields: {
          value: { type: "text", label: "Value" },
          label: { type: "text", label: "Label" },
        },
        defaultItemProps: () => ({ value: "", label: "" }),
      },
      value: { type: "text", label: "Selected value" },
      placeholder: { type: "text", label: "Placeholder" },
      searchPlaceholder: { type: "text", label: "Search placeholder" },
      emptyText: { type: "text", label: "Empty state text" },
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
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
        { value: "three", label: "Three" },
      ],
      value: "",
      placeholder: "Select option...",
      searchPlaceholder: "Search option...",
      emptyText: "No option found.",
      disabled: false,
      className: "",
      id: "",
    },
    render: ({
      options,
      value,
      placeholder,
      searchPlaceholder,
      emptyText,
      disabled,
      className,
      id,
    }: Components["Combobox"]) => (
      <Combobox
        options={options}
        value={value}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        emptyText={emptyText}
        disabled={disabled}
        className={className || undefined}
        id={id || undefined}
      />
    ),
  },
};
