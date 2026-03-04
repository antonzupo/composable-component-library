import { iconNames } from "lucide-react/dynamic";
import { Item } from "@/components/Item/Item";
import type { Components } from "@/puck/types";

type ItemProps = Components["Item"];

const lucideIconOptions = [
  { label: "None", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

const mediaVariantOptions = [
  { label: "None", value: "none" },
  { label: "Icon", value: "icon" },
  { label: "Image", value: "image" },
  { label: "Avatar", value: "avatar" },
] as const;

const itemArrayFields = {
  title: { type: "text" as const, label: "Title" },
  description: { type: "textarea" as const, label: "Description" },
  mediaVariant: {
    type: "select" as const,
    label: "Media",
    options: [...mediaVariantOptions],
  },
  mediaIcon: { type: "select" as const, label: "Icon (Lucide)", options: lucideIconOptions },
  mediaImageSrc: { type: "text" as const, label: "Image URL" },
  mediaImageAlt: { type: "text" as const, label: "Image alt text" },
  mediaAvatarSrc: { type: "text" as const, label: "Avatar image URL" },
  mediaAvatarAlt: { type: "text" as const, label: "Avatar alt text" },
  mediaAvatarFallback: { type: "text" as const, label: "Avatar fallback" },
};

export const itemPuckConfig = {
  Item: {
    label: "Item",
    fields: {
      displayMode: {
        type: "select",
        label: "Display",
        options: [
          { label: "Single item", value: "single" },
          { label: "Group of items", value: "group" },
        ],
      },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Outline", value: "outline" },
          { label: "Muted", value: "muted" },
        ],
      },
      size: {
        type: "select",
        label: "Size",
        options: [
          { label: "Default", value: "default" },
          { label: "Small", value: "sm" },
        ],
      },
      title: { type: "text", label: "Title" },
      description: { type: "textarea", label: "Description" },
      mediaVariant: {
        type: "select",
        label: "Media",
        options: [...mediaVariantOptions],
      },
      mediaIcon: {
        type: "select",
        label: "Icon (Lucide)",
        options: lucideIconOptions,
      },
      mediaImageSrc: { type: "text", label: "Image URL" },
      mediaImageAlt: { type: "text", label: "Image alt text" },
      mediaAvatarSrc: { type: "text", label: "Avatar image URL" },
      mediaAvatarAlt: { type: "text", label: "Avatar alt text" },
      mediaAvatarFallback: { type: "text", label: "Avatar fallback (e.g. initials)" },
      showHeader: {
        type: "radio",
        label: "Show header",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      headerLeft: { type: "text", label: "Header (left)" },
      headerRight: { type: "text", label: "Header (right)" },
      useAsLink: {
        type: "radio",
        label: "Render as link",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      href: { type: "text", label: "Link URL" },
      openInNewTab: {
        type: "radio",
        label: "Open in new tab",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      showFooter: {
        type: "radio",
        label: "Show footer",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      footerLeft: { type: "text", label: "Footer (left)" },
      footerRight: { type: "text", label: "Footer (right)" },
      items: {
        type: "array",
        label: "Items in group",
        getItemSummary: (item: { title?: string }) => item?.title || "Item",
        arrayFields: itemArrayFields,
        defaultItemProps: () => ({
          title: "Item",
          description: "",
          mediaVariant: "none" as const,
          mediaIcon: "",
          mediaImageSrc: "",
          mediaImageAlt: "",
          mediaAvatarSrc: "",
          mediaAvatarAlt: "",
          mediaAvatarFallback: "?",
        }),
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      displayMode: "single" as const,
      variant: "default" as const,
      size: "default" as const,
      title: "Item title",
      description: "",
      mediaVariant: "none" as const,
      mediaIcon: "",
      mediaImageSrc: "",
      mediaImageAlt: "",
      mediaAvatarSrc: "",
      mediaAvatarAlt: "",
      mediaAvatarFallback: "?",
      showHeader: false,
      headerLeft: "",
      headerRight: "",
      useAsLink: false,
      href: "",
      openInNewTab: false,
      showFooter: false,
      footerLeft: "",
      footerRight: "",
      items: [],
      className: "",
      id: "",
    } satisfies ItemProps,
    render: (props: ItemProps) => <Item {...props} />,
  },
};
