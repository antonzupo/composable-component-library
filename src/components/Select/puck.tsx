import { Select } from "@/components/Select/Select";
import type { Components } from "@/puck/types";

type SelectProps = Components["Select"];

const optionArrayFields = {
  value: { type: "text" as const, label: "Value" },
  label: { type: "text" as const, label: "Label" },
  disabled: {
    type: "radio" as const,
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
      defaultValue: { type: "text" as const, label: "Default value" },
      value: { type: "text" as const, label: "Value (controlled)" },
      disabled: {
        type: "radio" as const,
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      required: {
        type: "radio" as const,
        label: "Required",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      name: { type: "text" as const, label: "Name" },
      dir: {
        type: "radio" as const,
        label: "Direction",
        options: [
          { label: "LTR", value: "ltr" },
          { label: "RTL", value: "rtl" },
        ],
      },
      // — Trigger
      triggerClassName: { type: "text" as const, label: "Trigger class name" },
      // — Value (SelectValue)
      placeholder: { type: "text" as const, label: "Placeholder" },
      // — Content (SelectContent)
      position: {
        type: "radio" as const,
        label: "Position",
        options: [
          { label: "Popper", value: "popper" },
          { label: "Item-aligned", value: "item-aligned" },
        ],
      },
      side: {
        type: "select" as const,
        label: "Side",
        options: [
          { label: "Bottom", value: "bottom" },
          { label: "Top", value: "top" },
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
      sideOffset: { type: "number" as const, label: "Side offset", min: 0 },
      align: {
        type: "select" as const,
        label: "Align",
        options: [
          { label: "Start", value: "start" },
          { label: "Center", value: "center" },
          { label: "End", value: "end" },
        ],
      },
      alignOffset: { type: "number" as const, label: "Align offset", min: 0 },
      avoidCollisions: {
        type: "radio" as const,
        label: "Avoid collisions",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      collisionPadding: { type: "number" as const, label: "Collision padding", min: 0 },
      hideWhenDetached: {
        type: "radio" as const,
        label: "Hide when detached",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      contentClassName: { type: "text" as const, label: "Content class name" },
      // — Items
      optionMode: {
        type: "radio" as const,
        label: "Options",
        options: [
          { label: "Flat list", value: "flat" },
          { label: "Grouped", value: "grouped" },
        ],
      },
      options: {
        type: "array" as const,
        label: "Options (flat)",
        getItemSummary: (item: { value?: string; label?: string }) =>
          item?.label ?? item?.value ?? "Option",
        arrayFields: optionArrayFields,
        defaultItemProps: () => ({ value: "", label: "Option", disabled: false }),
      },
      optionGroups: {
        type: "array" as const,
        label: "Option groups",
        getItemSummary: (item: { groupLabel?: string }) =>
          item?.groupLabel ?? "Group",
        arrayFields: {
          groupLabel: { type: "text" as const, label: "Group label" },
          options: {
            type: "array" as const,
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
        type: "radio" as const,
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
