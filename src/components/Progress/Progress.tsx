import { Progress as BaseProgress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

type ProgressProps = Components["Progress"];

function Progress({
  value,
  max,
  indeterminate,
  valueLabel,
  className,
  id,
}: ProgressProps) {
  const getValueLabel =
    valueLabel?.trim() !== ""
      ? () => valueLabel
      : undefined;

  return (
    <BaseProgress
      value={indeterminate ? null : value}
      max={max}
      getValueLabel={getValueLabel}
      className={cn(className)}
      id={id || undefined}
    />
  );
}

export { Progress };
