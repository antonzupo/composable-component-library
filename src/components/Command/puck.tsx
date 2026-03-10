import { Command } from "@/components/Command/Command";
import type { Components } from "@/puck/types";

export const commandPuckConfig = {
  Command: {
    label: "Command",
    fields: {
      showInput: {
        type: "select" as const,
        label: "Show search input",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      inputPlaceholder: { type: "text", label: "Search placeholder" },
      emptyText: { type: "text", label: "Empty state text" },
      items: {
        type: "array" as const,
        label: "Items",
        getItemSummary: (item: { value: string; label: string; groupHeading: string }) =>
          item?.label
            ? item.label + (item.groupHeading ? ` (${item.groupHeading})` : "")
            : "Item",
        arrayFields: {
          value: { type: "text", label: "Value" },
          label: { type: "text", label: "Label" },
          groupHeading: { type: "text", label: "Group heading (optional)" },
        },
        defaultItemProps: () => ({ value: "", label: "", groupHeading: "" }),
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      showInput: true,
      inputPlaceholder: "Search...",
      emptyText: "No results found.",
      items: [
        { value: "calendar", label: "Calendar", groupHeading: "Suggestions" },
        { value: "search", label: "Search", groupHeading: "Suggestions" },
        { value: "settings", label: "Settings", groupHeading: "Suggestions" },
      ],
      className: "",
      id: "",
    },
    render: ({
      showInput,
      inputPlaceholder,
      emptyText,
      items,
      className,
      id,
    }: Components["Command"]) => (
      <Command
        showInput={showInput}
        inputPlaceholder={inputPlaceholder}
        emptyText={emptyText}
        items={items}
        className={className || undefined}
        id={id || undefined}
      />
    ),
  },
};
