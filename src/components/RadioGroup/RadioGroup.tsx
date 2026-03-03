import * as React from "react";
import { RadioGroup as RadioGroupRoot, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { RadioGroupOption } from "@/data/radioGroup";

export interface RadioGroupProps {
  options: RadioGroupOption[];
  defaultValue?: string;
  name?: string;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  required?: boolean;
  className?: string;
  id?: string;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupRoot>,
  RadioGroupProps
>(
  (
    {
      options,
      defaultValue,
      name,
      disabled = false,
      orientation = "vertical",
      required = false,
      className,
      id,
    },
    ref
  ) => {
    return (
      <RadioGroupRoot
        ref={ref}
        defaultValue={defaultValue}
        name={name}
        disabled={disabled}
        orientation={orientation}
        required={required}
        className={cn(
          "grid gap-2",
          orientation === "horizontal" && "grid-flow-col",
          className
        )}
        id={id}
      >
        {options.map((opt) => (
          <div
            key={opt.value}
            className={cn(
              "flex items-center gap-2",
              orientation === "horizontal" && "flex-shrink-0"
            )}
          >
            <RadioGroupItem
              value={opt.value}
              id={id ? `${id}-${opt.value}` : undefined}
              disabled={opt.disabled}
            />
            <Label
              htmlFor={id ? `${id}-${opt.value}` : undefined}
              className="cursor-pointer font-normal"
            >
              {opt.label}
            </Label>
          </div>
        ))}
      </RadioGroupRoot>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
