import * as React from "react";
import { cn } from "@/lib/utils";

export type AccordionItemProps = {
  value: string;
  trigger: string;
  content: string;
  open?: boolean;
  onToggle?: () => void;
  className?: string;
  triggerAlign: "left" | "center" | "right";
  contentAlign: "left" | "center" | "right";
  triggerPadding: "none" | "sm" | "md" | "lg";
  contentPadding: "none" | "sm" | "md" | "lg";
  showIcon: boolean;
  iconPosition: "start" | "end";
};

const alignClass = (a: AccordionItemProps["triggerAlign"]) =>
  a === "left" ? "text-left" : a === "center" ? "text-center" : "text-right";

const contentAlignClass = (a: AccordionItemProps["contentAlign"]) =>
  a === "left" ? "text-left" : a === "center" ? "text-center" : "text-right";

const paddingY = (p: AccordionItemProps["triggerPadding"]) =>
  p === "none" ? "py-0" : p === "sm" ? "py-2" : p === "md" ? "py-4" : "py-5";

const contentPaddingBottom = (p: AccordionItemProps["contentPadding"]) =>
  p === "none" ? "pb-0" : p === "sm" ? "pb-2" : p === "md" ? "pb-4" : "pb-5";

const ChevronIcon = ({ open }: { open: boolean }) => (
  <span
    className={cn(
      "inline-flex size-5 shrink-0 transition-transform",
      open && "rotate-180"
    )}
    aria-hidden
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </span>
);

function AccordionItem({
  value,
  trigger,
  content,
  open,
  onToggle,
  className,
  triggerAlign,
  contentAlign,
  triggerPadding,
  contentPadding,
  showIcon,
  iconPosition,
}: AccordionItemProps) {
  const icon = showIcon ? <ChevronIcon open={!!open} /> : null;
  return (
    <div className={cn("border-b border-border last:border-b-0", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`accordion-content-${value}`}
        id={`accordion-trigger-${value}`}
        onClick={onToggle}
        className={cn(
          "flex w-full items-center gap-2 font-medium transition-[color,background-color] hover:bg-muted/50",
          paddingY(triggerPadding),
          iconPosition === "start" ? "flex-row" : "flex-row-reverse",
          alignClass(triggerAlign),
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        )}
      >
        {iconPosition === "start" && icon}
        <span className="flex-1 min-w-0">{trigger}</span>
        {iconPosition === "end" && icon}
      </button>
      <div
        id={`accordion-content-${value}`}
        role="region"
        aria-labelledby={`accordion-trigger-${value}`}
        hidden={!open}
        className="overflow-hidden"
      >
        <div className={cn("text-muted-foreground text-sm", contentPaddingBottom(contentPadding), contentAlignClass(contentAlign))}>
          {content}
        </div>
      </div>
    </div>
  );
}

export type AccordionProps = {
  items: Array<{ value: string; trigger: string; content: string }>;
  type?: "single" | "multiple";
  defaultOpen?: "first" | "none" | "all";
  collapsible?: boolean;
  triggerAlign?: "left" | "center" | "right";
  contentAlign?: "left" | "center" | "right";
  triggerPadding?: "none" | "sm" | "md" | "lg";
  contentPadding?: "none" | "sm" | "md" | "lg";
  showIcon?: boolean;
  iconPosition?: "start" | "end";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  variant?: "default" | "bordered" | "ghost";
  fullWidth?: boolean;
  className?: string;
  id?: string;
};

const roundedClass = (r: AccordionProps["rounded"]) =>
  r === "none" ? "rounded-none" : r === "sm" ? "rounded-sm" : r === "md" ? "rounded-md" : r === "lg" ? "rounded-lg" : "rounded-full";

const variantClass = (v: AccordionProps["variant"]) =>
  v === "ghost" ? "border-0 bg-transparent" : "border border-border bg-card";

const containerPadding = (p: AccordionProps["triggerPadding"]) =>
  p === "none" ? "px-0" : p === "sm" ? "px-2" : p === "md" ? "px-4" : "px-6";

function getInitialOpen(values: string[], defaultOpen: AccordionProps["defaultOpen"]): Set<string> {
  if (defaultOpen === "none") return new Set();
  if (defaultOpen === "all") return new Set(values);
  if (defaultOpen === "first" && values.length > 0) return new Set([values[0]]);
  return new Set();
}

export function Accordion({
  items,
  type = "multiple",
  defaultOpen = "first",
  collapsible = true,
  triggerAlign = "left",
  contentAlign = "left",
  triggerPadding = "md",
  contentPadding = "md",
  showIcon = true,
  iconPosition = "end",
  rounded = "lg",
  variant = "default",
  fullWidth = false,
  className,
  id,
}: AccordionProps) {
  const values = React.useMemo(() => items.map((i) => i.value), [items]);
  const [openValues, setOpenValues] = React.useState<Set<string>>(() => getInitialOpen(values, defaultOpen));

  const handleToggle = React.useCallback(
    (value: string) => {
      setOpenValues((prev) => {
        const next = new Set(prev);
        if (next.has(value)) {
          if (collapsible) next.delete(value);
        } else {
          if (type === "single") next.clear();
          next.add(value);
        }
        return next;
      });
    },
    [type, collapsible]
  );

  if (!items?.length) return null;

  return (
    <div
      className={cn(variantClass(variant), roundedClass(rounded), fullWidth && "w-full", className)}
      id={id}
    >
      <div className={containerPadding(triggerPadding)}>
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            trigger={item.trigger}
            content={item.content}
            open={openValues.has(item.value)}
            onToggle={() => handleToggle(item.value)}
            triggerAlign={triggerAlign}
            contentAlign={contentAlign}
            triggerPadding={triggerPadding}
            contentPadding={contentPadding}
            showIcon={showIcon}
            iconPosition={iconPosition}
          />
        ))}
      </div>
    </div>
  );
}
