import type { ComponentType } from "react";
import { HoverCard } from "@/components/HoverCard/HoverCard";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

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
] as const;

export const hoverCardPuckConfig = {
  HoverCard: {
    label: "Hover Card",
    fields: {
      triggerLabel: {
        type: "text",
        label: "Trigger button label (when no trigger slot)",
      },
      trigger: {
        type: "slot",
        label: "Trigger",
        allow: [...slotAllow],
      },
      content: {
        type: "slot",
        label: "Card content",
        allow: [...slotAllow],
      },
      contentClassName: { type: "text", label: "Content class name" },
      openDelay: { type: "number", label: "Open delay (ms)" },
      closeDelay: { type: "number", label: "Close delay (ms)" },
      className: { type: "text", label: "Trigger wrapper class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      triggerLabel: "Hover me",
      trigger: [],
      content: [],
      contentClassName: "",
      openDelay: 200,
      closeDelay: 100,
      className: "",
      id: "",
    },
    render: ({
      trigger,
      triggerLabel,
      content,
      contentClassName,
      openDelay,
      closeDelay,
      className,
      id,
    }: Components["HoverCard"]) => {
      const TriggerContent = trigger as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasTrigger =
        TriggerContent && !Array.isArray(trigger);
      const hasContent = Content && !Array.isArray(content);
      return (
        <HoverCard
          trigger={hasTrigger ? <TriggerContent /> : undefined}
          triggerLabel={triggerLabel || "Hover me"}
          content={hasContent ? <Content /> : undefined}
          contentClassName={contentClassName || undefined}
          openDelay={openDelay}
          closeDelay={closeDelay}
          className={className || undefined}
          id={id || undefined}
        />
      );
    },
  },
};
