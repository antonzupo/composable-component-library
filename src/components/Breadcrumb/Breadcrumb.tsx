import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const breadcrumbVariants = cva("flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground", {
  variants: {
    separator: {
      slash: "[&_[data-sep]]:text-muted-foreground/60 [&_[data-sep]]:px-0.5",
      chevron: "[&_[data-sep]]:text-muted-foreground/60 [&_[data-sep]]:px-0.5",
      dot: "[&_[data-sep]]:text-muted-foreground/60 [&_[data-sep]]:px-0.5",
    },
  },
  defaultVariants: {
    separator: "slash",
  },
});

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof breadcrumbVariants> & {
    items: BreadcrumbItem[];
    separator?: "slash" | "chevron" | "dot";
  };

const sepMap = {
  slash: "/",
  chevron: "›",
  dot: "•",
};

function Breadcrumb({
  items,
  separator = "slash",
  className,
  id,
  ...props
}: BreadcrumbProps) {
  const sep = sepMap[separator];
  return (
    <nav aria-label="Breadcrumb" className={cn(breadcrumbVariants({ separator }), className)} id={id} {...props}>
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        {items.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            {i > 0 && <span data-sep aria-hidden>{sep}</span>}
            {item.href ? (
              <a
                href={item.href}
                className="text-foreground hover:underline transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-foreground font-medium" aria-current={i === items.length - 1 ? "page" : undefined}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb, breadcrumbVariants };
