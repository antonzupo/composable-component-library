import { Kbd, KbdGroup } from "@/components/ui/kbd";
import type { Components } from "@/puck/types";

export const kbdPuckConfig = {
  Kbd: {
    label: "Kbd",
    fields: {
      displayMode: {
        type: "select",
        label: "Display",
        options: [
          { label: "Single key", value: "single" },
          { label: "Group of keys", value: "group" },
        ],
      },
      text: { type: "text", label: "Key / text" },
      keys: {
        type: "array",
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
    },
    render: (props: Components["Kbd"]) => {
      if (props.displayMode === "group") {
        const keyItems = props.keys.length > 0 ? props.keys : [{ key: "Add keys below" }];
        return (
          <KbdGroup className={props.className || undefined} id={props.id || undefined}>
            {keyItems.map((item, i) => (
              <Kbd key={i}>{item.key}</Kbd>
            ))}
          </KbdGroup>
        );
      }
      return (
        <Kbd className={props.className || undefined} id={props.id || undefined}>
          {props.text}
        </Kbd>
      );
    },
  },
};
