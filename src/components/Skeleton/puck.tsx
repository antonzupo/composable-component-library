import { Skeleton } from "@/components/Skeleton/Skeleton";
import type { Components } from "@/puck/types";

type SkeletonProps = Components["Skeleton"];

export const skeletonPuckConfig = {
  Skeleton: {
    label: "Skeleton",
    fields: {
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Single", value: "single" },
          { label: "Avatar", value: "avatar" },
          { label: "Card", value: "card" },
          { label: "Text", value: "text" },
          { label: "Form", value: "form" },
          { label: "Table", value: "table" },
        ],
        description: "Preset layout or a single skeleton block (Single uses the props below).",
      },
      className: {
        type: "text",
        label: "Class name",
        description: "Additional CSS classes (e.g. h-4 w-[250px] for dimensions).",
      },
      id: {
        type: "text",
        label: "ID",
        description: "HTML id attribute.",
      },
      width: {
        type: "text",
        label: "Width",
        description: "Inline width (e.g. 250px, 100%, 1rem).",
      },
      height: {
        type: "text",
        label: "Height",
        description: "Inline height (e.g. 20px, 2rem).",
      },
      style: {
        type: "text",
        label: "Style (JSON)",
        description:
          'Optional inline styles as JSON object, e.g. {"minHeight": "20px", "borderRadius": "4px"}.',
      },
      role: {
        type: "text",
        label: "Role",
        description: "ARIA role attribute.",
      },
      tabIndex: {
        type: "number",
        label: "Tab index",
        description:
          "Tab order for keyboard navigation. Leave empty to omit (recommended for decorative skeletons).",
      },
      ariaLabel: {
        type: "text",
        label: "Aria label",
        description: "Accessible label for screen readers.",
      },
    },
    defaultProps: {
      variant: "single",
      className: "",
      id: "",
      width: "100%",
      height: "1rem",
      style: "",
      role: "",
      tabIndex: "" as const,
      ariaLabel: "",
    } satisfies SkeletonProps,
    render: (props: SkeletonProps) => <Skeleton {...props} />,
  },
};
