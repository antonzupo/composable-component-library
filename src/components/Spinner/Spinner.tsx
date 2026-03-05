import { Spinner as BaseSpinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import type { Components } from "@/puck/types";

const spinnerSizeVariants = cva("", {
  variants: {
    size: {
      sm: "size-3",
      default: "size-4",
      lg: "size-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type SpinnerProps = Components["Spinner"];

function Spinner({
  size = "default",
  className = "",
  id = "",
  ariaLabel = "Loading",
}: SpinnerProps) {
  return (
    <BaseSpinner
      role="status"
      aria-label={ariaLabel || "Loading"}
      className={cn(spinnerSizeVariants({ size }), className)}
      id={id || undefined}
    />
  );
}

export { Spinner };
