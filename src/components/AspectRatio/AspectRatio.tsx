import * as React from "react";
import { cn } from "@/lib/utils";

const ratioMap: Record<string, number> = {
  "1/1": 1,
  "4/3": 4 / 3,
  "3/4": 3 / 4,
  "16/9": 16 / 9,
  "9/16": 9 / 16,
  "21/9": 21 / 9,
  "9/21": 9 / 21,
};

const roundedClass = (r: string) =>
  r === "none" ? "rounded-none" : r === "sm" ? "rounded-sm" : r === "md" ? "rounded-md" : r === "lg" ? "rounded-lg" : "rounded-full";

export type AspectRatioProps = {
  ratio: keyof typeof ratioMap;
  objectFit?: "cover" | "contain" | "fill" | "none";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

const objectFitImgClass = (o: string) =>
  o === "cover" ? "[&_img]:object-cover" : o === "contain" ? "[&_img]:object-contain" : o === "fill" ? "[&_img]:object-fill" : "[&_img]:object-none";

export function AspectRatio({
  ratio,
  objectFit = "cover",
  rounded = "none",
  className,
  id,
  children,
}: AspectRatioProps) {
  const value = ratioMap[ratio] ?? 16 / 9;
  return (
    <div
      className={cn("w-full overflow-hidden", roundedClass(rounded), className)}
      id={id}
      style={{ aspectRatio: value }}
    >
      <div className={cn("flex h-full w-full items-center justify-center overflow-hidden bg-muted", objectFitImgClass(objectFit))}>
        {children ? (
          <div className={cn("size-full [&>img]:size-full", objectFitImgClass(objectFit))}>
            {children}
          </div>
        ) : (
          <span className="text-muted-foreground text-sm">Content</span>
        )}
      </div>
    </div>
  );
}
