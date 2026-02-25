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

export type BreadcrumbNodeType = "default" | "dropdown" | "collapsed";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  node?: BreadcrumbNodeType;
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

type Segment =
  | { type: "inline"; item: BreadcrumbItem }
  | { type: "collapsed"; items: BreadcrumbItem[] }
  | { type: "dropdown"; items: BreadcrumbItem[] };

function buildSegments(items: BreadcrumbItem[]): Segment[] {
  if (items.length <= 2) return items.map((item) => ({ type: "inline" as const, item }));
  const first = items[0];
  const last = items[items.length - 1];
  const middle = items.slice(1, -1);
  const segments: Segment[] = [];
  let i = 0;
  while (i < middle.length) {
    const item = middle[i];
    const node = item.node ?? "default";
    if (node === "default") {
      segments.push({ type: "inline", item });
      i++;
      continue;
    }
    const group: BreadcrumbItem[] = [];
    while (i < middle.length && (middle[i].node ?? "default") === node) {
      group.push(middle[i]);
      i++;
    }
    segments.push(node === "dropdown" ? { type: "dropdown", items: group } : { type: "collapsed", items: group });
  }
  return [{ type: "inline", item: first }, ...segments, { type: "inline", item: last }];
}

function BreadcrumbDropdown({ items }: { items: BreadcrumbItem[] }) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (containerRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => document.removeEventListener("pointerdown", handlePointerDown, true);
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="list-none cursor-pointer text-foreground hover:underline bg-transparent border-0 p-0 font-inherit text-inherit"
        aria-expanded={open}
        aria-haspopup="true"
      >
        …
      </button>
      {open && (
        <ul
          className="absolute left-0 top-full mt-1 py-1 bg-popover text-popover-foreground border border-border rounded-md shadow-md list-none p-0 min-w-[8rem] z-[100]"
          role="menu"
        >
          {items.map((mid, j) => (
            <li key={j} role="none" className="px-2 py-1.5">
              {mid.href ? (
                <a
                  href={mid.href}
                  className="text-foreground hover:underline block"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  {mid.label}
                </a>
              ) : (
                <span className="text-foreground" role="menuitem">
                  {mid.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Breadcrumb({
  items,
  separator = "slash",
  className,
  id,
  ...props
}: BreadcrumbProps) {
  const sep = sepMap[separator];
  const segments = buildSegments(items);

  const renderItem = (item: BreadcrumbItem, isLast: boolean) =>
    item.href ? (
      <a
        href={item.href}
        className="text-foreground hover:underline transition-colors"
      >
        {item.label}
      </a>
    ) : (
      <span
        className="text-foreground font-medium"
        aria-current={isLast ? "page" : undefined}
      >
        {item.label}
      </span>
    );

  return (
    <nav aria-label="Breadcrumb" className={cn(breadcrumbVariants({ separator }), className)} id={id} {...props}>
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        {segments.map((seg, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            {i > 0 && <span data-sep aria-hidden>{sep}</span>}
            {seg.type === "inline" && renderItem(seg.item, i === segments.length - 1)}
            {seg.type === "collapsed" && <span aria-hidden>…</span>}
            {seg.type === "dropdown" && <BreadcrumbDropdown items={seg.items} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb, breadcrumbVariants };
