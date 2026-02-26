import type { ComponentType } from "react";
import { Collapsible } from "@/components/Collapsible/Collapsible";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const collapsiblePuckConfig = {
  Collapsible: {
    label: "Collapsible",
    fields: {
      trigger: { type: "text", label: "Trigger label" },
      content: {
        type: "slot",
        label: "Content",
        allow: [
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
        ],
      },
      defaultOpen: {
        type: "select",
        label: "Default open",
        options: [
          { label: "Closed", value: false },
          { label: "Open", value: true },
        ],
      },
      appearance: {
        type: "select",
        label: "Appearance",
        options: [
          { label: "Default", value: "default" },
          { label: "File Tree", value: "fileTree" },
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
    defaultProps: {
      trigger: "Click to expand",
      content: [],
      defaultOpen: false,
      appearance: "default" as const,
      triggerAlign: "left" as const,
      contentAlign: "left" as const,
      triggerPadding: "md" as const,
      contentPadding: "md" as const,
      showIcon: true,
      iconPosition: "end" as const,
      variant: "default" as const,
      rounded: "lg" as const,
      fullWidth: false,
      className: "",
      id: "",
    },
    render: ({
      trigger,
      content,
      defaultOpen,
      appearance,
      triggerAlign,
      contentAlign,
      triggerPadding,
      contentPadding,
      showIcon,
      iconPosition,
      variant,
      rounded,
      fullWidth,
      className,
      id,
    }: Components["Collapsible"]) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const isEmpty = !Content || Array.isArray(content);
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
          {isEmpty ? (
            <span className="text-muted-foreground">Add content</span>
          ) : (
            <Content />
          )}
        </Collapsible>
      );
    },
  },
};
