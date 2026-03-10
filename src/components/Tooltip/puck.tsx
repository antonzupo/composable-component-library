import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import type { AreaContentProps, Components } from "@/puck/types";

type TooltipProps = Components["Tooltip"];

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
  "Tooltip",
] as const;

export const tooltipPuckConfig = {
  Tooltip: {
    label: "Tooltip",
    fields: {
      triggerLabel: {
        type: "text" as const,
        label: "Trigger button label (when no trigger slot)",
      },
      trigger: {
        type: "slot" as const,
        label: "Trigger",
        allow: [...slotAllow],
      },
      content: {
        type: "text" as const,
        label: "Tooltip content",
      },
      side: {
        type: "select" as const,
        label: "Side",
        options: [
          { label: "Top", value: "top" },
          { label: "Right", value: "right" },
          { label: "Bottom", value: "bottom" },
          { label: "Left", value: "left" },
        ],
      },
      sideOffset: { type: "number", label: "Side offset" },
      delayDuration: { type: "number", label: "Delay duration (ms)" },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      triggerLabel: "Hover me",
      trigger: [],
      content: "Tooltip content",
      side: "top",
      sideOffset: 4,
      delayDuration: 200,
      className: "",
      id: "",
    } satisfies TooltipProps,
    render: ({
      trigger,
      triggerLabel,
      content,
      side,
      sideOffset,
      delayDuration,
      className,
      id,
    }: Components["Tooltip"]) => {
      const TriggerContent = trigger as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const triggerIsSlotComponent =
        typeof TriggerContent === "function" && !Array.isArray(trigger);
      const triggerNode = triggerIsSlotComponent ? (
        <TriggerContent
          allow={[...slotAllow]}
          minEmptyHeight={44}
        />
      ) : (
        <Button type="button" variant="outline" size="sm">
          {triggerLabel || "Hover me"}
        </Button>
      );
      return (
        <Tooltip
          trigger={undefined}
          triggerLabel={triggerLabel || "Hover me"}
          content={content ?? "Tooltip content"}
          side={side}
          sideOffset={sideOffset}
          delayDuration={delayDuration}
          className={className ?? ""}
          id={id ?? ""}
          puck={triggerIsSlotComponent ? { isEditing: true } : undefined}
        >
          {triggerNode}
        </Tooltip>
      );
    },
  },
};
