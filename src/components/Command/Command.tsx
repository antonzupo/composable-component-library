"use client";

import * as React from "react";
import {
  Command as UICommand,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

export interface CommandItemProps {
  value: string;
  label: string;
  groupHeading?: string;
}

export interface CommandProps {
  showInput?: boolean;
  inputPlaceholder?: string;
  emptyText?: string;
  items?: CommandItemProps[];
  className?: string;
  id?: string;
}

function groupItemsByHeading(
  items: CommandItemProps[]
): Array<{ heading: string; items: Array<{ value: string; label: string }> }> {
  const groups = new Map<string, Array<{ value: string; label: string }>>();
  for (const item of items) {
    const key = item.groupHeading?.trim() ?? "";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push({ value: item.value, label: item.label });
  }
  return Array.from(groups.entries()).map(([heading, items]) => ({
    heading,
    items,
  }));
}

export function Command({
  showInput = true,
  inputPlaceholder = "Search...",
  emptyText = "No results found.",
  items = [],
  className,
  id,
}: CommandProps) {
  const groups = React.useMemo(
    () => groupItemsByHeading(items),
    [items]
  );

  return (
    <UICommand
      id={id}
      className={cn("rounded-lg border shadow-md", className)}
    >
      {showInput && (
        <CommandInput placeholder={inputPlaceholder} />
      )}
      <CommandList>
        <CommandEmpty>{emptyText}</CommandEmpty>
        {groups.map((group, groupIndex) => (
          <CommandGroup
            key={groupIndex}
            heading={group.heading || undefined}
          >
            {group.items.map((item) => (
              <CommandItem key={item.value} value={item.value}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </UICommand>
  );
}
