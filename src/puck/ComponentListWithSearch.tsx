import { Drawer, usePuck } from "@puckeditor/core";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type CategoryItem = { name: string; label: string };
type CategoryGroup = { key: string; title: string; items: CategoryItem[] };

export function ComponentListWithSearch() {
  const { config } = usePuck();
  const [search, setSearch] = useState("");

  const categories = config.categories ?? {};
  const categoriesWithComponents = useMemo(() => {
    const groups: CategoryGroup[] = [];
    Object.entries(categories).forEach(([key, category]) => {
      const compNames = (category as { components?: string[]; title?: string }).components ?? [];
      const title =
        (category as { title?: string }).title ?? key;
      const items: CategoryItem[] = compNames.map((name) => {
        const comp = config.components[name as keyof typeof config.components];
        const label =
          comp && typeof comp === "object" && "label" in comp
            ? String((comp as { label?: string }).label ?? name)
            : name;
        return { name, label };
      });
      groups.push({ key, title, items });
    });
    return groups;
  }, [config.categories, config.components]);

  const filteredCategories = useMemo(() => {
    if (!search.trim()) {
      return categoriesWithComponents.filter((g) => g.items.length > 0);
    }
    const q = search.toLowerCase().trim();
    return categoriesWithComponents
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (c) =>
            c.name.toLowerCase().includes(q) || c.label.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [categoriesWithComponents, search]);

  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden">
      <div className="relative shrink-0 py-0.5">
        <Search
          className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          type="search"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={cn("h-8 w-full pl-8 pr-3 text-sm")}
          aria-label="Search components"
        />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((group) => (
            <div key={group.key} className="mb-4">
              <div
                className={cn(
                  "sticky top-0 z-10 bg-[var(--puck-color-grey-11)] px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--puck-color-grey-06)]"
                )}
              >
                {group.title}
              </div>
              <Drawer>
                {group.items.map(({ name, label }) => (
                  <Drawer.Item key={name} name={name} label={label} />
                ))}
              </Drawer>
            </div>
          ))
        ) : (
          <p className="px-2 py-4 text-center text-sm text-muted-foreground">
            {search.trim()
              ? "No components match your search."
              : "No components available."}
          </p>
        )}
      </div>
    </div>
  );
}
