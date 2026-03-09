import { useMemo } from "react";
import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type AccordionProps = Components["Accordion"];

const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
} as const;

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

const paddingMap = {
  none: "py-0",
  sm: "py-2",
  md: "py-4",
  lg: "py-6",
} as const;

const contentPaddingMap = {
  none: "pb-0 pt-0",
  sm: "pb-2 pt-0",
  md: "pb-4 pt-0",
  lg: "pb-6 pt-0",
} as const;

function getDefaultValue(
  items: Array<{ trigger: string; content: string; disabled?: boolean }>,
  type: "single" | "multiple",
  defaultOpen: "first" | "none" | "all"
): string | string[] | undefined {
  if (items.length === 0) return undefined;
  if (defaultOpen === "none") return undefined;
  const values = items.map((_, i) => `item-${i}`);
  const enabledIndices = items
    .map((item, i) => (item.disabled ? -1 : i))
    .filter((i) => i >= 0);
  if (type === "single") {
    if (defaultOpen === "first" && enabledIndices.length > 0)
      return values[enabledIndices[0]];
    return undefined;
  }
  if (defaultOpen === "all")
    return enabledIndices.map((i) => values[i]);
  return enabledIndices.length > 0 ? [values[enabledIndices[0]]] : undefined;
}

export function Accordion({
  items,
  type = "single",
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
  fullWidth = true,
  showBorder = true,
  className,
  id,
}: AccordionProps) {
  const defaultValue = useMemo(
    () => getDefaultValue(items, type, defaultOpen),
    [items, type, defaultOpen]
  );

  const rootClassName = cn(
    "p-4",
    showBorder && "border",
    variant === "ghost" && "border-0",
    roundedMap[rounded],
    fullWidth && "w-full",
    className
  );

  const itemClassName = cn(variant === "ghost" && "border-b-0");

  const triggerClassName = cn(
    paddingMap[triggerPadding],
    !showIcon && "[&>svg]:hidden",
    iconPosition === "start" && "[&>svg]:order-first [&>svg]:mr-2"
  );

  const triggerLabelClassName = cn("flex-1 min-w-0", alignMap[triggerAlign]);

  const contentClassName = cn(alignMap[contentAlign], contentPaddingMap[contentPadding]);

  if (!items.length) {
    return (
      <div
        id={id || undefined}
        className={cn(
          "rounded-lg border border-dashed border-border bg-muted/20 p-6 text-center text-sm text-muted-foreground",
          className
        )}
      >
        Add accordion items
      </div>
    );
  }

  const itemElements = useMemo(
    () =>
      items.map((item, index) => (
        <AccordionItem
          key={`item-${index}`}
          value={`item-${index}`}
          disabled={item.disabled}
          className={itemClassName}
        >
          <AccordionTrigger className={triggerClassName}>
            <span className={triggerLabelClassName}>{item.trigger}</span>
          </AccordionTrigger>
          <AccordionContent className={contentClassName}>{item.content}</AccordionContent>
        </AccordionItem>
      )),
    [
      items,
      variant,
      triggerPadding,
      showIcon,
      iconPosition,
      triggerAlign,
      contentAlign,
      contentPadding,
    ]
  );

  if (type === "multiple") {
    return (
      <AccordionRoot
        type="multiple"
        defaultValue={defaultValue as string[]}
        className={rootClassName}
        id={id || undefined}
      >
        {itemElements}
      </AccordionRoot>
    );
  }

  return (
    <AccordionRoot
      type="single"
      collapsible={collapsible}
      defaultValue={defaultValue as string}
      className={rootClassName}
      id={id || undefined}
    >
      {itemElements}
    </AccordionRoot>
  );
}
