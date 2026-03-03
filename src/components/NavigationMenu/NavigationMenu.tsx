import * as React from "react";
import {
  NavigationMenu as NavigationMenuRoot,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export interface NavigationMenuContentLink {
  label: string;
  href: string;
}

export interface NavigationMenuItemConfig {
  type: "trigger" | "link";
  label: string;
  href: string;
  disabled: boolean;
  contentLinks: NavigationMenuContentLink[];
}

export interface NavigationMenuProps {
  orientation?: "horizontal" | "vertical";
  dir?: "ltr" | "rtl";
  delayDuration?: number;
  skipDelayDuration?: number;
  value?: string;
  defaultValue?: string;
  items: NavigationMenuItemConfig[];
  className?: string;
  listClassName?: string;
  id?: string;
}

function renderNavItem(
  item: NavigationMenuItemConfig,
  index: number
): React.ReactNode {
  if (item.type === "link") {
    return (
      <NavigationMenuItem key={index}>
        <NavigationMenuLink
          href={item.disabled ? undefined : item.href || "#"}
          aria-disabled={item.disabled}
          className={cn(item.disabled && "pointer-events-none opacity-50")}
        >
          {item.label}
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }
  const contentLinks = item.contentLinks?.filter(
    (c) => c.label.trim() || c.href.trim()
  ) ?? [];
  return (
    <NavigationMenuItem key={index}>
      <NavigationMenuTrigger disabled={item.disabled}>
        {item.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[min(var(--radix-navigation-menu-viewport-width),_400px)] gap-3 p-4 md:grid-cols-2 lg:w-[400px]">
          {contentLinks.length > 0 ? (
            contentLinks.map((link, j) => (
              <li key={j}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
                    "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  )}
                >
                  <div className="text-sm font-medium leading-none">
                    {link.label}
                  </div>
                </NavigationMenuLink>
              </li>
            ))
          ) : (
            <li className="text-muted-foreground text-sm p-3">
              Add content links below
            </li>
          )}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuRoot>,
  NavigationMenuProps
>(
  (
    {
      orientation = "horizontal",
      dir,
      delayDuration,
      skipDelayDuration,
      value,
      defaultValue,
      items,
      className,
      listClassName,
      id,
    },
    ref
  ) => {
    return (
      <NavigationMenuRoot
        ref={ref}
        orientation={orientation}
        dir={dir}
        delayDuration={delayDuration}
        skipDelayDuration={skipDelayDuration}
        value={value}
        defaultValue={defaultValue}
        className={className}
        id={id}
      >
        <NavigationMenuList className={listClassName}>
          {(items ?? []).map((item, i) => renderNavItem(item, i))}
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
  }
);
NavigationMenu.displayName = "NavigationMenu";
