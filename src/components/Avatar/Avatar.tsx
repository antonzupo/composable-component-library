import { Avatar as AvatarRoot, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

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
  className,
  id,
}: AvatarProps) {
  return (
    <AvatarRoot
      className={cn(sizeClass[size], roundedClass[rounded], className)}
      id={id || undefined}
    >
      <AvatarImage src={src || undefined} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarRoot>
  );
}
