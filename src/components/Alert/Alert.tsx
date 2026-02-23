import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("relative border text-sm", {
  variants: {
    variant: {
      default: "border-border bg-background text-foreground",
      destructive:
        "border-destructive/50 bg-destructive/10 text-destructive dark:border-destructive [&>svg]:text-destructive",
      success:
        "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400 dark:border-green-500 [&>svg]:text-green-600 dark:[&>svg]:text-green-400",
      warning:
        "border-amber-500/50 bg-amber-500/10 text-amber-800 dark:text-amber-200 dark:border-amber-500 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const roundedClass = (r: string) =>
  r === "none" ? "rounded-none" : r === "sm" ? "rounded-sm" : r === "md" ? "rounded-md" : r === "lg" ? "rounded-lg" : "rounded-full";

const paddingClass = (p: string) =>
  p === "none" ? "p-0" : p === "sm" ? "px-3 py-2" : p === "md" ? "px-4 py-3" : "px-5 py-4";

const alignClass = (a: string) =>
  a === "left" ? "text-left" : a === "center" ? "text-center" : "text-right";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    padding?: "none" | "sm" | "md" | "lg";
    fullWidth?: boolean;
    titleAlign?: "left" | "center" | "right";
    descriptionAlign?: "left" | "center" | "right";
    showIcon?: boolean;
    ariaLive?: "polite" | "assertive" | "off";
  };

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      rounded = "lg",
      padding = "md",
      fullWidth = true,
      titleAlign,
      descriptionAlign,
      showIcon,
      ariaLive = "polite",
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="alert"
      aria-live={ariaLive === "off" ? undefined : ariaLive}
      className={cn(
        alertVariants({ variant }),
        roundedClass(rounded),
        paddingClass(padding),
        fullWidth && "w-full",
        "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-3.5 [&>svg+div]:pl-7",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  )
);
AlertDescription.displayName = "AlertDescription";

const AlertIconDefault = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
const AlertIconDestructive = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);
const AlertIconSuccess = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const AlertIconWarning = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

function AlertIcon({ variant }: { variant: "default" | "destructive" | "success" | "warning" }) {
  if (variant === "destructive") return <AlertIconDestructive />;
  if (variant === "success") return <AlertIconSuccess />;
  if (variant === "warning") return <AlertIconWarning />;
  return <AlertIconDefault />;
}

export { Alert, AlertTitle, AlertDescription, AlertIcon, alertVariants, alignClass as alertAlignClass };
