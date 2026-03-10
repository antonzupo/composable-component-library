import type { ComponentType, Ref } from "react";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ButtonGroup/ButtonGroup";
import type { AreaContentProps, Components } from "@/puck/types";

type ButtonGroupProps = Components["ButtonGroup"];
type ButtonGroupSeparatorProps = Components["ButtonGroupSeparator"];

type PuckRenderProps = { puck?: { dragRef?: Ref<HTMLElement> | null } };

const buttonGroupSlotAllow = ["Button", "ButtonGroupSeparator", "ButtonGroup"] as const;

export const buttonGroupPuckConfig = {
  ButtonGroup: {
    label: "Button group",
    inline: true,
    fields: {
      content: {
        type: "slot" as const,
        label: "Content (drag Button, Button group separator, or nested Button group here)",
        allow: [...buttonGroupSlotAllow],
      },
      orientation: {
        type: "radio" as const,
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
      },
      appearance: {
        type: "radio" as const,
        label: "Appearance",
        options: [
          { label: "Separate (gap between buttons)", value: "separate" },
          { label: "Merged (segmented / radio-group look)", value: "merged" },
        ],
      },
      buttonVariant: {
        type: "select" as const,
        label: "Button variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Secondary", value: "secondary" },
          { label: "Ghost", value: "ghost" },
          { label: "Link", value: "link" },
        ],
      },
      ariaLabel: {
        type: "text" as const,
        label: "Aria label",
      },
      ariaLabelledby: {
        type: "text" as const,
        label: "Aria labelledby (element id)",
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      content: [],
      orientation: "horizontal" as const,
      appearance: "merged" as const,
      buttonVariant: "outline" as const,
      ariaLabel: "",
      ariaLabelledby: "",
      className: "",
      id: "",
    },
    render: ({
      content = [],
      orientation,
      appearance,
      buttonVariant,
      ariaLabel,
      ariaLabelledby,
      className,
      id,
      puck,
    }: ButtonGroupProps & PuckRenderProps) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      return (
        <ButtonGroup
          ref={puck?.dragRef as Ref<HTMLDivElement>}
          orientation={orientation}
          appearance={appearance ?? "separate"}
          buttonVariant={buttonVariant ?? "outline"}
          ariaLabel={ariaLabel}
          ariaLabelledby={ariaLabelledby}
          className={className}
          id={id}
        >
          {Content != null ? (
            <Content className="min-w-[140px]" minEmptyHeight={48} />
          ) : (
            <div className="min-h-[48px] min-w-[140px] rounded-md border border-dashed border-border bg-muted/20" />
          )}
        </ButtonGroup>
      );
    },
  },
  ButtonGroupSeparator: {
    label: "Button group separator",
    inline: true,
    fields: {
      orientation: {
        type: "select" as const,
        label: "Separator orientation",
        options: [
          {
            label: "Vertical (between horizontal buttons)",
            value: "vertical",
          },
          {
            label: "Horizontal (between vertical buttons)",
            value: "horizontal",
          },
        ],
      },
      className: { type: "text", label: "Class name" },
    },
    defaultProps: {
      orientation: "vertical" as const,
      className: "",
    },
    render: ({ orientation, className, puck }: ButtonGroupSeparatorProps & PuckRenderProps) => (
      <ButtonGroupSeparator
        ref={puck?.dragRef as Ref<HTMLDivElement>}
        orientation={orientation}
        className={className}
      />
    ),
  },
};
