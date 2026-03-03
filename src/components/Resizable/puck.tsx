import type { ComponentType } from "react";
import { Resizable } from "@/components/Resizable/Resizable";
import type { AreaContentProps, Components } from "@/puck/types";

const slotAllow = [
  "Text",
  "Badge",
  "Button",
  "Image",
  "Checkbox",
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
  "Direction",
  "Resizable",
] as const;

export const resizablePuckConfig = {
  Resizable: {
    label: "Resizable",
    fields: {
      direction: {
        type: "select",
        label: "Direction",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
      },
      autoSaveId: { type: "text", label: "Auto-save ID (for persistent layout)" },
      tagName: {
        type: "select",
        label: "Wrapper tag",
        options: [
          { label: "div", value: "div" },
          { label: "section", value: "section" },
          { label: "article", value: "article" },
          { label: "aside", value: "aside" },
        ],
      },
      className: { type: "text", label: "Group class name" },
      id: { type: "text", label: "ID" },
      // Panel 1
      panel1Content: {
        type: "slot",
        label: "Panel 1 content",
        allow: [...slotAllow],
      },
      panel1DefaultSize: {
        type: "number",
        label: "Panel 1 default size (%)",
        min: 1,
        max: 99,
      },
      panel1MinSize: {
        type: "number",
        label: "Panel 1 min size (%)",
        min: 0,
        max: 100,
      },
      panel1MaxSize: {
        type: "number",
        label: "Panel 1 max size (%)",
        min: 1,
        max: 100,
      },
      panel1Collapsible: {
        type: "select",
        label: "Panel 1 collapsible",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      panel1CollapsedSize: {
        type: "number",
        label: "Panel 1 collapsed size (%)",
        min: 0,
        max: 100,
      },
      panel1Order: {
        type: "number",
        label: "Panel 1 flex order",
      },
      panel1ClassName: { type: "text", label: "Panel 1 class name" },
      panel1Id: { type: "text", label: "Panel 1 ID" },
      // Handle
      handleWithHandle: {
        type: "select",
        label: "Handle with grip icon",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      handleClassName: { type: "text", label: "Handle class name" },
      // Panel 2
      panel2Content: {
        type: "slot",
        label: "Panel 2 content",
        allow: [...slotAllow],
      },
      panel2DefaultSize: {
        type: "number",
        label: "Panel 2 default size (%)",
        min: 1,
        max: 99,
      },
      panel2MinSize: {
        type: "number",
        label: "Panel 2 min size (%)",
        min: 0,
        max: 100,
      },
      panel2MaxSize: {
        type: "number",
        label: "Panel 2 max size (%)",
        min: 1,
        max: 100,
      },
      panel2Collapsible: {
        type: "select",
        label: "Panel 2 collapsible",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      panel2CollapsedSize: {
        type: "number",
        label: "Panel 2 collapsed size (%)",
        min: 0,
        max: 100,
      },
      panel2Order: {
        type: "number",
        label: "Panel 2 flex order",
      },
      panel2ClassName: { type: "text", label: "Panel 2 class name" },
      panel2Id: { type: "text", label: "Panel 2 ID" },
    },
    defaultProps: {
      direction: "horizontal" as const,
      autoSaveId: "",
      tagName: "div",
      className: "",
      id: "",
      panel1Content: [],
      panel1DefaultSize: 50,
      panel1MinSize: 10,
      panel1MaxSize: 90,
      panel1Collapsible: false,
      panel1CollapsedSize: 0,
      panel1Order: 0,
      panel1ClassName: "",
      panel1Id: "",
      handleWithHandle: false,
      handleClassName: "",
      panel2Content: [],
      panel2DefaultSize: 50,
      panel2MinSize: 10,
      panel2MaxSize: 90,
      panel2Collapsible: false,
      panel2CollapsedSize: 0,
      panel2Order: 0,
      panel2ClassName: "",
      panel2Id: "",
    },
    render: (props: Components["Resizable"]) => {
      const Panel1Content = props.panel1Content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const Panel2Content = props.panel2Content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const WrapperTag = (props.tagName || "div") as keyof JSX.IntrinsicElements;

      return (
        <Resizable
          direction={props.direction}
          autoSaveId={props.autoSaveId || undefined}
          tagName={WrapperTag}
          className={props.className || undefined}
          id={props.id || undefined}
          panel1={{
            defaultSize: props.panel1DefaultSize,
            minSize: props.panel1MinSize,
            maxSize: props.panel1MaxSize,
            collapsible: props.panel1Collapsible,
            collapsedSize: props.panel1CollapsedSize,
            order: props.panel1Order,
            className: props.panel1ClassName || undefined,
            id: props.panel1Id || undefined,
            children: Panel1Content ? (
              <Panel1Content minEmptyHeight={160} />
            ) : undefined,
          }}
          handle={{
            withHandle: props.handleWithHandle,
            className: props.handleClassName || undefined,
          }}
          panel2={{
            defaultSize: props.panel2DefaultSize,
            minSize: props.panel2MinSize,
            maxSize: props.panel2MaxSize,
            collapsible: props.panel2Collapsible,
            collapsedSize: props.panel2CollapsedSize,
            order: props.panel2Order,
            className: props.panel2ClassName || undefined,
            id: props.panel2Id || undefined,
            children: Panel2Content ? (
              <Panel2Content minEmptyHeight={160} />
            ) : undefined,
          }}
        />
      );
    },
  },
};
