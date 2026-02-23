import * as React from "react";
import { cn } from "@/lib/utils";

type TextVariant = "p" | "span" | "h1" | "h2" | "h3" | "label";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextVariant;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as: Tag = "p", className, ...props }, ref) => (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn(className)}
      {...props}
    />
  )
);
Text.displayName = "Text";

export { Text };
