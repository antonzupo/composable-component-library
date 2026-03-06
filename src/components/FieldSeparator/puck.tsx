import { FieldSeparator } from "@/components/FieldSeparator/FieldSeparator";
import type { Components } from "@/puck/types";

export const fieldSeparatorPuckConfig = {
  FieldSeparator: {
    label: "Field Separator",
    fields: {
      label: { type: "text", label: "Label (optional)" },
      verticalSpace: {
        type: "select",
        label: "Up / down space",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      label: "",
      verticalSpace: "md" as const,
      className: "",
      id: "",
    },
    render: ({
      label,
      verticalSpace,
      className,
      id,
    }: Components["FieldSeparator"]) => (
      <FieldSeparator
        label={label || undefined}
        verticalSpace={verticalSpace}
        className={className || undefined}
        id={id || undefined}
      />
    ),
  },
};
