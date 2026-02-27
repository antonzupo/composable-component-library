import type { ComponentType } from "react";
import { AspectRatio as AspectRatioRoot } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

type AspectRatioProps = Components["AspectRatio"];

const ratioMap = {
  "1/1": 1 / 1,
  "4/3": 4 / 3,
  "3/4": 3 / 4,
  "16/9": 16 / 9,
  "9/16": 9 / 16,
  "21/9": 21 / 9,
  "9/21": 9 / 21,
};

const roundedClass = { none: "rounded-none", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", full: "rounded-full" };
const objectFitClass = { cover: "object-cover", contain: "object-contain", fill: "object-fill", none: "object-none" };

export function AspectRatio({
  ratio = "16/9",
  objectFit = "cover",
  rounded = "none",
  content,
  className,
  id,
}: AspectRatioProps) {
  const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
  return (
    <AspectRatioRoot
      ratio={ratioMap[ratio]}
      className={cn(roundedClass[rounded], "overflow-hidden", className)}
      id={id || undefined}
    >
      {Content ? (
        <div className={cn("h-full w-full", objectFitClass[objectFit])}>
          <Content minEmptyHeight={120} />
        </div>
      ) : (
        <div className={cn("flex h-full w-full items-center justify-center bg-muted", objectFitClass[objectFit])}>
          <span className="text-muted-foreground text-sm">Add content</span>
        </div>
      )}
    </AspectRatioRoot>
  );
}
