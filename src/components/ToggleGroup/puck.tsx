import { ToggleGroup } from "@/components/ToggleGroup/ToggleGroup";
import type { Components } from "@/puck/types";

type ToggleGroupProps = Components["ToggleGroup"];

export const toggleGroupPuckConfig = {
  ToggleGroup: {
    label: "Toggle group",
    fields: {
      type: {
        type: "select",
        label: "Type",
        options: [
          { label: "Single", value: "single" },
          { label: "Multiple", value: "multiple" },
        ],
      },
      defaultValue: {
        type: "text",
        label: "Default value (single: one value; multiple: comma-separated)",
      },
      items: {
        type: "array",
        label: "Items",
        getItemSummary: (item: { value: string; label: string }) =>
          item?.label || item?.value || "Item",
        arrayFields: {
          value: { type: "text", label: "Value" },
          label: { type: "text", label: "Label" },
        },
        defaultItemProps: () => ({ value: "", label: "" }),
      },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Outline", value: "outline" },
        ],
      },
      size: {
        type: "select",
        label: "Size",
        options: [
          { label: "Default", value: "default" },
          { label: "Small", value: "sm" },
          { label: "Large", value: "lg" },
        ],
      },
      spacing: {
        type: "select",
        label: "Spacing",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      orientation: {
        type: "select",
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
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
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      type: "single" as const,
      defaultValue: "",
      items: [
        { value: "left", label: "Left" },
        { value: "center", label: "Center" },
        { value: "right", label: "Right" },
      ],
      variant: "default" as const,
      size: "default" as const,
      spacing: "sm" as const,
      orientation: "horizontal" as const,
      disabled: false,
      className: "",
      id: "",
    } satisfies ToggleGroupProps,
    render: (props: Components["ToggleGroup"]) => <ToggleGroup {...props} />,
  },
};
