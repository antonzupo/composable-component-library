import { Typography } from "@/components/Typography/Typography";
import type { Components } from "@/puck/types";

type TypographyProps = Components["Typography"];

const typographyVariantOptions: Array<{ label: string; value: TypographyProps["variant"] }> = [
  { label: "Heading 1", value: "h1" },
  { label: "Heading 2", value: "h2" },
  { label: "Heading 3", value: "h3" },
  { label: "Heading 4", value: "h4" },
  { label: "Paragraph", value: "p" },
  { label: "Blockquote", value: "blockquote" },
  { label: "List", value: "list" },
  { label: "Inline code", value: "inline-code" },
  { label: "Lead", value: "lead" },
  { label: "Large", value: "large" },
  { label: "Small", value: "small" },
  { label: "Muted", value: "muted" },
];

export const typographyPuckConfig = {
  Typography: {
    label: "Typography",
    fields: {
      content: {
        type: "textarea",
        label: "Content",
      },
      variant: {
        type: "select",
        label: "Variant",
        options: typographyVariantOptions,
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      content: "Typography content",
      variant: "p" as const,
      className: "",
      id: "",
    } satisfies TypographyProps,
    render: (props: Components["Typography"]) => <Typography {...props} />,
  },
};
