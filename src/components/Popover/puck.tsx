import type { ComponentType } from "react";
import { Popover } from "@/components/Popover/Popover";
import { Button } from "@/components/ui/button";
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
  "Drawer",
  "DropdownMenu",
  "Empty",
  "Field",
  "Flex",
  "Grid",
  "HeroCard",
  "HoverCard",
  "Input",
  "InputGroup",
  "Section",
  "Space",
  "Popover",
] as const;

export const popoverPuckConfig = {
  Popover: {
    label: "Popover",
    fields: {
      triggerLabel: {
        type: "text" as const,
        label: "Trigger button label (when no trigger slot)",
      },
      trigger: {
        type: "slot" as const,
        label: "Trigger (e.g. button that opens the popover)",
        allow: [...slotAllow],
      },
      content: {
        type: "slot" as const,
        label: "Popover content",
        allow: [...slotAllow],
      },
      contentClassName: { type: "text", label: "Content class name" },
      align: {
        type: "select" as const,
        label: "Content align",
        options: [
          { label: "Start", value: "start" },
          { label: "Center", value: "center" },
          { label: "End", value: "end" },
        ],
      },
      side: {
        type: "select" as const,
        label: "Content side",
        options: [
          { label: "Top", value: "top" },
          { label: "Right", value: "right" },
          { label: "Bottom", value: "bottom" },
          { label: "Left", value: "left" },
        ],
      },
      sideOffset: { type: "number", label: "Content side offset (px)" },
      className: { type: "text", label: "Trigger wrapper class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      triggerLabel: "Open popover",
      trigger: [],
      content: [],
      contentClassName: "",
      align: "center" as const,
      side: "bottom" as const,
      sideOffset: 4,
      className: "",
      id: "",
    },
    render: ({
      trigger,
      triggerLabel,
      content,
      contentClassName,
      align,
      side,
      sideOffset,
      className,
      id,
      ...rest
    }: Components["Popover"]) => {
      // In edit mode Puck passes slot props as components (drop zones); in render mode they can be arrays. Always render the slot components when they are components so the drop zone is visible for drag-and-drop.
      const TriggerContent = trigger as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const triggerIsSlotComponent =
        typeof TriggerContent === "function" && !Array.isArray(trigger);
      const contentIsSlotComponent =
        typeof Content === "function" && !Array.isArray(content);
      // When slots are components (edit mode), always render them so Puck can show drop zones. When in render mode with empty slots, use fallbacks.
      return (
        <Popover
          contentClassName={contentClassName || undefined}
          align={align}
          side={side}
          sideOffset={sideOffset}
          className={className || undefined}
          id={id || undefined}
          {...rest}
        >
          {triggerIsSlotComponent ? (
            <TriggerContent minEmptyHeight={40} />
          ) : (
            <Button type="button">{triggerLabel || "Open popover"}</Button>
          )}
          {contentIsSlotComponent ? (
            <Content minEmptyHeight={80} />
          ) : (
            <span className="text-muted-foreground text-sm block min-h-[80px]">
              Add content to the popover
            </span>
          )}
        </Popover>
      );
    },
  },
};
