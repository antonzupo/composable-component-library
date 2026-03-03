import type { ComponentType } from "react";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ButtonGroup/ButtonGroup";
import type { AreaContentProps, Components } from "@/puck/types";

type ButtonGroupProps = Components["ButtonGroup"];
type ButtonGroupSeparatorProps = Components["ButtonGroupSeparator"];

export const buttonGroupPuckConfig = {
  ButtonGroup: {
    label: "Button group",
    fields: {
      content: {
        type: "slot",
        label: "Content (drag Button, Button group separator, or nested Button group here)",
      },
      orientation: {
        type: "select",
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
      },
      ariaLabel: {
        type: "text",
        label: "Aria label",
      },
      ariaLabelledby: {
        type: "text",
        label: "Aria labelledby (element id)",
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      content: [],
      orientation: "horizontal" as const,
      ariaLabel: "",
      ariaLabelledby: "",
      className: "",
      id: "",
    },
    render: ({
      content = [],
      orientation,
      ariaLabel,
      ariaLabelledby,
      className,
      id,
    }: ButtonGroupProps) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      return (
        <ButtonGroup
          orientation={orientation}
          aria-label={ariaLabel || undefined}
          aria-labelledby={ariaLabelledby || undefined}
          className={className || undefined}
          id={id || undefined}
        >
          <div className="contents min-w-0">
            {Content != null ? (
              <Content className="min-w-[140px]" minEmptyHeight={48} />
            ) : (
              <div className="min-h-[48px] min-w-[140px] rounded-md border border-dashed border-border bg-muted/20" />
            )}
          </div>
        </ButtonGroup>
      );
    },
  },
  ButtonGroupSeparator: {
    label: "Button group separator",
    fields: {
      orientation: {
        type: "select",
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
    render: ({ orientation, className }: ButtonGroupSeparatorProps) => (
      <ButtonGroupSeparator
        orientation={orientation}
        className={className || undefined}
      />
    ),
  },
};
