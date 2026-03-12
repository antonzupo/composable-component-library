import type { Config } from "@puckeditor/core";

// Atoms
import { aspectRatioPuckConfig } from "@/components/AspectRatio/puck";
import { avatarPuckConfig } from "@/components/Avatar/puck";
import { badgePuckConfig } from "@/components/Badge/puck";
import { buttonPuckConfig } from "@/components/Button/puck";
import { checkboxPuckConfig } from "@/components/Checkbox/puck";
import { imagePuckConfig } from "@/components/Image/puck";
import { inputPuckConfig } from "@/components/Input/puck";
import { inputGroupPuckConfig } from "@/components/InputGroup/puck";
import { textAreaPuckConfig } from "@/components/TextArea/puck";
import { inputOtpPuckConfig } from "@/components/InputOTP/puck";
import { kbdPuckConfig } from "@/components/Kbd/puck";
import { labelPuckConfig } from "@/components/Label/puck";
import { nativeSelectPuckConfig } from "@/components/NativeSelect/puck";
import { progressPuckConfig } from "@/components/Progress/puck";
import { radioGroupPuckConfig } from "@/components/RadioGroup/puck";
import { separatorPuckConfig } from "@/components/Separator/puck";
import { sliderPuckConfig } from "@/components/Slider/puck";
import { skeletonPuckConfig } from "@/components/Skeleton/puck";
import { spinnerPuckConfig } from "@/components/Spinner/puck";
import { switchPuckConfig } from "@/components/Switch/puck";
import { togglePuckConfig } from "@/components/Toggle/puck";
import { typographyPuckConfig } from "@/components/Typography/puck";
// Molecules
import { accordionPuckConfig } from "@/components/Accordion/puck";
import { alertPuckConfig } from "@/components/Alert/puck";
import { alertDialogPuckConfig } from "@/components/AlertDialog/puck";
import { avatarGroupPuckConfig } from "@/components/AvatarGroup/puck";
import { breadcrumbPuckConfig } from "@/components/Breadcrumb/puck";
import { buttonGroupPuckConfig } from "@/components/ButtonGroup/puck";
import { toggleGroupPuckConfig } from "@/components/ToggleGroup/puck";
import { calendarPuckConfig } from "@/components/Calendar/puck";
import { cardPuckConfig } from "@/components/Card/puck";
import { carouselPuckConfig } from "@/components/Carousel/puck";
import { chartPuckConfig } from "@/components/Chart/puck";
import { collapsiblePuckConfig } from "@/components/Collapsible/puck";
import { comboboxPuckConfig } from "@/components/Combobox/puck";
import { commandPuckConfig } from "@/components/Command/puck";
import { selectPuckConfig } from "@/components/Select/puck";
import { sonnerPuckConfig } from "@/components/Sonner/puck";
import { contextMenuPuckConfig } from "@/components/ContextMenu/puck";
import { tablePuckConfig } from "@/components/Table/puck";
import { tabsPuckConfig } from "@/components/Tabs/puck";
import { datePickerPuckConfig } from "@/components/DatePicker/puck";
import { dialogPuckConfig } from "@/components/Dialog/puck";
import { drawerPuckConfig } from "@/components/Drawer/puck";
import { dropdownMenuPuckConfig } from "@/components/DropdownMenu/puck";
import { emptyPuckConfig } from "@/components/Empty/puck";
import { hoverCardPuckConfig } from "@/components/HoverCard/puck";
import { tooltipPuckConfig } from "@/components/Tooltip/puck";
import { itemPuckConfig } from "@/components/Item/puck";
import { menubarPuckConfig } from "@/components/Menubar/puck";
import { navigationMenuPuckConfig } from "@/components/NavigationMenu/puck";
import { paginationPuckConfig } from "@/components/Pagination/puck";
import { popoverPuckConfig } from "@/components/Popover/puck";
import { sheetPuckConfig } from "@/components/Sheet/puck";
import { sidebarPuckConfig } from "@/components/Sidebar/puck";
// Organisms
import { heroCardPuckConfig } from "@/components/HeroCard/puck";
import { sectionPuckConfig } from "@/components/Section/puck";
// Layout
import { fieldPuckConfig } from "@/components/Field/puck";
import { fieldsetPuckConfig } from "@/components/Fieldset/puck";
import { fieldGroupPuckConfig } from "@/components/FieldGroup/puck";
import { fieldContentPuckConfig } from "@/components/FieldContent/puck";
import { fieldSeparatorPuckConfig } from "@/components/FieldSeparator/puck";
import { flexPuckConfig } from "@/components/Flex/puck";
import { gridPuckConfig } from "@/components/Grid/puck";
import { gridItemPuckConfig } from "@/components/GridItem/puck";
import { resizablePuckConfig } from "@/components/Resizable/puck";
import { scrollAreaPuckConfig } from "@/components/ScrollArea/puck";
import { spacePuckConfig } from "@/components/Space/puck";
import { PUCK_CATEGORIES, PUCK_CATEGORY_TITLES } from "@/puck/categories";
import { COMPONENT_CATEGORY_MAP } from "@/puck/componentCategories";
import type { Components, PuckCategory } from "@/puck/types";

