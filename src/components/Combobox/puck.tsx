import { Combobox } from "@/components/Combobox/Combobox";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const comboboxPuckConfig = {
  Combobox: {
    label: "Combobox",
    fields: {
      placeholder: { type: "text", label: "Placeholder" },
      emptyText: { type: "text", label: "Empty state text" },
      options: {
        type: "array",
        label: "Options",
        getItemSummary: (item: { value: string; label: string }) => item?.label ?? item?.value ?? "Option",
        arrayFields: {
          value: { type: "text", label: "Value" },
          label: { type: "text", label: "Label" },
        },
      },
      multiple: {
        type: "select",
        label: "Multiple selection",
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
      position: {
        type: "select",
        label: "Position",
        options: [
          { label: "Start", value: "start" },
          { label: "End", value: "end" },
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
      placeholder: "Search...",
      emptyText: "No results found.",
      options: [] as Array<{ value: string; label: string }>,
      multiple: false,
      disabled: false,
      size: "default" as const,
      variant: "default" as const,
      position: "start" as const,
      rounded: "md" as const,
      className: "",
      id: "",
    },
    render: (props: Components["Combobox"]) => (
      <Combobox
        placeholder={props.placeholder}
        emptyText={props.emptyText}
        options={props.options}
        multiple={props.multiple}
        disabled={props.disabled}
        size={props.size}
        variant={props.variant}
        position={props.position}
        rounded={props.rounded}
        className={props.className || undefined}
        id={props.id || undefined}
      />
    ),
  },
};
