import { Command } from "@/components/Command/Command";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const commandPuckConfig = {
  Command: {
    label: "Command",
    fields: {
      placeholder: { type: "text", label: "Placeholder" },
      emptyText: { type: "text", label: "Empty state text" },
      groups: {
        type: "array",
        label: "Groups",
        getItemSummary: (item: { heading?: string; items: unknown[] }) =>
          item?.heading ?? `Group (${(item?.items as unknown[])?.length ?? 0} items)`,
        arrayFields: {
          heading: { type: "text", label: "Group heading" },
          items: {
            type: "array",
            label: "Items",
            getItemSummary: (i: { label: string }) => i?.label ?? "Item",
            arrayFields: {
              label: { type: "text", label: "Label" },
              value: { type: "text", label: "Value" },
              shortcut: { type: "text", label: "Shortcut (e.g. ⌘K)" },
            },
          },
        },
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
      placeholder: "Type a command or search...",
      emptyText: "No results found.",
      groups: [] as Components["Command"]["groups"],
      disabled: false,
      size: "default" as const,
      variant: "default" as const,
      rounded: "lg" as const,
      className: "",
      id: "",
    },
    render: (props: Components["Command"]) => (
      <Command
        placeholder={props.placeholder}
        emptyText={props.emptyText}
        groups={props.groups}
        disabled={props.disabled}
        size={props.size}
        variant={props.variant}
        rounded={props.rounded}
        className={props.className || undefined}
        id={props.id || undefined}
      />
    ),
  },
};
