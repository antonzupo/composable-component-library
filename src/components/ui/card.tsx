import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      size: {
        sm: "rounded-md",
        default: "rounded-lg",
        lg: "rounded-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export type CardSize = VariantProps<typeof cardVariants>["size"];

const CardSizeContext = React.createContext<CardSize>("default");

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, size = "default", ...props }, ref) => (
  <CardSizeContext.Provider value={size}>
    <div
      ref={ref}
      className={cn(cardVariants({ size }), className)}
      {...props}
    />
  </CardSizeContext.Provider>
));
Card.displayName = "Card";

const sizePaddingMap = {
  sm: "p-4",
  default: "p-6",
  lg: "p-8",
} as const;

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const size = React.useContext(CardSizeContext);
  const padding = sizePaddingMap[size ?? "default"];
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5", padding, className)}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const size = React.useContext(CardSizeContext);
  const padding = size === "sm" ? "p-4 pt-0" : size === "lg" ? "p-8 pt-0" : "p-6 pt-0";
  return (
    <div ref={ref} className={cn(padding, className)} {...props} />
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const size = React.useContext(CardSizeContext);
  const padding = size === "sm" ? "p-4 pt-0" : size === "lg" ? "p-8 pt-0" : "p-6 pt-0";
  return (
    <div
      ref={ref}
      className={cn("flex items-center", padding, className)}
      {...props}
    />
  );
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
