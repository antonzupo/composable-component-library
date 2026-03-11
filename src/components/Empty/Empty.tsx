import * as React from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import {
  Empty as UIEmpty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyContent,
} from "@/components/ui/empty";
import { cn } from "@/lib/utils";

export interface EmptyProps {
  title?: string;
  description?: string;
  /** "default" = no icon styling, "icon" = muted rounded icon container, "avatar" = circular avatar-style container */
  mediaVariant?: "default" | "icon" | "avatar";
  /** Lucide icon name when mediaVariant is "icon" */
  icon?: string;
  /** Image URL when mediaVariant is "avatar" */
  avatarImageUrl?: string;
  /** Optional content (e.g. action button) rendered below the header */
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function Empty({
  title = "No results",
  description,
  mediaVariant = "default",
  icon,
  avatarImageUrl,
  children,
  className,
  id,
}: EmptyProps) {
  const hasContent = children != null && React.Children.count(children) > 0;

  const mediaContent =
    mediaVariant === "icon" && icon ? (
      <DynamicIcon
        name={icon as React.ComponentProps<typeof DynamicIcon>["name"]}
        className="shrink-0 [&_svg]:size-6"
        aria-hidden
      />
    ) : mediaVariant === "avatar" && avatarImageUrl ? (
      <img
        src={avatarImageUrl}
        alt=""
        className="size-full rounded-full object-cover"
      />
    ) : null;

  return (
    <UIEmpty id={id} className={cn(className)}>
      <EmptyHeader>
        <EmptyMedia variant={mediaVariant}>{mediaContent}</EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        {description != null && description !== "" && (
          <EmptyDescription>{description}</EmptyDescription>
        )}
      </EmptyHeader>
      {hasContent && <EmptyContent>{children}</EmptyContent>}
    </UIEmpty>
  );
}
