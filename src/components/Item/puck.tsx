import { DynamicIcon, iconNames } from "lucide-react/dynamic";
import {
  Item as ItemRoot,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
} from "@/components/ui/item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

type ItemMediaProps = {
  mediaVariant: Components["Item"]["mediaVariant"];
  mediaIcon: string;
  mediaImageSrc: string;
  mediaImageAlt: string;
  mediaAvatarSrc: string;
  mediaAvatarAlt: string;
  mediaAvatarFallback: string;
};

const lucideIconOptions = [
  { label: "None", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

function ItemMediaContent(props: ItemMediaProps) {
  const { mediaVariant, mediaIcon, mediaImageSrc, mediaImageAlt, mediaAvatarSrc, mediaAvatarAlt, mediaAvatarFallback } = props;
  if (mediaVariant === "icon" && mediaIcon) {
    return (
      <ItemMedia variant="icon">
        <DynamicIcon name={mediaIcon as never} />
      </ItemMedia>
    );
  }
  if (mediaVariant === "image" && (mediaImageSrc || mediaImageAlt)) {
    return (
      <ItemMedia variant="image">
        <img src={mediaImageSrc || ""} alt={mediaImageAlt || ""} />
      </ItemMedia>
    );
  }
  if (mediaVariant === "avatar") {
    return (
      <ItemMedia variant="default">
        <Avatar>
          <AvatarImage src={mediaAvatarSrc || undefined} alt={mediaAvatarAlt || ""} />
          <AvatarFallback>{mediaAvatarFallback || "?"}</AvatarFallback>
        </Avatar>
      </ItemMedia>
    );
  }
  return null;
}

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
    },
    render: (props: Components["Item"]) => {
      if (props.displayMode === "group") {
        const items = props.items.length > 0 ? props.items : [{ title: "Add items in the list below", description: "", mediaVariant: "none" as const, mediaIcon: "", mediaImageSrc: "", mediaImageAlt: "", mediaAvatarSrc: "", mediaAvatarAlt: "", mediaAvatarFallback: "?" }];
        return (
          <ItemGroup className={props.className || undefined} id={props.id || undefined}>
            {items.map((item, i) => (
              <ItemRoot key={i} variant={props.variant} size={props.size}>
                <ItemMediaContent {...item} />
                <ItemContent>
                  <ItemTitle>{item.title}</ItemTitle>
                  {item.description ? <ItemDescription>{item.description}</ItemDescription> : null}
                </ItemContent>
              </ItemRoot>
            ))}
          </ItemGroup>
        );
      }
      const inner = (
        <>
          <ItemMediaContent {...props} />
          {props.showHeader && (props.headerLeft || props.headerRight) ? (
            <ItemHeader>
              <span>{props.headerLeft}</span>
              <span>{props.headerRight}</span>
            </ItemHeader>
          ) : null}
          <ItemContent>
            <ItemTitle>{props.title}</ItemTitle>
            {props.description ? <ItemDescription>{props.description}</ItemDescription> : null}
          </ItemContent>
          {props.showFooter && (props.footerLeft || props.footerRight) ? (
            <ItemFooter>
              <span>{props.footerLeft}</span>
              <span>{props.footerRight}</span>
            </ItemFooter>
          ) : null}
        </>
      );
      const itemProps = {
        variant: props.variant,
        size: props.size,
        className: props.className || undefined,
        id: props.id || undefined,
      };
      if (props.useAsLink && props.href) {
        return (
          <ItemRoot asChild {...itemProps}>
            <a
              href={props.href}
              target={props.openInNewTab ? "_blank" : undefined}
              rel={props.openInNewTab ? "noopener noreferrer" : undefined}
            >
              {inner}
            </a>
          </ItemRoot>
        );
      }
      return <ItemRoot {...itemProps}>{inner}</ItemRoot>;
    },
  },
};
