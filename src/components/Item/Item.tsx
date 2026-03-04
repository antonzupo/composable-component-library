import { DynamicIcon } from "lucide-react/dynamic";
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
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type ItemProps = Components["Item"];

type ItemMediaContentProps = {
  mediaVariant: ItemProps["mediaVariant"];
  mediaIcon: string;
  mediaImageSrc: string;
  mediaImageAlt: string;
  mediaAvatarSrc: string;
  mediaAvatarAlt: string;
  mediaAvatarFallback: string;
};

function ItemMediaContent(props: ItemMediaContentProps) {
  const {
    mediaVariant,
    mediaIcon,
    mediaImageSrc,
    mediaImageAlt,
    mediaAvatarSrc,
    mediaAvatarAlt,
    mediaAvatarFallback,
  } = props;
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

const defaultGroupItem = {
  title: "Add items in the list below",
  description: "",
  mediaVariant: "none" as const,
  mediaIcon: "",
  mediaImageSrc: "",
  mediaImageAlt: "",
  mediaAvatarSrc: "",
  mediaAvatarAlt: "",
  mediaAvatarFallback: "?",
};

export function Item(props: ItemProps) {
  const {
    displayMode,
    variant,
    size,
    title,
    description,
    showHeader,
    headerLeft,
    headerRight,
    showFooter,
    footerLeft,
    footerRight,
    useAsLink,
    href,
    openInNewTab,
    items,
    className,
    id,
  } = props;

  if (displayMode === "group") {
    const groupItems =
      items.length > 0 ? items : [defaultGroupItem];
    return (
      <ItemGroup className={cn(className)} id={id || undefined}>
        {groupItems.map((item, i) => (
          <ItemRoot key={i} variant={variant} size={size}>
            <ItemMediaContent {...item} />
            <ItemContent>
              <ItemTitle>{item.title}</ItemTitle>
              {item.description ? (
                <ItemDescription>{item.description}</ItemDescription>
              ) : null}
            </ItemContent>
          </ItemRoot>
        ))}
      </ItemGroup>
    );
  }

  const inner = (
    <>
      <ItemMediaContent {...props} />
      {showHeader && (headerLeft || headerRight) ? (
        <ItemHeader>
          <span>{headerLeft}</span>
          <span>{headerRight}</span>
        </ItemHeader>
      ) : null}
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        {description ? <ItemDescription>{description}</ItemDescription> : null}
      </ItemContent>
      {showFooter && (footerLeft || footerRight) ? (
        <ItemFooter>
          <span>{footerLeft}</span>
          <span>{footerRight}</span>
        </ItemFooter>
      ) : null}
    </>
  );

  const rootProps = {
    variant,
    size,
    className: cn(className),
    id: id || undefined,
  };

  if (useAsLink && href) {
    return (
      <ItemRoot asChild {...rootProps}>
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
        >
          {inner}
        </a>
      </ItemRoot>
    );
  }

  return <ItemRoot {...rootProps}>{inner}</ItemRoot>;
}
