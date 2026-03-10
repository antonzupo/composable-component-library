"use client";

import * as React from "react";
import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type SidebarProps = Components["Sidebar"] & {
  sidebarContent?: React.ReactNode;
  mainContent?: React.ReactNode;
};

export function Sidebar({
  defaultOpen = true,
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  sidebarContent,
  mainContent,
  className,
  id,
}: SidebarProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div
        className={cn("flex min-h-svh flex-1 flex-row", className)}
        id={id}
      >
        <UISidebar side={side} variant={variant} collapsible={collapsible}>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                {sidebarContent ?? (
                  <span className="text-muted-foreground p-2 text-sm">
                    Add content to the sidebar
                  </span>
                )}
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </UISidebar>
        <SidebarInset>
          {mainContent ?? (
            <span className="text-muted-foreground p-4 text-sm">
              Add main content
            </span>
          )}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
