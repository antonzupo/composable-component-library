import { NativeSelect } from "@/components/NativeSelect/NativeSelect";
import type { Components } from "@/puck/types";

type NativeSelectProps = Components["NativeSelect"];

const optionArrayFields = {
  value: { type: "text" as const, label: "Value" },
  label: { type: "text" as const, label: "Label" },
};

export const nativeSelectPuckConfig = {
  NativeSelect: {
    label: "Native Select",
    fields: {
      optionMode: {
        type: "select" as const,
        label: "Options",
        options: [
          { label: "Flat list", value: "flat" },
          { label: "Grouped (categories)", value: "grouped" },
        ],
      },
      options: {
        type: "array" as const,
        label: "Options",
        getItemSummary: (item: { value?: string; label?: string }) =>
          item?.label ?? item?.value ?? "Option",
        arrayFields: optionArrayFields,
        defaultItemProps: () => ({ value: "", label: "Option" }),
      },
      optionGroups: {
        type: "array" as const,
        label: "Option groups",
        getItemSummary: (item: { groupLabel?: string }) =>
          item?.groupLabel ?? "Group",
        arrayFields: {
          groupLabel: { type: "text", label: "Group label" },
          options: {
            type: "array" as const,
            label: "Options",
            getItemSummary: (opt: { value?: string; label?: string }) =>
              opt?.label ?? opt?.value ?? "Option",
            arrayFields: optionArrayFields,
            defaultItemProps: () => ({ value: "", label: "Option" }),
          },
        },
        defaultItemProps: () => ({
          groupLabel: "Category",
          options: [{ value: "", label: "Option" }],
        }),
      },
      placeholder: { type: "text", label: "Placeholder" },
      defaultValue: { type: "text", label: "Default value" },
      disabled: {
        type: "radio" as const,
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      size: {
        type: "select" as const,
        label: "Size",
        options: [
          { label: "Default", value: "default" },
          { label: "Small", value: "sm" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      optionMode: "flat" as const,
      options: [
        { value: "a", label: "Option A" },
        { value: "b", label: "Option B" },
        { value: "c", label: "Option C" },
      ],
      optionGroups: [
        { groupLabel: "Category 1", options: [{ value: "1a", label: "Option 1A" }] },
        { groupLabel: "Category 2", options: [{ value: "2a", label: "Option 2A" }] },
      ],
      placeholder: "Select…",
      defaultValue: "",
      disabled: false,
      size: "default" as const,
      className: "",
      id: "",
    } satisfies NativeSelectProps,
    render: (props: NativeSelectProps) => <NativeSelect {...props} />,
  },
};
