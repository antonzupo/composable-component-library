import { Slider as SliderPrimitive } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type SliderProps = Components["Slider"];

export function Slider({
  value,
  min,
  max,
  step,
  disabled,
  className,
  id,
}: SliderProps) {
  return (
    <SliderPrimitive
      defaultValue={[value]}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={cn(className)}
      id={id || undefined}
    />
  );
}
