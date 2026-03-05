import { Switch as SwitchRoot } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type SwitchProps = Components["Switch"];

const sizeClass = {
  sm: "h-4 w-7 [&>span]:h-3 [&>span]:w-3 data-[state=checked]:[&>span]:translate-x-3",
  default: "h-5 w-9 [&>span]:h-4 [&>span]:w-4 data-[state=checked]:[&>span]:translate-x-4",
  lg: "h-6 w-11 [&>span]:h-5 [&>span]:w-5 data-[state=checked]:[&>span]:translate-x-5",
};

export function Switch({
  label = "",
  checked = false,
  disabled = false,
  size = "default",
  className,
  id,
  onCheckedChange,
}: SwitchProps) {
  const inputId = id || `switch-${Math.random().toString(36).slice(2, 9)}`;
  const isControlled = onCheckedChange !== undefined;
  return (
    <div className={cn("flex items-center gap-2", className)} id={id || undefined}>
      <SwitchRoot
        id={inputId}
        {...(isControlled
          ? { checked, onCheckedChange }
          : { defaultChecked: checked })}
        disabled={disabled}
        className={cn(sizeClass[size])}
      />
      {label ? (
        <Label htmlFor={inputId} className="cursor-pointer font-normal">
          {label}
        </Label>
      ) : null}
    </div>
  );
}
