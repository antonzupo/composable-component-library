import type { PuckCategory } from "@/puck/categories";
import type { Components } from "@/puck/types";


export const COMPONENT_LIST: Array<{ name: keyof Components; category: PuckCategory }> = [
  // atoms
  { name: "AspectRatio", category: "atoms" },
  { name: "Avatar", category: "atoms" },
  { name: "Badge", category: "atoms" },
  { name: "Button", category: "atoms" },
  { name: "Checkbox", category: "atoms" },
  { name: "Image", category: "atoms" },
  { name: "Input", category: "atoms" },
  { name: "InputGroup", category: "atoms" },
  { name: "TextArea", category: "atoms" },
  { name: "InputOTP", category: "atoms" },
  { name: "Kbd", category: "atoms" },
  { name: "Label", category: "atoms" },
  { name: "NativeSelect", category: "atoms" },
  { name: "Progress", category: "atoms" },
  { name: "RadioGroup", category: "atoms" },
  { name: "Separator", category: "atoms" },
  { name: "Slider", category: "atoms" },
  { name: "Skeleton", category: "atoms" },
  { name: "Spinner", category: "atoms" },
  { name: "Switch", category: "atoms" },
  { name: "Toggle", category: "atoms" },
  { name: "Typography", category: "atoms" },
  // molecules
  { name: "Accordion", category: "molecules" },
  { name: "Alert", category: "molecules" },
  { name: "AlertDialog", category: "molecules" },
  { name: "AvatarGroup", category: "molecules" },
  { name: "Breadcrumb", category: "molecules" },
  { name: "ButtonGroup", category: "molecules" },
  { name: "ButtonGroupSeparator", category: "molecules" },
  { name: "ToggleGroup", category: "molecules" },
  { name: "Calendar", category: "molecules" },
  { name: "Card", category: "molecules" },
  { name: "Carousel", category: "molecules" },
  { name: "Chart", category: "molecules" },
  { name: "Collapsible", category: "molecules" },
  { name: "Combobox", category: "molecules" },
  { name: "Command", category: "molecules" },
  { name: "Select", category: "molecules" },
  { name: "Sonner", category: "molecules" },
  { name: "ContextMenu", category: "molecules" },
  { name: "Table", category: "molecules" },
  { name: "Tabs", category: "molecules" },
  { name: "DatePicker", category: "molecules" },
  { name: "Dialog", category: "molecules" },
  { name: "Drawer", category: "molecules" },
  { name: "DropdownMenu", category: "molecules" },
  { name: "Empty", category: "molecules" },
  { name: "HoverCard", category: "molecules" },
  { name: "Tooltip", category: "molecules" },
  { name: "Item", category: "molecules" },
  { name: "Menubar", category: "molecules" },
  { name: "NavigationMenu", category: "molecules" },
  { name: "Pagination", category: "molecules" },
  { name: "Popover", category: "molecules" },
  { name: "Sheet", category: "molecules" },
  { name: "Sidebar", category: "molecules" },
  // organisms
  { name: "HeroCard", category: "organisms" },
  { name: "Section", category: "organisms" },
  // layout
  { name: "Field", category: "layout" },
  { name: "Fieldset", category: "layout" },
  { name: "FieldGroup", category: "layout" },
  { name: "FieldContent", category: "layout" },
  { name: "FieldSeparator", category: "layout" },
  { name: "Flex", category: "layout" },
  { name: "Grid", category: "layout" },
  { name: "GridItem", category: "layout" },
  { name: "Resizable", category: "layout" },
  { name: "ScrollArea", category: "layout" },
  { name: "Space", category: "layout" },
];

const EXCLUDE_FROM_GENERIC_SLOT: ReadonlyArray<keyof Components> = [
  "ButtonGroupSeparator",
  "FieldSeparator",
];

export const SLOT_ALLOW_DEFAULT: ReadonlyArray<keyof Components> = COMPONENT_LIST.filter(
  (c) => !EXCLUDE_FROM_GENERIC_SLOT.includes(c.name)
).map((c) => c.name);
