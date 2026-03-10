import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu";
import type { Components } from "@/puck/types";

type NavItem = Components["NavigationMenu"]["items"][number];

export const navigationMenuPuckConfig = {
  NavigationMenu: {
    label: "Navigation Menu",
    fields: {
      orientation: {
        type: "radio" as const,
        label: "Orientation",
        options: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
      },
      dir: {
        type: "radio" as const,
        label: "Direction",
        options: [
          { label: "Left to right", value: "ltr" },
          { label: "Right to left", value: "rtl" },
        ],
      },
      delayDuration: {
        type: "number" as const,
        label: "Delay duration (ms)",
        min: 0,
        description: "Delay before opening on hover",
      },
      skipDelayDuration: {
        type: "number" as const,
        label: "Skip delay duration (ms)",
        min: 0,
        description: "Time window to skip delay when moving between items",
      },
      value: {
        type: "text" as const,
        label: "Value (controlled)",
        description: "Controlled open value (leave empty for uncontrolled)",
      },
      defaultValue: {
        type: "text" as const,
        label: "Default value (uncontrolled)",
        description: "Initially open item value",
      },
      items: {
        type: "array" as const,
        label: "Items",
        getItemSummary: (item: NavItem) =>
          item ? `${item.type}: ${item.label || "…"}` : "Item",
        arrayFields: {
          type: {
            type: "radio" as const,
            label: "Type",
            options: [
              { label: "Trigger (dropdown)", value: "trigger" },
              { label: "Link", value: "link" },
            ],
          },
          label: { type: "text", label: "Label" },
          href: {
            type: "text" as const,
            label: "Href",
            description: "Link URL (for link type, or leave empty for trigger)",
          },
          disabled: {
            type: "radio" as const,
            label: "Disabled",
            options: [
              { label: "No", value: false },
              { label: "Yes", value: true },
            ],
          },
          contentLinks: {
            type: "array" as const,
            label: "Content links (trigger only)",
            getItemSummary: (sub: { label?: string; href?: string }) =>
              sub?.label ?? "Link",
            arrayFields: {
              label: { type: "text", label: "Label" },
              href: { type: "text", label: "Href" },
            },
            defaultItemProps: () => ({ label: "", href: "" }),
          },
        },
        defaultItemProps: (): NavItem => ({
          type: "trigger",
          label: "",
          href: "",
          disabled: false,
          contentLinks: [],
        }),
      },
      className: { type: "text", label: "Root class name" },
      listClassName: { type: "text", label: "List class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      orientation: "horizontal" as const,
      dir: "ltr" as const,
      delayDuration: 200,
      skipDelayDuration: 300,
      value: "",
      defaultValue: "",
      items: [
        {
          type: "trigger" as const,
          label: "Getting started",
          href: "",
          disabled: false,
          contentLinks: [
            { label: "Introduction", href: "#" },
            { label: "Installation", href: "#" },
          ],
        },
        {
          type: "trigger" as const,
          label: "Components",
          href: "",
          disabled: false,
          contentLinks: [
            { label: "Accordion", href: "#" },
            { label: "Tabs", href: "#" },
          ],
        },
        {
          type: "link" as const,
          label: "Documentation",
          href: "#",
          disabled: false,
          contentLinks: [],
        },
      ],
      className: "",
      listClassName: "",
      id: "",
    },
    render: (props: Components["NavigationMenu"]) => (
      <NavigationMenu
        orientation={props.orientation}
        dir={props.dir}
        delayDuration={props.delayDuration}
        skipDelayDuration={props.skipDelayDuration}
        value={props.value || undefined}
        defaultValue={props.defaultValue || undefined}
        items={props.items ?? []}
        className={props.className || undefined}
        listClassName={props.listClassName || undefined}
        id={props.id || undefined}
      />
    ),
  },
};
