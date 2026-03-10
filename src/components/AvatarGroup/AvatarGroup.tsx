import {
  AvatarGroup as AvatarGroupRoot,
  AvatarGroupCount as AvatarGroupCountRoot,
} from "@/components/ui/avatar";
import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

type AvatarGroupProps = Omit<Components["AvatarGroup"], "content"> & {
  children?: React.ReactNode;
};

const countSizeClass = {
  sm: "h-8 w-8 text-[10px]",
  md: "h-10 w-10 text-xs",
  lg: "h-14 w-14 text-sm",
};

const COUNT_ICON_SIZE = 12;

export function AvatarGroup({
  showCount = false,
  count = "",
  countIcon = "",
  countDisplay = "count",
  countSize = "md",
  className,
  id,
  children,
}: AvatarGroupProps) {
  const display = countDisplay === "icon" || countDisplay === "count" ? countDisplay : "count";
  const showIcon = display === "icon";
  const showCountValue = display === "count";

  return (
    <AvatarGroupRoot
      className={cn(className)}
      id={id || undefined}
    >
      {children}
      {showCount && (
        <AvatarGroupCountRoot
          className={cn(countSizeClass[countSize])}
        >
          {showIcon && countIcon ? (
            <DynamicIcon
              name={countIcon as React.ComponentProps<typeof DynamicIcon>["name"]}
              size={COUNT_ICON_SIZE}
              className="shrink-0 [&_svg]:size-3"
              aria-hidden
            />
          ) : null}
          {showCountValue && count ? <span>{count}</span> : null}
        </AvatarGroupCountRoot>
      )}
    </AvatarGroupRoot>
  );
}
