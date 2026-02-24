import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  {
    variants: {
      size: {
        default: "h-4 w-4",
        sm: "h-3.5 w-3.5",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof checkboxVariants> & {
    label?: string;
    size?: "default" | "sm" | "lg";
  };

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, size, id: idProp, checked, defaultChecked, onChange, ...props }, ref) => {
    const id = idProp ?? React.useId();
    const isControlled = checked !== undefined;
    const [uncontrolledChecked, setUncontrolledChecked] = React.useState(defaultChecked ?? false);
    const resolvedChecked = isControlled ? checked : uncontrolledChecked;

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setUncontrolledChecked(e.target.checked);
        onChange?.(e);
      },
      [isControlled, onChange]
    );

    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          ref={ref}
          id={id}
          className={cn(checkboxVariants({ size }), "cursor-pointer", className)}
          data-state={resolvedChecked ? "checked" : "unchecked"}
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          onChange={handleChange}
          {...props}
        />
        {label && (
          <label htmlFor={id} className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
