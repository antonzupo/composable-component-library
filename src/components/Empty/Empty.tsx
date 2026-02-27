"use client";

import * as React from "react";
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
  /** "default" = no icon styling, "icon" = muted rounded icon container */
  mediaVariant?: "default" | "icon";
  /** Optional content (e.g. action button) rendered below the header */
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function Empty({
  title = "No results",
  description,
  mediaVariant = "default",
  children,
  className,
  id,
}: EmptyProps) {
  const hasContent = children != null && React.Children.count(children) > 0;

  return (
    <UIEmpty id={id} className={cn(className)}>
      <EmptyHeader>
        <EmptyMedia variant={mediaVariant} />
        <EmptyTitle>{title}</EmptyTitle>
        {description != null && description !== "" && (
          <EmptyDescription>{description}</EmptyDescription>
        )}
      </EmptyHeader>
      {hasContent && <EmptyContent>{children}</EmptyContent>}
    </UIEmpty>
  );
}
