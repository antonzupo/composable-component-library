import type { ComponentType } from "react";
import { Dialog } from "@/components/Dialog/Dialog";
import { Button } from "@/components/ui/button";
import type { AreaContentProps, Components } from "@/puck/types";

type DialogProps = Components["Dialog"];

const slotAllow = [
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
  "DataTable",
  "DatePicker",
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

export const dialogPuckConfig = {
  Dialog: {
    label: "Dialog",
    fields: {
      triggerLabel: {
        type: "text" as const,
        label: "Trigger button label",
      },
      trigger: {
        type: "slot" as const,
        label: "Trigger (e.g. button that opens the dialog)",
        allow: [...slotAllow],
      },
      content: {
        type: "slot" as const,
        label: "Dialog content",
        allow: [...slotAllow],
      },
      contentLabel: { type: "text", label: "Content accessibility label" },
      contentClassName: { type: "text", label: "Content class name" },
      overlayClassName: { type: "text", label: "Overlay class name" },
      className: { type: "text", label: "Trigger wrapper class name" },
      id: { type: "text", label: "ID" },
      defaultOpen: {
        type: "radio" as const,
        label: "Default open (uncontrolled)",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      modal: {
        type: "radio" as const,
        label: "Modal",
        options: [
          { label: "No (non-modal)", value: false },
          { label: "Yes", value: true },
        ],
      },
      title: { type: "text", label: "Title" },
      description: { type: "text", label: "Description" },
      showCloseButton: {
        type: "radio" as const,
        label: "Show close button",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
    },
    defaultProps: {
      triggerLabel: "Open dialog",
      trigger: [],
      content: [],
      contentLabel: "",
      contentClassName: "",
      overlayClassName: "",
      className: "",
      id: "",
      defaultOpen: false,
      modal: true,
      title: "",
      description: "",
      showCloseButton: true,
    } satisfies DialogProps,
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
      modal,
      title,
      description,
      showCloseButton,
    }: DialogProps) => {
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
        <Button type="button">{triggerLabel || "Open dialog"}</Button>
      );
      const contentNode = contentIsSlotComponent ? (
        <Content allow={[...slotAllow]} minEmptyHeight={80} />
      ) : (
        <span className="text-muted-foreground text-sm">
          Add content to the dialog
        </span>
      );
      const isEditMode =
        triggerIsSlotComponent || contentIsSlotComponent;
      return (
        <Dialog
          puck={isEditMode ? { isEditing: true } : undefined}
          contentClassName={contentClassName}
          overlayClassName={overlayClassName}
          className={className}
          id={id}
          defaultOpen={defaultOpen}
          modal={modal}
          title={title}
          description={description}
          contentLabel={contentLabel}
          showCloseButton={showCloseButton}
        >
          {triggerNode}
          {contentNode}
        </Dialog>
      );
    },
  },
};
