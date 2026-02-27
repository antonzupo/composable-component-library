import * as React from "react";
import { Badge as BaseBadge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";

export type { BadgeProps } from "@/components/ui/badge";
export { badgeVariants } from "@/components/ui/badge";

export interface ComposableBadgeProps extends React.ComponentProps<typeof BaseBadge> {
  showIcon?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  showSpinner?: boolean;
  spinnerPosition?: "left" | "right";
  useAsLink?: boolean;
  href?: string;
  openInNewTab?: boolean;
}

const BADGE_ICON_SIZE = 12;

function Badge({
  showIcon,
  icon,
  iconPosition = "left",
  showSpinner,
  spinnerPosition = "right",
  useAsLink,
  href,
  openInNewTab,
  children,
  className,
  ...props
}: ComposableBadgeProps) {
  const showIconNode = Boolean(showIcon && icon);
  const iconEl = showIconNode ? (
    <DynamicIcon
      name={icon as React.ComponentProps<typeof DynamicIcon>["name"]}
      size={BADGE_ICON_SIZE}
      className="shrink-0"
      aria-hidden
    />
  ) : null;

  const spinnerEl = showSpinner ? (
    <Spinner className="size-3 shrink-0" aria-hidden />
  ) : null;

  const hasLeftOrRight = showIconNode || showSpinner;

  const content = (
    <>
      {iconPosition === "left" && iconEl}
      {spinnerPosition === "left" && spinnerEl}
      {children}
      {spinnerPosition === "right" && spinnerEl}
      {iconPosition === "right" && iconEl}
    </>
  );

  if (useAsLink && href) {
    return (
      <BaseBadge
        asChild
        className={cn(hasLeftOrRight && "gap-1", className)}
        {...props}
      >
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      </BaseBadge>
    );
  }

  return (
    <BaseBadge className={cn(hasLeftOrRight && "gap-1", className)} {...props}>
      {content}
    </BaseBadge>
  );
}

export { Badge };
