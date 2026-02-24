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
        getItemSummary: (item: { label: string; href?: string }) => item?.label ?? "Item",
        arrayFields: {
          label: { type: "text", label: "Label" },
          href: { type: "text", label: "Link (optional)" },
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
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
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
