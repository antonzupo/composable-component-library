import * as React from "react";
import { Badge as BaseBadge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";

export type { BadgeProps } from "@/components/ui/badge";
export { badgeVariants } from "@/components/ui/badge";

type UIBadgeVariant = NonNullable<React.ComponentProps<typeof BaseBadge>["variant"]>;

export interface ComposableBadgeProps extends Omit<React.ComponentProps<typeof BaseBadge>, "variant"> {
  variant?: UIBadgeVariant | "ghost";
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

const ghostClassName = "border-transparent bg-transparent hover:bg-accent/50 hover:text-accent-foreground";

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
  variant,
  ...props
}: ComposableBadgeProps) {
  const isGhost = variant === "ghost";
  const uiVariant: UIBadgeVariant =
    variant === "ghost"
      ? "outline"
      : variant === "default" || variant === "secondary" || variant === "destructive" || variant === "outline"
        ? variant
        : "default";
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
        variant={uiVariant}
        className={cn(hasLeftOrRight && "gap-1", isGhost && ghostClassName, className)}
        {...props}
      >
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1 outline-none"
        >
          {content}
        </a>
      </BaseBadge>
    );
  }

  return (
    <BaseBadge
      variant={uiVariant}
      className={cn(hasLeftOrRight && "gap-1", isGhost && ghostClassName, className)}
      {...props}
    >
      {content}
    </BaseBadge>
  );
}

export { Badge };
