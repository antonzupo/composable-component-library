import * as React from "react";
import { cn } from "@/lib/utils";

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((s) => s[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const sizeClass = (s: string) =>
  s === "sm" ? "size-8 text-xs" : s === "md" ? "size-10 text-sm" : "size-12 text-base";

const roundedClass = (r: string) =>
  r === "full" ? "rounded-full" : r === "sm" ? "rounded-sm" : r === "md" ? "rounded-md" : r === "lg" ? "rounded-lg" : "rounded-full";

export type AvatarProps = {
  src?: string | null;
  alt?: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "none" | "sm" | "md" | "lg";
  className?: string;
  id?: string;
};

export function Avatar({ src, alt = "", fallback, size = "md", rounded = "full", className, id }: AvatarProps) {
  const initials = getInitials(fallback || "?");
  const [imgError, setImgError] = React.useState(false);
  const showImg = src && !imgError;

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden bg-muted font-medium text-muted-foreground",
        sizeClass(size),
        roundedClass(rounded),
        className
      )}
      id={id}
    >
      {showImg ? (
        <img
          src={src}
          alt={alt}
          className="size-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span aria-hidden>{initials}</span>
      )}
    </span>
  );
}
