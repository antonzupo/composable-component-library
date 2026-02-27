import type { ComponentType } from "react";
import { Collapsible } from "@/components/Collapsible/Collapsible";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

const contentAllow = [
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
  "HoverCard",
  "Input",
  "InputGroup",
  "Flex",
  "Grid",
  "HeroCard",
  "Section",
  "Space",
] as const;

const defaultProps: Components["Collapsible"] = {
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

export const collapsiblePuckConfig = {
  Collapsible: {
    label: "Collapsible",
    fields: {
      trigger: { type: "text", label: "Trigger" },
      content: {
        type: "slot",
        label: "Content",
        allow: [...contentAllow],
      },
      defaultOpen: {
        type: "select",
        label: "Default open",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      appearance: {
        type: "select",
        label: "Appearance",
        options: [
          { label: "Default", value: "default" },
          { label: "File tree", value: "fileTree" },
        ],
      },
      triggerAlign: {
        type: "select",
        label: "Trigger alignment",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ],
      },
      contentAlign: {
        type: "select",
        label: "Content alignment",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ],
      },
      triggerPadding: {
        type: "select",
        label: "Trigger padding",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      contentPadding: {
        type: "select",
        label: "Content padding",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      showIcon: {
        type: "select",
        label: "Show icon",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      iconPosition: {
        type: "select",
        label: "Icon position",
        options: [
          { label: "Start", value: "start" },
          { label: "End", value: "end" },
        ],
      },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Bordered", value: "bordered" },
          { label: "Ghost", value: "ghost" },
        ],
      },
      rounded: {
        type: "select",
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
        type: "select",
        label: "Full width",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
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
    }: Components["Collapsible"]) => {
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const isSlotFunction = typeof Content === "function";

      return (
        <Collapsible
          trigger={trigger}
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
          className={className || undefined}
          id={id || undefined}
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
