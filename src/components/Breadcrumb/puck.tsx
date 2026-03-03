import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import type { Components } from "@/puck/types";

type BreadcrumbProps = Components["Breadcrumb"];

export const breadcrumbPuckConfig = {
  Breadcrumb: {
    label: "Breadcrumb",
    fields: {
      items: {
        type: "array",
        label: "Items",
        getItemSummary: (item: { label: string; href?: string; node?: string }) =>
          item?.label || "Item",
        arrayFields: {
          label: { type: "text", label: "Label" },
          href: { type: "text", label: "Link (optional)" },
          node: {
            type: "select",
            label: "Node type",
            options: [
              { label: "Default", value: "default" },
              { label: "Dropdown", value: "dropdown" },
              { label: "Collapsed", value: "collapsed" },
            ],
          },
        },
      },
      separator: {
        type: "select",
        label: "Separator",
        options: [
          { label: "Slash", value: "slash" },
          { label: "Chevron", value: "chevron" },
          { label: "Dot", value: "dot" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      items: [
        { label: "Home", href: "/", node: "default" },
        { label: "Page", href: "/page", node: "default" },
        { label: "Current" },
      ],
      separator: "chevron" as const,
      className: "",
      id: "",
    },
    render: (props: BreadcrumbProps) => <Breadcrumb {...props} />,
  },
};
