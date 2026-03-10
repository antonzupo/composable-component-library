import {
  Avatar as AvatarRoot,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

const BADGE_ICON_SIZE = 8;

const badgeBaseClass =
  "absolute h-3 w-3 rounded-full border-2 border-background";

const badgePositionClass = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
};

const badgeVariantClass: Record<Components["Avatar"]["badgeVariant"], string> = {
  default: "bg-green-500 text-white",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  outline: "bg-background text-foreground",
  ghost: "bg-muted text-muted-foreground",
};

type AvatarProps = Components["Avatar"];

const sizeClass = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

const roundedClass = {
  full: "rounded-full",
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
};

export function Avatar({
  src,
  alt = "",
  fallback = "?",
  size = "md",
  rounded = "full",
  showBadge = false,
  badgeContent = "",
  badgeIcon = "",
  badgePosition = "top-right",
  badgeVariant = "default",
  badgeColorClass = "",
  className,
  id,
}: AvatarProps) {
  const hasBadgeContent = Boolean(badgeContent);
  const hasBadgeIcon = Boolean(badgeIcon);
  const badgeHasContent = hasBadgeContent || hasBadgeIcon;
  const badgeColor =
    badgeColorClass.trim() || badgeVariantClass[badgeVariant];

  return (
    <AvatarRoot
      className={cn(sizeClass[size], roundedClass[rounded], className)}
      id={id || undefined}
    >
      <AvatarImage
        src={src || undefined}
        alt={alt}
        className={roundedClass[rounded]}
      />
      <AvatarFallback className={roundedClass[rounded]}>{fallback}</AvatarFallback>
      {showBadge && (
        <AvatarBadge
          className={cn(
            badgeBaseClass,
            badgePositionClass[badgePosition],
            badgeColor,
            hasBadgeIcon &&
              "flex items-center justify-center p-0 [&_svg]:size-2",
            hasBadgeContent &&
              "flex h-5 min-h-5 w-5 min-w-5 items-center justify-center gap-0.5 p-0 text-[10px]"
          )}
        >
          {hasBadgeIcon && (
            <DynamicIcon
              name={badgeIcon as React.ComponentProps<typeof DynamicIcon>["name"]}
              size={BADGE_ICON_SIZE}
              className="shrink-0"
              aria-hidden
            />
          )}
          {badgeContent}
        </AvatarBadge>
      )}
    </AvatarRoot>
  );
}
