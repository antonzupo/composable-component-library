import { Kbd } from "@/components/Kbd/Kbd";
import type { Components } from "@/puck/types";

type KbdProps = Components["Kbd"];

export const kbdPuckConfig = {
  Kbd: {
    label: "Kbd",
    fields: {
      displayMode: {
        type: "select" as const,
        label: "Display",
        options: [
          { label: "Single key", value: "single" },
          { label: "Group of keys", value: "group" },
        ],
      },
      text: { type: "text", label: "Key / text" },
      keys: {
        type: "array" as const,
        label: "Keys in group",
        getItemSummary: (item: { key?: string }) => item?.key ?? "Key",
        arrayFields: {
          key: { type: "text", label: "Key" },
        },
        defaultItemProps: () => ({ key: "" }),
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      displayMode: "single" as const,
      text: "⌘K",
      keys: [],
      className: "",
      id: "",
    } satisfies KbdProps,
    render: (props: KbdProps) => <Kbd {...props} />,
  },
};
