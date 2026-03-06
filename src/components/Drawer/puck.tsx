import type { ComponentType } from "react";
import { Drawer } from "@/components/Drawer/Drawer";
import { Button } from "@/components/ui/button";
import type { AreaContentProps, Components } from "@/puck/types";

type DrawerProps = Components["Drawer"];

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
      contentLabel: { type: "text", label: "Content accessibility label" },
      contentClassName: { type: "text", label: "Content class name" },
      overlayClassName: { type: "text", label: "Overlay class name" },
      headerClassName: { type: "text", label: "Header class name" },
      footerClassName: { type: "text", label: "Footer class name" },
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
      direction: {
        type: "select",
        label: "Direction",
        options: [
          { label: "Bottom", value: "bottom" },
          { label: "Top", value: "top" },
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
      shouldScaleBackground: {
        type: "select",
        label: "Scale background",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      modal: {
        type: "select",
        label: "Modal",
        options: [
          { label: "Yes", value: true },
          { label: "No (interact outside)", value: false },
        ],
      },
      dismissible: {
        type: "select",
        label: "Dismissible (drag / click outside / ESC)",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showHandle: {
        type: "select",
        label: "Show drag handle",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
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
      triggerLabel: "Open drawer",
      trigger: [],
      content: [],
      contentLabel: "",
      contentClassName: "",
      overlayClassName: "",
      headerClassName: "",
      footerClassName: "",
      className: "",
      id: "",
      defaultOpen: false,
      direction: "bottom",
      shouldScaleBackground: true,
      modal: true,
      dismissible: true,
      showHandle: true,
      title: "",
      description: "",
      showCloseButton: true,
    } satisfies DrawerProps,
    render: ({
      trigger,
      triggerLabel,
      content,
      contentLabel,
      contentClassName,
      overlayClassName,
      headerClassName,
      footerClassName,
      className,
      id,
      defaultOpen,
      direction,
      shouldScaleBackground,
      modal,
      dismissible,
      showHandle,
      title,
      description,
      showCloseButton,
    }: DrawerProps) => {
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
        <Button type="button">{triggerLabel || "Open drawer"}</Button>
      );
      const contentNode = contentIsSlotComponent ? (
        <Content allow={[...slotAllow]} minEmptyHeight={80} />
      ) : (
        <span className="text-muted-foreground text-sm">
          Add content to the drawer
        </span>
      );
      const isEditMode =
        triggerIsSlotComponent || contentIsSlotComponent;
      return (
        <Drawer
          puck={isEditMode ? { isEditing: true } : undefined}
          contentClassName={contentClassName || undefined}
          overlayClassName={overlayClassName || undefined}
          headerClassName={headerClassName || undefined}
          footerClassName={footerClassName || undefined}
          className={className || undefined}
          id={id || undefined}
          defaultOpen={defaultOpen}
          direction={direction}
          shouldScaleBackground={shouldScaleBackground}
          modal={modal}
          dismissible={dismissible}
          showHandle={showHandle}
          title={title || undefined}
          description={description || undefined}
          contentLabel={contentLabel || undefined}
          showCloseButton={showCloseButton}
        >
          {triggerNode}
          {contentNode}
        </Drawer>
      );
    },
  },
};
