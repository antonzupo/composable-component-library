import { Accordion } from "@/components/Accordion/Accordion";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const accordionPuckConfig = {
  Accordion: {
    label: "Accordion",
    fields: {
      items: {
        type: "array",
        label: "Items",
        arrayFields: {
          trigger: { type: "text", label: "Title" },
          content: { type: "textarea", label: "Content" },
        },
        getItemSummary: (item: { trigger?: string }) => item?.trigger || "Item",
        defaultItemProps: () => ({ trigger: "Item", content: "" }),
      },
      type: {
        type: "select",
        label: "Behaviour",
        options: [
          { label: "Single (one open)", value: "single" },
          { label: "Multiple", value: "multiple" },
        ],
      },
      defaultOpen: {
        type: "select",
        label: "Default open",
        options: [
          { label: "First item", value: "first" },
          { label: "None", value: "none" },
          { label: "All", value: "all" },
        ],
      },
      collapsible: {
        type: "select",
        label: "Collapsible",
        options: [
          { label: "Yes (can close open item)", value: true },
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
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      items: [
        { trigger: "First item", content: "Content for the first item." },
        { trigger: "Second item", content: "Content for the second item." },
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
      fullWidth: false,
      className: "",
      id: "",
    },
    render: (props: Components["Accordion"]) => {
      const accordionItems = (props.items ?? []).map((item, index) => ({
        ...item,
        value: `item-${index}`,
      }));
      return (
        <Accordion
          items={accordionItems}
          type={props.type}
          defaultOpen={props.defaultOpen}
          collapsible={props.collapsible}
          triggerAlign={props.triggerAlign}
          contentAlign={props.contentAlign}
          triggerPadding={props.triggerPadding}
          contentPadding={props.contentPadding}
          showIcon={props.showIcon}
          iconPosition={props.iconPosition}
          rounded={props.rounded}
          variant={props.variant}
          fullWidth={props.fullWidth}
          className={props.className || undefined}
          id={props.id || undefined}
        />
      );
    },
  },
};
