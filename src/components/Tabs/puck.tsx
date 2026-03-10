import type { ComponentType } from "react";
import { Tabs as TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsPuckEditor } from "@/puck/editorContext";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

type TabsProps = Components["Tabs"];

const tabContentAllow = [
  "Typography",
  "Badge",
  "Button",
  "Image",
  "Checkbox",
  "Card",
  "Accordion",
  "Alert",
  "AlertDialog",
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
  "Dialog",
  "DropdownMenu",
  "Empty",
  "Field",
  "HoverCard",
  "Input",
  "InputGroup",
  "Flex",
  "Grid",
  "HeroCard",
  "Section",
  "Space",
  "Table",
  "Tabs",
] as const;

const editorOnlyContentClassName =
  "group [&[hidden]]:!block [&[hidden]]:!mt-4 [&[hidden]]:rounded-md [&[hidden]]:border [&[hidden]]:border-dashed [&[hidden]]:border-muted-foreground/30 [&[hidden]]:bg-muted/20 [&[hidden]]:p-3 [&[hidden]]:min-h-[44px]";

function TabsPuckRender({
  items = [],
  defaultValue = "",
  orientation = "horizontal",
  variant = "default",
  className,
  id,
}: TabsProps) {
  const isEditor = useIsPuckEditor();
  const value = defaultValue || (items[0]?.value ?? "");
  return (
    <TabsRoot
      defaultValue={value}
      orientation={orientation}
      className={cn("w-full", className)}
      id={id || undefined}
    >
      <TabsList
        variant={variant}
        className={cn(
          orientation === "vertical" && "flex h-auto flex-col items-stretch justify-center"
        )}
      >
        {items.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} variant={variant}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((tab) => {
        const Content = tab?.content as unknown as
          | ComponentType<AreaContentProps>
          | undefined;
        const isSlotFunction = typeof Content === "function";
        return (
          <TabsContent
            key={tab.value}
            value={tab.value}
            forceMount={isEditor}
            className={isEditor ? editorOnlyContentClassName : undefined}
          >
            {isEditor && (
              <span className="mb-2 block text-xs font-medium text-muted-foreground group-data-[state=active]:sr-only">
                {tab.label} content
              </span>
            )}
            {isSlotFunction ? (
              <Content className="min-w-0" minEmptyHeight={44} />
            ) : Content != null && !Array.isArray(Content) ? (
              (Content as React.ReactNode)
            ) : (
              <span className="text-muted-foreground text-sm">
                {isEditor ? "Add content to this tab" : null}
              </span>
            )}
          </TabsContent>
        );
      })}
    </TabsRoot>
  );
}

export const tabsPuckConfig = {
  Tabs: {
    label: "Tabs",
    fields: {
      items: {
        type: "array" as const,
        label: "Tabs",
        getItemSummary: (item: { value: string; label: string; content: unknown }) =>
          item?.label || item?.value || "Tab",
        arrayFields: {
          value: { type: "text", label: "Value" },
          label: { type: "text", label: "Label" },
          content: {
            type: "slot" as const,
            label: "Content",
            allow: [...tabContentAllow],
          },
        },
        defaultItemProps: () => ({ value: "", label: "", content: [] }),
      },
      defaultValue: { type: "text", label: "Default value (tab value to show first)" },
      orientation: {
        type: "select" as const,
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
      },
      variant: {
        type: "select" as const,
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Line", value: "line" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      items: [
        { value: "tab1", label: "Tab 1", content: [] },
        { value: "tab2", label: "Tab 2", content: [] },
        { value: "tab3", label: "Tab 3", content: [] },
      ],
      defaultValue: "tab1",
      orientation: "horizontal" as const,
      variant: "default" as const,
      className: "",
      id: "",
    } satisfies TabsProps,
    render: (props: TabsProps) => <TabsPuckRender {...props} />,
  },
};
