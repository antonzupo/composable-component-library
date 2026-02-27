import { Accordion } from "@/components/Accordion/Accordion";
import type { Components, PuckCategory } from "@/puck/types";

type AccordionProps = Components["Accordion"];

export const puckCategory: PuckCategory = "molecules";

export const accordionPuckConfig = {
  Accordion: {
    label: "Accordion",
    fields: {
      items: {
        type: "array",
        label: "Items",
        getItemSummary: (item: { trigger: string; content: string; disabled?: boolean }) =>
          item?.trigger || "Item",
        arrayFields: {
          trigger: { type: "text", label: "Trigger" },
          content: { type: "textarea", label: "Content" },
          disabled: {
            type: "select",
            label: "Disabled",
            options: [
              { label: "No", value: false },
              { label: "Yes", value: true },
            ],
          },
        },
      },
      type: {
        type: "select",
        label: "Type",
        options: [
          { label: "Single", value: "single" },
          { label: "Multiple", value: "multiple" },
        ],
      },
      defaultOpen: {
        type: "select",
        label: "Default open",
        options: [
          { label: "First", value: "first" },
          { label: "None", value: "none" },
          { label: "All", value: "all" },
        ],
      },
      collapsible: {
        type: "select",
        label: "Collapsible (single only)",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
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
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Bordered", value: "bordered" },
          { label: "Ghost", value: "ghost" },
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
      showBorder: {
        type: "select",
        label: "Show border",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      items: [
        { trigger: "First item", content: "Content for the first item.", disabled: false },
        { trigger: "Second item", content: "Content for the second item.", disabled: false },
      ],
      type: "single" as const,
      defaultOpen: "first" as const,
      collapsible: true,
      triggerAlign: "left" as const,
      contentAlign: "left" as const,
      triggerPadding: "md" as const,
      contentPadding: "md" as const,
      showIcon: true,
      iconPosition: "end" as const,
      rounded: "lg" as const,
      variant: "default" as const,
      fullWidth: true,
      showBorder: true,
      className: "",
      id: "",
    },
    render: ({
      items = [],
      type = "single",
      defaultOpen = "first",
      collapsible = true,
      triggerAlign = "left",
      contentAlign = "left",
      triggerPadding = "md",
      contentPadding = "md",
      showIcon = true,
      iconPosition = "end",
      rounded = "lg",
      variant = "default",
      fullWidth = true,
      showBorder = true,
      className,
      id,
    }: AccordionProps) => (
      <Accordion
        items={items}
        type={type}
        defaultOpen={defaultOpen}
        collapsible={collapsible}
        triggerAlign={triggerAlign}
        contentAlign={contentAlign}
        triggerPadding={triggerPadding}
        contentPadding={contentPadding}
        showIcon={showIcon}
        iconPosition={iconPosition}
        rounded={rounded}
        variant={variant}
        fullWidth={fullWidth}
        showBorder={showBorder}
        className={className || undefined}
        id={id || undefined}
      />
    ),
  },
};
