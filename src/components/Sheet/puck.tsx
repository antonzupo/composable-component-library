import type { ComponentType } from "react";
import { Sheet } from "@/components/Sheet/Sheet";
import { Button } from "@/components/ui/button";
import type { AreaContentProps, Components } from "@/puck/types";

type SheetProps = Components["Sheet"];

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
  "Flex",
  "Grid",
  "HeroCard",
  "Section",
  "Space",
] as const;

export const sheetPuckConfig = {
  Sheet: {
    label: "Sheet",
    fields: {
      triggerLabel: {
        type: "text",
        label: "Trigger button label",
      },
      trigger: {
        type: "slot",
        label: "Trigger (e.g. button that opens the sheet)",
        allow: [...slotAllow],
      },
      content: {
        type: "slot",
        label: "Sheet content",
        allow: [...slotAllow],
      },
      contentClassName: { type: "text", label: "Content class name" },
      side: {
        type: "select",
        label: "Side",
        options: [
          { label: "Right", value: "right" },
          { label: "Left", value: "left" },
          { label: "Top", value: "top" },
          { label: "Bottom", value: "bottom" },
        ],
      },
      className: { type: "text", label: "Trigger wrapper class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      triggerLabel: "Open sheet",
      trigger: [],
      content: [],
      contentClassName: "",
      side: "right",
      className: "",
      id: "",
    } satisfies SheetProps,
    render: ({
      trigger,
      triggerLabel,
      content,
      contentClassName,
      side,
      className,
      id,
    }: SheetProps) => {
      const TriggerContent = trigger as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasTrigger = TriggerContent && !Array.isArray(trigger);
      const hasContent = Content && !Array.isArray(content);
      const triggerNode = hasTrigger ? (
        <TriggerContent />
      ) : (
        <Button type="button">{triggerLabel || "Open sheet"}</Button>
      );
      return (
        <Sheet
          trigger={triggerNode}
          contentClassName={contentClassName || undefined}
          side={side}
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent ? (
            <Content />
          ) : (
            <span className="text-muted-foreground text-sm p-4 block">
              Add content to the sheet
            </span>
          )}
        </Sheet>
      );
    },
  },
};
