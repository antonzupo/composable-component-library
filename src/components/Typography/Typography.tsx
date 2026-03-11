import * as React from "react";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type TypographyProps = Components["Typography"];

const variantStyles: Record<
  TypographyProps["variant"],
  { as: keyof JSX.IntrinsicElements; className: string }
> = {
  h1: {
    as: "h1",
    className: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
  },
  h2: {
    as: "h2",
    className: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  },
  h3: {
    as: "h3",
    className: "scroll-m-20 text-2xl font-semibold tracking-tight",
  },
  h4: {
    as: "h4",
    className: "scroll-m-20 text-xl font-semibold tracking-tight",
  },
  p: {
    as: "p",
    className: "leading-7 [&:not(:first-child)]:mt-6",
  },
  blockquote: {
    as: "blockquote",
    className: "mt-6 border-l-2 pl-6 italic",
  },
  list: {
    as: "ul",
    className: "my-6 ml-6 list-disc [&>li]:mt-2",
  },
  "inline-code": {
    as: "code",
    className: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  },
  lead: {
    as: "p",
    className: "text-xl text-muted-foreground",
  },
  large: {
    as: "div",
    className: "text-lg font-semibold",
  },
  small: {
    as: "small",
    className: "text-sm leading-none font-medium",
  },
  muted: {
    as: "p",
    className: "text-sm text-muted-foreground",
  },
};

export function Typography({
  content,
  variant = "p",
  className,
  id,
}: TypographyProps) {
  const { as: Tag, className: variantClassName } = variantStyles[variant];

  if (variant === "list") {
    const items = content
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    return (
      <ul
        id={id || undefined}
        className={cn(variantClassName, className)}
      >
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return React.createElement(
    Tag,
    {
      id: id || undefined,
      className: cn(variantClassName, className),
    },
    content
  );
}
