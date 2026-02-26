import type { ComponentType } from "react";
import { Dialog } from "@/components/Dialog/Dialog";
import { Button } from "@/components/ui/button";
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
  "Flex",
  "Grid",
  "HeroCard",
  "Section",
  "Space",
] as const;

export const dialogPuckConfig = {
  Dialog: {
    label: "Dialog",
    fields: {
      triggerLabel: {
        type: "text",
        label: "Trigger button label",
      },
      trigger: {
        type: "slot",
        label: "Trigger (e.g. button that opens the dialog)",
        allow: [...slotAllow],
      },
      content: {
        type: "slot",
        label: "Dialog content",
        allow: [...slotAllow],
      },
      contentClassName: { type: "text", label: "Content class name" },
      className: { type: "text", label: "Trigger wrapper class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      triggerLabel: "Open dialog",
      trigger: [],
      content: [],
      contentClassName: "",
      className: "",
      id: "",
    },
    render: ({
      trigger,
      triggerLabel,
      content,
      contentClassName,
      className,
      id,
    }: Components["Dialog"]) => {
      const TriggerContent = trigger as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasTrigger =
        TriggerContent && !Array.isArray(trigger);
      const hasContent = Content && !Array.isArray(content);
      const triggerNode = hasTrigger ? (
        <TriggerContent />
      ) : (
        <Button type="button">{triggerLabel || "Open dialog"}</Button>
      );
      return (
        <Dialog
          trigger={triggerNode}
          contentClassName={contentClassName || undefined}
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent ? (
            <Content />
          ) : (
            <span className="text-muted-foreground text-sm">
              Add content to the dialog
            </span>
          )}
        </Dialog>
      );
    },
  },
};