const componentCategories: Array<{ name: keyof Components; category: PuckCategory }> = (
  Object.entries(COMPONENT_CATEGORY_MAP) as Array<[keyof Components, PuckCategory]>
).map(([name, category]) => ({ name, category }));

const categories = Object.fromEntries(
  PUCK_CATEGORIES.map(({ id }) => [
    id,
    {
      title: PUCK_CATEGORY_TITLES[id],
      defaultExpanded: true,
      components: componentCategories.filter((c) => c.category === id).map((c) => c.name),
    },
  ])
) as Config<Components>["categories"];

export type { Components } from "@/puck/types";

/** Root layout props (preview container). Used by App.tsx for the preview wrapper. */
export type RootLayoutProps = {
  pageName?: string;
  maxWidth?: "full" | "4xl" | "5xl" | "6xl" | "7xl";
  paddingX?: "none" | "sm" | "md" | "lg";
};

const MAX_WIDTH_CLASS: Record<NonNullable<RootLayoutProps["maxWidth"]>, string> = {
  full: "max-w-full",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

const PADDING_X_CLASS: Record<NonNullable<RootLayoutProps["paddingX"]>, string> = {
  none: "px-0",
  sm: "px-4",
  md: "px-6",
  lg: "px-8",
};

/** Build preview wrapper className from root layout props (for use in App.tsx). */
export function getPreviewLayoutClassName(props: RootLayoutProps = {}): string {
  const maxWidth = props.maxWidth ?? "6xl";
  const paddingX = props.paddingX ?? "md";
  return [
    "mx-auto",
    MAX_WIDTH_CLASS[maxWidth],
    PADDING_X_CLASS[paddingX],
    "py-6 space-y-8",
  ].join(" ");
}

export const config: Config<Components> = {
  categories,
  components: {
    // Atoms
    ...aspectRatioPuckConfig,
    ...avatarPuckConfig,
    ...badgePuckConfig,
    ...buttonPuckConfig,
    ...checkboxPuckConfig,
    ...imagePuckConfig,
    ...inputPuckConfig,
    ...inputGroupPuckConfig,
    ...textAreaPuckConfig,
    ...inputOtpPuckConfig,
    ...kbdPuckConfig,
    ...labelPuckConfig,
    ...nativeSelectPuckConfig,
    ...progressPuckConfig,
    ...radioGroupPuckConfig,
    ...separatorPuckConfig,
    ...sliderPuckConfig,
    ...skeletonPuckConfig,
    ...spinnerPuckConfig,
    ...switchPuckConfig,
    ...togglePuckConfig,
    ...typographyPuckConfig,
    // Molecules
    ...accordionPuckConfig,
    ...alertPuckConfig,
    ...alertDialogPuckConfig,
    ...avatarGroupPuckConfig,
    ...breadcrumbPuckConfig,
    ...buttonGroupPuckConfig,
    ...toggleGroupPuckConfig,
    ...calendarPuckConfig,
    ...cardPuckConfig,
    ...carouselPuckConfig,
    ...chartPuckConfig,
    ...collapsiblePuckConfig,
    ...comboboxPuckConfig,
    ...commandPuckConfig,
    ...selectPuckConfig,
    ...sonnerPuckConfig,
    ...contextMenuPuckConfig,
    ...tablePuckConfig,
    ...tabsPuckConfig,
    ...datePickerPuckConfig,
    ...dialogPuckConfig,
    ...drawerPuckConfig,
    ...dropdownMenuPuckConfig,
    ...emptyPuckConfig,
    ...hoverCardPuckConfig,
    ...tooltipPuckConfig,
    ...itemPuckConfig,
    ...menubarPuckConfig,
    ...navigationMenuPuckConfig,
    ...paginationPuckConfig,
    ...popoverPuckConfig,
    ...sheetPuckConfig,
    ...sidebarPuckConfig,
    // Organisms
    ...heroCardPuckConfig,
    ...sectionPuckConfig,
    // Layout
    ...fieldPuckConfig,
    ...fieldsetPuckConfig,
    ...fieldGroupPuckConfig,
    ...fieldContentPuckConfig,
    ...fieldSeparatorPuckConfig,
    ...flexPuckConfig,
    ...gridPuckConfig,
    ...gridItemPuckConfig,
    ...resizablePuckConfig,
    ...scrollAreaPuckConfig,
    ...spacePuckConfig,
  } as Config<Components>["components"],
  root: {
    /** Label shown in the outline and panel header when the root is selected. Default in Puck is "Page". */
    label: "Page",
    fields: {
      pageName: {
        type: "text" as const,
        label: "Page name",
      },
      maxWidth: {
        type: "select" as const,
        label: "Preview max width",
        options: [
          { label: "Full width", value: "full" },
          { label: "4xl (56rem)", value: "4xl" },
          { label: "5xl (64rem)", value: "5xl" },
          { label: "6xl (72rem)", value: "6xl" },
          { label: "7xl (80rem)", value: "7xl" },
        ],
      },
      paddingX: {
        type: "select" as const,
        label: "Preview horizontal padding",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
    },
    defaultProps: {
      pageName: "",
      maxWidth: "6xl",
      paddingX: "md",
    },
    render: ({ children }) => (
      <div className="min-h-full bg-background">
        {children}
      </div>
    ),
  },
};
