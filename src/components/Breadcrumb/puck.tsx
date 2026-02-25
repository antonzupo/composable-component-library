import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "atoms";

export const breadcrumbPuckConfig = {
  Breadcrumb: {
    label: "Breadcrumb",
    fields: {
      items: {
        type: "array",
        label: "Items",
        getItemSummary: (item: { label: string; href?: string; node?: string }) =>
          item?.label ? (item.node && item.node !== "default" ? `${item.label} (${item.node})` : item.label) : "Item",
        arrayFields: {
          label: { type: "text", label: "Label" },
          href: { type: "text", label: "Link (optional)" },
          node: {
            type: "select",
            label: "Node (middle items only)",
            options: [
              { label: "Default", value: "default" },
              { label: "Collapsed", value: "collapsed" },
              { label: "Dropdown", value: "dropdown" },
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
        { label: "Products", href: "/products", node: "default" },
        { label: "Category", href: "/category", node: "dropdown" },
        { label: "Current" },
      ],
      separator: "slash" as const,
      className: "",
      id: "",
    },
    render: ({ items, separator, className, id }: Components["Breadcrumb"]) => (
      <Breadcrumb
        items={items}
        separator={separator}
        className={className || undefined}
        id={id || undefined}
      />
    ),
  },
};
