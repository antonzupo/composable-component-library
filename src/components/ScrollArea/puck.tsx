import type { ComponentType } from "react";
import { ScrollArea } from "@/components/ScrollArea/ScrollArea";
import type { AreaContentProps, Components } from "@/puck/types";

const contentAllow = [
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
  "Separator",
  "Progress",
  "Skeleton",
] as const;

const defaultProps: Components["ScrollArea"] = {
  type: "hover",
  scrollHideDelay: 600,
  dir: "ltr",
  viewportNonce: "",
  viewportClassName: "",
  className: "h-[200px] w-full rounded-md border p-4",
  id: "",
  content: [],
  showVerticalScrollbar: true,
  showHorizontalScrollbar: false,
  verticalScrollbarForceMount: false,
  horizontalScrollbarForceMount: false,
  verticalScrollbarClassName: "",
  horizontalScrollbarClassName: "",
};

export const scrollAreaPuckConfig = {
  ScrollArea: {
    label: "Scroll Area",
    fields: {
      // Root (atom: scroll area container)
      type: {
        type: "select" as const,
        label: "Scrollbar visibility",
        description: "When to show the scrollbar (Root).",
        options: [
          { label: "Hover", value: "hover" },
          { label: "Always", value: "always" },
          { label: "Scroll", value: "scroll" },
          { label: "Auto", value: "auto" },
        ],
      },
      scrollHideDelay: {
        type: "number" as const,
        label: "Scroll hide delay (ms)",
        description: "Delay before hiding scrollbar after scroll stops (Root).",
        min: 0,
      },
      dir: {
        type: "select" as const,
        label: "Direction",
        description: "Text direction for RTL support (Root).",
        options: [
          { label: "Left to right (LTR)", value: "ltr" },
          { label: "Right to left (RTL)", value: "rtl" },
        ],
      },
      className: {
        type: "text" as const,
        label: "Root class name",
        description: "CSS classes for the scroll area root (e.g. h-[200px] w-full).",
      },
      id: {
        type: "text" as const,
        label: "Root ID",
        description: "HTML id for the scroll area root.",
      },
      // Viewport
      viewportNonce: {
        type: "text" as const,
        label: "Viewport nonce",
        description: "CSP nonce for the viewport element (optional).",
      },
      viewportClassName: {
        type: "text" as const,
        label: "Viewport class name",
        description: "CSS classes for the scroll viewport.",
      },
      // Content (slot)
      content: {
        type: "slot" as const,
        label: "Content",
        description: "Content inside the scroll area.",
        allow: [...contentAllow],
      },
      // Scrollbars
      showVerticalScrollbar: {
        type: "radio" as const,
        label: "Show vertical scrollbar",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      showHorizontalScrollbar: {
        type: "radio" as const,
        label: "Show horizontal scrollbar",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      verticalScrollbarForceMount: {
        type: "radio" as const,
        label: "Vertical scrollbar force mount",
        description: "Keep scrollbar mounted when not needed (e.g. for animations).",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      horizontalScrollbarForceMount: {
        type: "radio" as const,
        label: "Horizontal scrollbar force mount",
        description: "Keep scrollbar mounted when not needed.",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      verticalScrollbarClassName: {
        type: "text" as const,
        label: "Vertical scrollbar class name",
        description: "CSS classes for the vertical scrollbar.",
      },
      horizontalScrollbarClassName: {
        type: "text" as const,
        label: "Horizontal scrollbar class name",
        description: "CSS classes for the horizontal scrollbar.",
      },
    },
    defaultProps,
    render: (props: Components["ScrollArea"]) => {
      const Content = props.content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const isSlotFunction = typeof Content === "function";

      return (
        <ScrollArea
          type={props.type}
          scrollHideDelay={props.scrollHideDelay}
          dir={props.dir}
          viewportNonce={props.viewportNonce}
          viewportClassName={props.viewportClassName}
          className={props.className}
          id={props.id}
          showVerticalScrollbar={props.showVerticalScrollbar}
          showHorizontalScrollbar={props.showHorizontalScrollbar}
          verticalScrollbarForceMount={props.verticalScrollbarForceMount}
          horizontalScrollbarForceMount={props.horizontalScrollbarForceMount}
          verticalScrollbarClassName={props.verticalScrollbarClassName}
          horizontalScrollbarClassName={props.horizontalScrollbarClassName}
        >
          {isSlotFunction ? (
            <Content className="min-w-0" minEmptyHeight={44} />
          ) : (
            <span className="text-muted-foreground text-sm">
              Add content to the scroll area
            </span>
          )}
        </ScrollArea>
      );
    },
  },
};
