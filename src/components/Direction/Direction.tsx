"use client";

import * as React from "react";
import { DirectionProvider as UIDirectionProvider } from "@/components/ui/direction";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type DirectionProps = Components["Direction"] & { children?: React.ReactNode };

export function Direction({ dir = "ltr", content: _content, className, id, children }: DirectionProps) {
  return (
    <UIDirectionProvider direction={dir}>
      <div dir={dir} className={cn(className)} id={id}>
        {children}
      </div>
    </UIDirectionProvider>
  );
}
