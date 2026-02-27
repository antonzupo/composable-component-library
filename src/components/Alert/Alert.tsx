import { Alert as AlertRoot, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

type AlertProps = Components["Alert"];

const variantMap = {
  default: "default",
  destructive: "destructive",
  success: "default",
  warning: "default",
} as const;

const variantClass = {
  success: "border-green-500/50 text-green-700 dark:text-green-400 [&>svg]:text-green-600",
  warning: "border-amber-500/50 text-amber-700 dark:text-amber-400 [&>svg]:text-amber-600",
};

const alignClass = { left: "text-left", center: "text-center", right: "text-right" };
const roundedClass = { none: "rounded-none", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", full: "rounded-full" };
const paddingClass = { none: "p-0", sm: "px-3 py-2", md: "px-4 py-3", lg: "px-5 py-4" };

export function Alert({
  title,
  description,
  showTitle = true,
  variant = "default",
  titleAlign = "left",
  descriptionAlign = "left",
  rounded = "lg",
  padding = "md",
  fullWidth = true,
  ariaLive = "polite",
  className,
  id,
}: AlertProps) {
  const radixVariant = variantMap[variant];
  const extraVariantClass = variant === "success" ? variantClass.success : variant === "warning" ? variantClass.warning : "";

  return (
    <AlertRoot
      variant={radixVariant}
      role="alert"
      aria-live={ariaLive}
      className={cn(
        fullWidth && "w-full",
        roundedClass[rounded],
        paddingClass[padding],
        extraVariantClass,
        className
      )}
      id={id || undefined}
    >
      {showTitle && title ? (
        <AlertTitle className={alignClass[titleAlign]}>{title}</AlertTitle>
      ) : null}
      {description ? (
        <AlertDescription className={alignClass[descriptionAlign]}>
          {description}
        </AlertDescription>
      ) : null}
    </AlertRoot>
  );
}
