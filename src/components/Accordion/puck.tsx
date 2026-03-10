import { Accordion } from "@/components/Accordion/Accordion";
import type { Components } from "@/puck/types";

type AccordionProps = Components["Accordion"];

const baseFields = {
  items: {
    type: "array" as const,
    label: "Items",
    getItemSummary: (item: { trigger: string; content: string; disabled?: boolean }) =>
      item?.trigger || "Item",
    arrayFields: {
      trigger: { type: "text" as const, label: "Trigger" },
      content: { type: "textarea" as const, label: "Content" },
          disabled: {
            type: "radio" as const,
            label: "Disabled",
            options: [
              { label: "No", value: false },
              { label: "Yes", value: true },
            ],
          },
    },
  },
  type: {
    type: "radio" as const,
    label: "Type",
    options: [
      { label: "Single", value: "single" },
      { label: "Multiple", value: "multiple" },
    ],
  },
  defaultOpen: {
    type: "select" as const,
    label: "Default open",
    options: [
      { label: "First", value: "first" },
      { label: "None", value: "none" },
      { label: "All", value: "all" },
    ],
  },
  collapsible: {
    type: "radio" as const,
    label: "Collapsible (single only)",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
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
  variant: {
    type: "select" as const,
    label: "Variant",
    options: [
      { label: "Default", value: "default" },
      { label: "Bordered", value: "bordered" },
      { label: "Ghost", value: "ghost" },
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
  showBorder: {
    type: "radio" as const,
    label: "Show border",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  className: { type: "text" as const, label: "Class name" },
  id: { type: "text" as const, label: "ID" },
};

export const accordionPuckConfig = {
  Accordion: {
    label: "Accordion",
    resolveFields: (data: { props: AccordionProps }) => {
      const showIcon = data.props.showIcon === true;
      return {
        items: baseFields.items,
        type: baseFields.type,
        defaultOpen: baseFields.defaultOpen,
        collapsible: baseFields.collapsible,
        triggerAlign: baseFields.triggerAlign,
        contentAlign: baseFields.contentAlign,
        triggerPadding: baseFields.triggerPadding,
        contentPadding: baseFields.contentPadding,
        showIcon: baseFields.showIcon,
        ...(showIcon ? { iconPosition: baseFields.iconPosition } : {}),
        rounded: baseFields.rounded,
        variant: baseFields.variant,
        fullWidth: baseFields.fullWidth,
        showBorder: baseFields.showBorder,
        className: baseFields.className,
        id: baseFields.id,
      };
    },
    fields: baseFields,
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
        className={className ?? ""}
        id={id ?? ""}
      />
    ),
  },
};
