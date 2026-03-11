import { Tabs as TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";
import type { ReactNode } from "react";

export type TabsProps = Components["Tabs"];

export type TabsItemContent = ReactNode;

export const tabsListVariantClasses = {
  default: "rounded-lg bg-muted p-1",
  line: "gap-6 border-b border-border p-0 rounded-none bg-transparent",
} as const;

export const tabsTriggerVariantClasses = {
  default:
    "rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
  line:
    "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
} as const;

export function Tabs({
  items = [],
  defaultValue = "",
  orientation = "horizontal",
  variant = "default",
  className,
  id,
}: TabsProps) {
  const value = defaultValue || (items[0]?.value ?? "");
  const listVariant = variant === "line" ? tabsListVariantClasses.line : tabsListVariantClasses.default;
  const triggerVariant = variant === "line" ? tabsTriggerVariantClasses.line : tabsTriggerVariantClasses.default;
  return (
    <TabsRoot
      defaultValue={value}
      orientation={orientation}
      className={cn("w-full", className)}
      id={id || undefined}
    >
      <TabsList
        className={cn(
          "inline-flex h-9 items-center justify-center text-muted-foreground",
          listVariant,
          orientation === "vertical" && "flex h-auto flex-col items-stretch justify-center"
        )}
      >
        {items.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(triggerVariant)}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {!Array.isArray(tab.content) && typeof tab.content !== "function"
            ? (tab.content as TabsItemContent)
            : null}
        </TabsContent>
      ))}
    </TabsRoot>
  );
}
