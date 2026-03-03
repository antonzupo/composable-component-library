/**
 * Single source of truth for Puck categories. Add, remove, or rename categories here only.
 */
export const PUCK_CATEGORIES = [
  { id: "atoms", title: "Atoms" },
  { id: "molecules", title: "Molecules" },
  { id: "organisms", title: "Organisms" },
  { id: "layout", title: "Layout" },
] as const;

export type PuckCategory = (typeof PUCK_CATEGORIES)[number]["id"];

export const PUCK_CATEGORY_TITLES: Record<PuckCategory, string> = Object.fromEntries(
  PUCK_CATEGORIES.map((c) => [c.id, c.title])
) as Record<PuckCategory, string>;
