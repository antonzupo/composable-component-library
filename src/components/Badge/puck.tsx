import { Badge } from "@/components/Badge/Badge";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "atoms";

export const badgePuckConfig = {
  Badge: {
    label: "Badge",
    fields: {
      text: { type: "text", label: "Text" },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Secondary", value: "secondary" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Ghost", value: "ghost" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      text: "Badge",
      variant: "default" as const,
      className: "",
      id: "",
    },
    render: ({ text, variant, className, id }: Components["Badge"]) => (
      <Badge variant={variant} className={className || undefined} id={id || undefined}>
        {text}
      </Badge>
    ),
  },
};
