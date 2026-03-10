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

const baseFields = {
  displayMode: {
    type: "radio" as const,
    label: "Display",
    options: [
      { label: "Single item", value: "single" },
      { label: "Group of items", value: "group" },
    ],
  },
  variant: {
    type: "select" as const,
    label: "Variant",
    options: [
      { label: "Default", value: "default" },
      { label: "Outline", value: "outline" },
      { label: "Muted", value: "muted" },
    ],
  },
  size: {
    type: "radio" as const,
    label: "Size",
    options: [
      { label: "Default", value: "default" },
      { label: "Small", value: "sm" },
    ],
  },
  title: { type: "text" as const, label: "Title" },
  description: { type: "textarea" as const, label: "Description" },
  mediaVariant: {
    type: "select" as const,
    label: "Media",
    options: [...mediaVariantOptions],
  },
  mediaIcon: {
    type: "select" as const,
    label: "Icon (Lucide)",
    options: lucideIconOptions,
  },
  mediaImageSrc: { type: "text" as const, label: "Image URL" },
  mediaImageAlt: { type: "text" as const, label: "Image alt text" },
  mediaAvatarSrc: { type: "text" as const, label: "Avatar image URL" },
  mediaAvatarAlt: { type: "text" as const, label: "Avatar alt text" },
  mediaAvatarFallback: { type: "text" as const, label: "Avatar fallback (e.g. initials)" },
  showHeader: {
    type: "radio" as const,
    label: "Show header",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  headerLeft: { type: "text" as const, label: "Header (left)" },
  headerRight: { type: "text" as const, label: "Header (right)" },
  useAsLink: {
    type: "radio" as const,
    label: "Render as link",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  href: { type: "text" as const, label: "Link URL" },
  openInNewTab: {
    type: "radio" as const,
    label: "Open in new tab",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  showFooter: {
    type: "radio" as const,
    label: "Show footer",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  footerLeft: { type: "text" as const, label: "Footer (left)" },
  footerRight: { type: "text" as const, label: "Footer (right)" },
  items: {
    type: "array" as const,
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
  className: { type: "text" as const, label: "Class name" },
  id: { type: "text" as const, label: "ID" },
};

export const itemPuckConfig = {
  Item: {
    label: "Item",
    resolveFields: (data: { props: ItemProps }) => {
      const showHeader = data.props.showHeader === true;
      const useAsLink = data.props.useAsLink === true;
      const showFooter = data.props.showFooter === true;
      return {
        displayMode: baseFields.displayMode,
        variant: baseFields.variant,
        size: baseFields.size,
        title: baseFields.title,
        description: baseFields.description,
        mediaVariant: baseFields.mediaVariant,
        mediaIcon: baseFields.mediaIcon,
        mediaImageSrc: baseFields.mediaImageSrc,
        mediaImageAlt: baseFields.mediaImageAlt,
        mediaAvatarSrc: baseFields.mediaAvatarSrc,
        mediaAvatarAlt: baseFields.mediaAvatarAlt,
        mediaAvatarFallback: baseFields.mediaAvatarFallback,
        showHeader: baseFields.showHeader,
        ...(showHeader ? { headerLeft: baseFields.headerLeft, headerRight: baseFields.headerRight } : {}),
        useAsLink: baseFields.useAsLink,
        ...(useAsLink ? { href: baseFields.href, openInNewTab: baseFields.openInNewTab } : {}),
        showFooter: baseFields.showFooter,
        ...(showFooter ? { footerLeft: baseFields.footerLeft, footerRight: baseFields.footerRight } : {}),
        items: baseFields.items,
        className: baseFields.className,
        id: baseFields.id,
      };
    },
    fields: baseFields,
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
