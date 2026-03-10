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
      "Image",
      "Input",
      "InputGroup",
      "TextArea",
      "InputOTP",
      "Kbd",
      "Label",
      "NativeSelect",
      "Progress",
      "RadioGroup",
      "Separator",
      "Slider",
      "Skeleton",
      "Spinner",
      "Switch",
      "Toggle",
      "Typography",
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
      "ToggleGroup",
      "Calendar",
      "Card",
      "Carousel",
      "Chart",
      "Collapsible",
      "Combobox",
      "Command",
      "Select",
      "Sonner",
      "ContextMenu",
      "DataTable",
      "Table",
      "Tabs",
      "DatePicker",
      "Dialog",
      "Drawer",
      "DropdownMenu",
      "Empty",
      "HoverCard",
      "Tooltip",
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
    components: [
      "Direction",
      "Field",
      "Fieldset",
      "FieldGroup",
      "FieldContent",
      "FieldSeparator",
      "Flex",
      "Grid",
      "Resizable",
      "ScrollArea",
      "Space",
    ],
  },
];

export const COMPONENT_CATEGORY_MAP = Object.fromEntries(
  COMPONENT_CATEGORIES.flatMap(({ category, components }) =>
    components.map((name) => [name, category])
  )
) as Record<keyof Components, PuckCategory>;
