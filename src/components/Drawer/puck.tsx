import type { ComponentType } from "react";
import { Drawer } from "@/components/Drawer/Drawer";
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

export const drawerPuckConfig = {
  Drawer: {
    label: "Drawer",
    fields: {
      triggerLabel: {
        type: "text",
        label: "Trigger button label",
      },
      trigger: {
        type: "slot",
        label: "Trigger (e.g. button that opens the drawer)",
        allow: [...slotAllow],
      },
      content: {
        type: "slot",
        label: "Drawer content",
        allow: [...slotAllow],
      },
      contentClassName: { type: "text", label: "Content class name" },
      className: { type: "text", label: "Trigger wrapper class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      triggerLabel: "Open drawer",
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
    }: Components["Drawer"]) => {
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
        <Button type="button">{triggerLabel || "Open drawer"}</Button>
      );
      return (
        <Drawer
          trigger={triggerNode}
          contentClassName={contentClassName || undefined}
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent ? (
            <Content />
          ) : (
            <span className="text-muted-foreground text-sm p-4 block">
              Add content to the drawer
            </span>
          )}
        </Drawer>
      );
    },
  },
};
