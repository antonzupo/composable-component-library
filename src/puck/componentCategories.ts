import type { PuckCategory } from "@/puck/categories";
import type { Components } from "@/puck/types";
import { COMPONENT_LIST } from "@/puck/allowLists";

export const COMPONENT_CATEGORY_MAP = Object.fromEntries(
  COMPONENT_LIST.map(({ name, category }) => [name, category])
) as Record<keyof Components, PuckCategory>;

export const COMPONENT_CATEGORIES: Array<{
  category: PuckCategory;
  components: (keyof Components)[];
}> = (() => {
  const byCategory = new Map<PuckCategory, (keyof Components)[]>();
  for (const { name, category } of COMPONENT_LIST) {
    const list = byCategory.get(category) ?? [];
    list.push(name);
    byCategory.set(category, list);
  }
  return Array.from(byCategory.entries()).map(([category, components]) => ({
    category,
    components,
  }));
})();
