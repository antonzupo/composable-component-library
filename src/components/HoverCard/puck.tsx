import type { ComponentType } from "react";
import { HoverCard } from "@/components/HoverCard/HoverCard";
import { Button } from "@/components/ui/button";
import type { AreaContentProps, Components } from "@/puck/types";

type HoverCardProps = Components["HoverCard"];

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
  "DataTable",
  "DatePicker",
  "Direction",
  "Dialog",
  "Drawer",
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
        label: "Trigger (e.g. button or link that shows the card on hover)",
        allow: [...slotAllow],
      },
      content: {
        type: "slot",
        label: "Hover card content",
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
    } satisfies HoverCardProps,
    render: ({
      trigger,
      triggerLabel,
      content,
      contentClassName,
      openDelay,
      closeDelay,
      className,
      id,
    }: HoverCardProps) => {
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
      const triggerNode = triggerIsSlotComponent ? (
        <TriggerContent allow={[...slotAllow]} minEmptyHeight={40} />
      ) : (
        <Button type="button" variant="outline" size="sm">
          {triggerLabel || "Hover me"}
        </Button>
      );
      const contentNode = contentIsSlotComponent ? (
        <Content allow={[...slotAllow]} minEmptyHeight={80} />
      ) : (
        <span className="text-muted-foreground text-sm">
          Add content to the hover card
        </span>
      );
      const isEditMode =
        triggerIsSlotComponent || contentIsSlotComponent;
      return (
        <HoverCard
          puck={isEditMode ? { isEditing: true } : undefined}
          contentClassName={contentClassName || undefined}
          className={className || undefined}
          id={id || undefined}
          openDelay={openDelay}
          closeDelay={closeDelay}
        >
          {triggerNode}
          {contentNode}
        </HoverCard>
      );
    },
  },
};
