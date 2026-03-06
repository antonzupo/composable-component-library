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
  "Sheet",
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
      contentLabel: { type: "text", label: "Content accessibility label" },
      contentClassName: { type: "text", label: "Content class name" },
      overlayClassName: { type: "text", label: "Overlay class name" },
      className: { type: "text", label: "Trigger wrapper class name" },
      id: { type: "text", label: "ID" },
      defaultOpen: {
        type: "select",
        label: "Default open (uncontrolled)",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
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
      title: { type: "text", label: "Title" },
      description: { type: "text", label: "Description" },
      showCloseButton: {
        type: "select",
        label: "Show close button",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
    },
    defaultProps: {
      triggerLabel: "Open sheet",
      trigger: [],
      content: [],
      contentLabel: "",
      contentClassName: "",
      overlayClassName: "",
      className: "",
      id: "",
      defaultOpen: false,
      side: "right",
      title: "",
      description: "",
      showCloseButton: true,
    } satisfies SheetProps,
    render: ({
      trigger,
      triggerLabel,
      content,
      contentLabel,
      contentClassName,
      overlayClassName,
      className,
      id,
      defaultOpen,
      side,
      title,
      description,
      showCloseButton,
    }: SheetProps) => {
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
        <Button type="button">{triggerLabel || "Open sheet"}</Button>
      );
      const contentNode = contentIsSlotComponent ? (
        <Content allow={[...slotAllow]} minEmptyHeight={80} />
      ) : (
        <span className="text-muted-foreground text-sm">
          Add content to the sheet
        </span>
      );
      const isEditMode =
        triggerIsSlotComponent || contentIsSlotComponent;
      return (
        <Sheet
          puck={isEditMode ? { isEditing: true } : undefined}
          contentClassName={contentClassName || undefined}
          overlayClassName={overlayClassName || undefined}
          className={className || undefined}
          id={id || undefined}
          defaultOpen={defaultOpen}
          side={side}
          title={title || undefined}
          description={description || undefined}
          contentLabel={contentLabel || undefined}
          showCloseButton={showCloseButton}
        >
          {triggerNode}
          {contentNode}
        </Sheet>
      );
    },
  },
};
