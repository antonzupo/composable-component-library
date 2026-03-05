import { Checkbox as CheckboxRoot } from "@/components/ui/checkbox";
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
  onCheckedChange,
}: CheckboxProps) {
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;
  const isControlled = onCheckedChange !== undefined;
  const content = (
    <>
      <CheckboxRoot
        id={inputId}
        {...(isControlled ? { checked, onCheckedChange } : { defaultChecked: checked })}
        disabled={disabled}
        className={cn(sizeClass[size])}
      />
      {label ? <span className="cursor-pointer font-normal">{label}</span> : null}
    </>
  );
  return label ? (
    <label className={cn("flex items-center gap-2 cursor-pointer", className)}>
      {content}
    </label>
  ) : (
    <div className={cn("flex items-center gap-2", className)}>{content}</div>
  );
}
