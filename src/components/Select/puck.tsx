import { Select } from "@/components/Select/Select";
import type { Components } from "@/puck/types";

type SelectProps = Components["Select"];

const optionArrayFields = {
  value: { type: "text" as const, label: "Value" },
  label: { type: "text" as const, label: "Label" },
  disabled: {
    type: "select" as const,
    label: "Disabled",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
};

export const selectPuckConfig = {
  Select: {
    label: "Select",
    fields: {
      // — Root (Select.Root)
      defaultValue: { type: "text", label: "Default value" },
      value: { type: "text", label: "Value (controlled)" },
      disabled: {
        type: "select",
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      required: {
        type: "select",
        label: "Required",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      name: { type: "text", label: "Name" },
      dir: {
        type: "select",
        label: "Direction",
        options: [
          { label: "LTR", value: "ltr" },
          { label: "RTL", value: "rtl" },
        ],
      },
      // — Trigger
      triggerClassName: { type: "text", label: "Trigger class name" },
      // — Value (SelectValue)
      placeholder: { type: "text", label: "Placeholder" },
      // — Content (SelectContent)
      position: {
        type: "select",
        label: "Position",
        options: [
          { label: "Popper", value: "popper" },
          { label: "Item-aligned", value: "item-aligned" },
        ],
      },
      side: {
        type: "select",
        label: "Side",
        options: [
          { label: "Bottom", value: "bottom" },
          { label: "Top", value: "top" },
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
      sideOffset: { type: "number", label: "Side offset", min: 0 },
      align: {
        type: "select",
        label: "Align",
        options: [
          { label: "Start", value: "start" },
          { label: "Center", value: "center" },
          { label: "End", value: "end" },
        ],
      },
      alignOffset: { type: "number", label: "Align offset", min: 0 },
      avoidCollisions: {
        type: "select",
        label: "Avoid collisions",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      collisionPadding: { type: "number", label: "Collision padding", min: 0 },
      hideWhenDetached: {
        type: "select",
        label: "Hide when detached",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      contentClassName: { type: "text", label: "Content class name" },
      // — Items
      optionMode: {
        type: "select",
        label: "Options",
        options: [
          { label: "Flat list", value: "flat" },
          { label: "Grouped", value: "grouped" },
        ],
      },
      options: {
        type: "array",
        label: "Options (flat)",
        getItemSummary: (item: { value?: string; label?: string }) =>
          item?.label ?? item?.value ?? "Option",
        arrayFields: optionArrayFields,
        defaultItemProps: () => ({ value: "", label: "Option", disabled: false }),
      },
      optionGroups: {
        type: "array",
        label: "Option groups",
        getItemSummary: (item: { groupLabel?: string }) =>
          item?.groupLabel ?? "Group",
        arrayFields: {
          groupLabel: { type: "text", label: "Group label" },
          options: {
            type: "array",
            label: "Options",
            getItemSummary: (opt: { value?: string; label?: string }) =>
              opt?.label ?? opt?.value ?? "Option",
            arrayFields: optionArrayFields,
            defaultItemProps: () => ({ value: "", label: "Option", disabled: false }),
          },
        },
        defaultItemProps: () => ({
          groupLabel: "Category",
          options: [{ value: "", label: "Option", disabled: false }],
        }),
      },
      separatorBetweenGroups: {
        type: "select",
        label: "Separator between groups",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      // — Identifiers
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      defaultValue: "",
      value: "",
      disabled: false,
      required: false,
      name: "",
      dir: "ltr" as const,
      triggerClassName: "",
      placeholder: "Select…",
      position: "popper" as const,
      side: "bottom" as const,
      sideOffset: 0,
      align: "start" as const,
      alignOffset: 0,
      avoidCollisions: true,
      collisionPadding: 10,
      hideWhenDetached: false,
      contentClassName: "",
      optionMode: "flat" as const,
      options: [
        { value: "a", label: "Option A", disabled: false },
        { value: "b", label: "Option B", disabled: false },
        { value: "c", label: "Option C", disabled: false },
      ],
      optionGroups: [
        {
          groupLabel: "Category 1",
          options: [{ value: "1a", label: "Option 1A", disabled: false }],
        },
        {
          groupLabel: "Category 2",
          options: [{ value: "2a", label: "Option 2A", disabled: false }],
        },
      ],
      separatorBetweenGroups: false,
      className: "",
      id: "",
    } satisfies SelectProps,
    render: (props: SelectProps) => <Select {...props} />,
  },
};
