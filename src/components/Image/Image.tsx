import { cn } from "@/lib/utils";

export type ImageProps = {
  src: string;
  alt: string;
  objectFit: "cover" | "contain" | "fill" | "none";
  align: "left" | "center" | "right";
  rounded: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  id?: string;
};

export function Image({ src, alt, objectFit, align, rounded, className, id }: ImageProps) {
  if (!src) {
    return (
      <div className="flex min-h-[120px] items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-muted-foreground text-sm">
        No image URL
      </div>
    );
  }
  const alignClass = align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "";
  const roundedClass =
    rounded === "none" ? "" : rounded === "sm" ? "rounded-sm" : rounded === "md" ? "rounded-md" : rounded === "lg" ? "rounded-lg" : "rounded-full";
  const objectFitClass =
    objectFit === "cover" ? "object-cover" : objectFit === "contain" ? "object-contain" : objectFit === "fill" ? "object-fill" : "object-none";
  return (
    <div className={cn("w-full", alignClass)}>
      <img
        src={src}
        alt={alt || ""}
        className={cn("max-w-full h-auto", objectFitClass, roundedClass, className)}
        id={id}
      />
    </div>
  );
}
