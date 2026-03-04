/**
 * Single source of truth: which category each Puck component belongs to.
 * Add or move a component by editing the arrays below only.
 */
import type { PuckCategory } from "@/puck/categories";
import type { Components } from "@/puck/types";

const COMPONENT_CATEGORIES: Array<{
  category: PuckCategory;
  components: (keyof Components)[];
}> = [
  {
    category: "atoms",
    components: [
      "AspectRatio",
      "Avatar",
      "Badge",
      "Button",
      "Checkbox",
      "Field",
      "Image",
      "Input",
      "InputGroup",
      "InputOTP",
      "Kbd",
      "Label",
      "NativeSelect",
      "Progress",
      "RadioGroup",
      "Separator",
      "Skeleton",
      "Text",
    ],
  },
  {
    category: "molecules",
    components: [
      "Accordion",
      "Alert",
      "AlertDialog",
      "AvatarGroup",
      "Breadcrumb",
      "ButtonGroup",
      "ButtonGroupSeparator",
      "Calendar",
      "Card",
      "Carousel",
      "Chart",
      "Collapsible",
      "Combobox",
      "Command",
      "Select",
      "ContextMenu",
      "DataTable",
      "DatePicker",
      "Dialog",
      "Drawer",
      "DropdownMenu",
      "Empty",
      "HoverCard",
      "Item",
      "Menubar",
      "NavigationMenu",
      "Pagination",
      "Popover",
      "Sheet",
      "Sidebar",
    ],
  },
  {
    category: "organisms",
    components: ["HeroCard", "Section"],
  },
  {
    category: "layout",
    components: ["Direction", "Flex", "Grid", "Resizable", "ScrollArea", "Space"],
  },
];

export const COMPONENT_CATEGORY_MAP = Object.fromEntries(
  COMPONENT_CATEGORIES.flatMap(({ category, components }) =>
    components.map((name) => [name, category])
  )
) as Record<keyof Components, PuckCategory>;
