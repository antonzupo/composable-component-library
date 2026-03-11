import type { ComponentType, Ref } from "react";
import { GridItem } from "@/components/GridItem/GridItem";
import type { AreaContentProps, Components } from "@/puck/types";

type GridItemProps = Components["GridItem"];
type PuckRenderProps = { puck?: { dragRef?: Ref<HTMLDivElement> | null } };

const gridItemContentAllow = [
  "Typography",
  "Badge",
  "Button",
  "Image",
  "Card",
  "Accordion",
  "Alert",
  "AspectRatio",
  "Avatar",
  "Breadcrumb",
  "Calendar",
  "Carousel",
  "Chart",
  "Collapsible",
  "Combobox",
  "Command",
  "ContextMenu",
  "DataTable",
  "DatePicker",
  "Dialog",
  "Drawer",
  "DropdownMenu",
  "Empty",
  "Field",
  "Flex",
  "HeroCard",
  "HoverCard",
  "Input",
  "InputGroup",
  "Item",
  "Menubar",
  "NavigationMenu",
  "Pagination",
  "Popover",
  "Progress",
  "Resizable",
  "ScrollArea",
  "Section",
  "Select",
  "Sheet",
  "Sidebar",
  "Space",
] as const;

export const gridItemPuckConfig = {
  GridItem: {
    label: "Grid item",
    inline: true,
    fields: {
      content: { type: "slot" as const, label: "Content", allow: [...gridItemContentAllow], disallow: ["GridItem"] },
      spanColumns: {
        type: "select" as const,
        label: "Span columns",
        options: [1, 2, 3, 4, 5, 6].map((n) => ({ label: String(n), value: n })),
      },
      spanRows: {
        type: "select" as const,
        label: "Span rows",
        options: [1, 2, 3, 4, 5, 6].map((n) => ({ label: String(n), value: n })),
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      content: [],
      spanColumns: 1,
      spanRows: 1,
      className: "",
      id: "",
    } satisfies GridItemProps,
    render: ({ content, spanColumns, spanRows, className, id, puck }: GridItemProps & PuckRenderProps) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      return (
        <GridItem
          ref={puck?.dragRef as Ref<HTMLDivElement>}
          content={[]}
          spanColumns={spanColumns}
          spanRows={spanRows}
          className={className}
          id={id}
        >
          {Content ? (
            <Content minEmptyHeight={80} disallow={["GridItem"]} />
          ) : (
            <div className="min-h-[80px] rounded border border-dashed border-border bg-muted/20" />
          )}
        </GridItem>
      );
    },
  },
};
