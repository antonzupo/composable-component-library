import { Tabs as TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";
import type { ReactNode } from "react";

export type TabsProps = Components["Tabs"];

export type TabsItemContent = ReactNode;

export function Tabs({
  items = [],
  defaultValue = "",
  orientation = "horizontal",
  variant = "default",
  className,
  id,
}: TabsProps) {
  const value = defaultValue || (items[0]?.value ?? "");
  return (
    <TabsRoot
      defaultValue={value}
      orientation={orientation}
      className={cn("w-full", className)}
      id={id || undefined}
    >
      <TabsList
        variant={variant}
        className={cn(
          orientation === "vertical" && "flex h-auto flex-col items-stretch justify-center"
        )}
      >
        {items.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} variant={variant}>
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
