import { Card, CardContent, CardHeader } from "@/components/Card/Card";
import { Skeleton as BaseSkeleton } from "@/components/ui/skeleton";
import type { Components } from "@/puck/types";

type SkeletonProps = Components["Skeleton"];

const skeletonVariants = {
  avatar: () => (
    <div className="flex w-fit items-center gap-4">
      <BaseSkeleton className="size-10 shrink-0 rounded-full" />
      <div className="grid gap-2">
        <BaseSkeleton className="h-4 w-[150px]" />
        <BaseSkeleton className="h-4 w-[100px]" />
      </div>
    </div>
  ),
  card: () => (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <BaseSkeleton className="h-4 w-2/3" />
        <BaseSkeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <BaseSkeleton className="aspect-video w-full" />
      </CardContent>
    </Card>
  ),
  text: () => (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <BaseSkeleton className="h-4 w-full" />
      <BaseSkeleton className="h-4 w-full" />
      <BaseSkeleton className="h-4 w-3/4" />
    </div>
  ),
  form: () => (
    <div className="flex w-full max-w-xs flex-col gap-7">
      <div className="flex flex-col gap-3">
        <BaseSkeleton className="h-4 w-20" />
        <BaseSkeleton className="h-8 w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <BaseSkeleton className="h-4 w-24" />
        <BaseSkeleton className="h-8 w-full" />
      </div>
      <BaseSkeleton className="h-8 w-24" />
    </div>
  ),
  table: () => (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="flex gap-4" key={index}>
          <BaseSkeleton className="h-4 flex-1" />
          <BaseSkeleton className="h-4 w-24" />
          <BaseSkeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  ),
} as const;

function Skeleton({
  variant = "single",
  className = "",
  id = "",
  width = "",
  height = "",
  style: styleJson = "",
  role = "",
  tabIndex = "",
  ariaLabel = "",
}: SkeletonProps) {
  if (variant !== "single") {
    const Preset = skeletonVariants[variant];
    return Preset();
  }

  let style: React.CSSProperties | undefined;
  if (width || height || styleJson) {
    style = { ...(width && { width }), ...(height && { height }) };
    if (styleJson) {
      try {
        const parsed = JSON.parse(styleJson) as Record<string, string | number>;
        style = { ...style, ...parsed };
      } catch {
        // ignore invalid JSON
      }
    }
  }

  const tabIndexNum =
    tabIndex === "" || tabIndex === undefined ? undefined : Number(tabIndex);
  const resolvedTabIndex =
    tabIndexNum !== undefined && !Number.isNaN(tabIndexNum)
      ? tabIndexNum
      : undefined;

  return (
    <BaseSkeleton
      className={className || undefined}
      id={id || undefined}
      style={style}
      role={role || undefined}
      tabIndex={resolvedTabIndex}
      aria-label={ariaLabel || undefined}
    />
  );
}

export { Skeleton };
export { skeletonVariants };
