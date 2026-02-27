import { Checkbox as CheckboxRoot } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

type CheckboxProps = Components["Checkbox"];

const sizeClass = {
  sm: "h-3 w-3",
  default: "h-4 w-4",
  lg: "h-5 w-5",
};

export function Checkbox({
  label = "",
  checked = false,
  disabled = false,
  size = "default",
  className,
  id,
}: CheckboxProps) {
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <div className={cn("flex items-center gap-2", className)} id={id || undefined}>
      <CheckboxRoot id={inputId} checked={checked} disabled={disabled} className={cn(sizeClass[size])} />
      {label ? <Label htmlFor={inputId} className="cursor-pointer font-normal">{label}</Label> : null}
    </div>
  );
}
