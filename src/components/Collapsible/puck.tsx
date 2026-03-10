import type { ComponentType } from "react";
import { Collapsible } from "@/components/Collapsible/Collapsible";
import type { AreaContentProps, Components } from "@/puck/types";

const contentAllow = [
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
  "Dialog",
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

type CollapsibleProps = Components["Collapsible"];

const defaultProps: CollapsibleProps = {
  trigger: "Toggle",
  content: [],
  defaultOpen: false,
  appearance: "default",
  triggerAlign: "left",
  contentAlign: "left",
  triggerPadding: "md",
  contentPadding: "md",
  showIcon: true,
  iconPosition: "end",
  variant: "default",
  rounded: "lg",
  fullWidth: true,
  className: "",
  id: "",
};

const baseFields = {
  trigger: { type: "text" as const, label: "Trigger" },
  content: {
    type: "slot" as const,
    label: "Content",
    allow: [...contentAllow],
  },
  defaultOpen: {
    type: "radio" as const,
    label: "Default open",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  appearance: {
    type: "radio" as const,
    label: "Appearance",
    options: [
      { label: "Default", value: "default" },
      { label: "File tree", value: "fileTree" },
    ],
  },
  triggerAlign: {
    type: "select" as const,
    label: "Trigger alignment",
    options: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
    ],
  },
  contentAlign: {
    type: "select" as const,
    label: "Content alignment",
    options: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
    ],
  },
  triggerPadding: {
    type: "select" as const,
    label: "Trigger padding",
    options: [
      { label: "None", value: "none" },
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
    ],
  },
  contentPadding: {
    type: "select" as const,
    label: "Content padding",
    options: [
      { label: "None", value: "none" },
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
    ],
  },
  showIcon: {
    type: "radio" as const,
    label: "Show icon",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  iconPosition: {
    type: "radio" as const,
    label: "Icon position",
    options: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" },
    ],
  },
  variant: {
    type: "select" as const,
    label: "Variant",
    options: [
      { label: "Default", value: "default" },
      { label: "Bordered", value: "bordered" },
      { label: "Ghost", value: "ghost" },
    ],
  },
  rounded: {
    type: "select" as const,
    label: "Rounded",
    options: [
      { label: "None", value: "none" },
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
      { label: "Full", value: "full" },
    ],
  },
  fullWidth: {
    type: "radio" as const,
    label: "Full width",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  className: { type: "text" as const, label: "Class name" },
  id: { type: "text" as const, label: "ID" },
};

export const collapsiblePuckConfig = {
  Collapsible: {
    label: "Collapsible",
    resolveFields: (data: { props: CollapsibleProps }) => {
      const showIcon = data.props.showIcon === true;
      return {
        trigger: baseFields.trigger,
        content: baseFields.content,
        defaultOpen: baseFields.defaultOpen,
        appearance: baseFields.appearance,
        triggerAlign: baseFields.triggerAlign,
        contentAlign: baseFields.contentAlign,
        triggerPadding: baseFields.triggerPadding,
        contentPadding: baseFields.contentPadding,
        showIcon: baseFields.showIcon,
        ...(showIcon ? { iconPosition: baseFields.iconPosition } : {}),
        variant: baseFields.variant,
        rounded: baseFields.rounded,
        fullWidth: baseFields.fullWidth,
        className: baseFields.className,
        id: baseFields.id,
      };
    },
    fields: baseFields,
    defaultProps,
    render: ({
      trigger,
      content,
      defaultOpen = false,
      appearance = "default",
      triggerAlign = "left",
      contentAlign = "left",
      triggerPadding = "md",
      contentPadding = "md",
      showIcon = true,
      iconPosition = "end",
      variant = "default",
      rounded = "lg",
      fullWidth = true,
      className,
      id,
    }: CollapsibleProps) => {
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const isSlotFunction = typeof Content === "function";

      return (
        <Collapsible
          trigger={trigger}
          content={content}
          defaultOpen={defaultOpen}
          appearance={appearance}
          triggerAlign={triggerAlign}
          contentAlign={contentAlign}
          triggerPadding={triggerPadding}
          contentPadding={contentPadding}
          showIcon={showIcon}
          iconPosition={iconPosition}
          variant={variant}
          rounded={rounded}
          fullWidth={fullWidth}
          className={className ?? ""}
          id={id ?? ""}
        >
          {isSlotFunction ? (
            <Content className="min-w-0" minEmptyHeight={44} />
          ) : (
            <span className="text-muted-foreground text-sm">Add content</span>
          )}
        </Collapsible>
      );
    },
  },
};
