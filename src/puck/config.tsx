import type { Config } from "@puckeditor/core";
// Import only the component configs you need; remove imports and spread entries to exclude components.
import { accordionPuckConfig, puckCategory as accordionCategory } from "@/components/Accordion/puck";
import { alertDialogPuckConfig, puckCategory as alertDialogCategory } from "@/components/AlertDialog/puck";
import { alertPuckConfig, puckCategory as alertCategory } from "@/components/Alert/puck";
import { aspectRatioPuckConfig, puckCategory as aspectRatioCategory } from "@/components/AspectRatio/puck";
import { avatarPuckConfig, puckCategory as avatarCategory } from "@/components/Avatar/puck";
import { badgePuckConfig, puckCategory as badgeCategory } from "@/components/Badge/puck";
import { breadcrumbPuckConfig, puckCategory as breadcrumbCategory } from "@/components/Breadcrumb/puck";
import { buttonPuckConfig, puckCategory as buttonCategory } from "@/components/Button/puck";
import { calendarPuckConfig, puckCategory as calendarCategory } from "@/components/Calendar/puck";
import { cardPuckConfig, puckCategory as cardCategory } from "@/components/Card/puck";
import { carouselPuckConfig, puckCategory as carouselCategory } from "@/components/Carousel/puck";
import { chartPuckConfig, puckCategory as chartCategory } from "@/components/Chart/puck";
import { checkboxPuckConfig, puckCategory as checkboxCategory } from "@/components/Checkbox/puck";
import { collapsiblePuckConfig, puckCategory as collapsibleCategory } from "@/components/Collapsible/puck";
import { comboboxPuckConfig, puckCategory as comboboxCategory } from "@/components/Combobox/puck";
import { commandPuckConfig, puckCategory as commandCategory } from "@/components/Command/puck";
import { contextMenuPuckConfig, puckCategory as contextMenuCategory } from "@/components/ContextMenu/puck";
import { dataTablePuckConfig, puckCategory as dataTableCategory } from "@/components/DataTable/puck";
import { datePickerPuckConfig, puckCategory as datePickerCategory } from "@/components/DatePicker/puck";
import { directionPuckConfig, puckCategory as directionCategory } from "@/components/Direction/puck";
import { drawerPuckConfig, puckCategory as drawerCategory } from "@/components/Drawer/puck";
import { dialogPuckConfig, puckCategory as dialogCategory } from "@/components/Dialog/puck";
import { dropdownMenuPuckConfig, puckCategory as dropdownMenuCategory } from "@/components/DropdownMenu/puck";
import { emptyPuckConfig, puckCategory as emptyCategory } from "@/components/Empty/puck";
import { fieldPuckConfig, puckCategory as fieldCategory } from "@/components/Field/puck";
import { flexPuckConfig, puckCategory as flexCategory } from "@/components/Flex/puck";
import { gridPuckConfig, puckCategory as gridCategory } from "@/components/Grid/puck";
import { heroCardPuckConfig, puckCategory as heroCardCategory } from "@/components/HeroCard/puck";
import { hoverCardPuckConfig, puckCategory as hoverCardCategory } from "@/components/HoverCard/puck";
import { imagePuckConfig, puckCategory as imageCategory } from "@/components/Image/puck";
import { inputOtpPuckConfig, puckCategory as inputOtpCategory } from "@/components/InputOTP/puck";
import { inputPuckConfig, puckCategory as inputCategory } from "@/components/Input/puck";
import { inputGroupPuckConfig, puckCategory as inputGroupCategory } from "@/components/InputGroup/puck";
import { itemPuckConfig, puckCategory as itemCategory } from "@/components/Item/puck";
import { kbdPuckConfig, puckCategory as kbdCategory } from "@/components/Kbd/puck";
import { labelPuckConfig, puckCategory as labelCategory } from "@/components/Label/puck";
import { menubarPuckConfig, puckCategory as menubarCategory } from "@/components/Menubar/puck";
import { nativeSelectPuckConfig, puckCategory as nativeSelectCategory } from "@/components/NativeSelect/puck";
import { sectionPuckConfig, puckCategory as sectionCategory } from "@/components/Section/puck";
import { spacePuckConfig, puckCategory as spaceCategory } from "@/components/Space/puck";
import { textPuckConfig, puckCategory as textCategory } from "@/components/Text/puck";
import type { Components, PuckCategory } from "@/puck/types";

const categoryTitles: Record<PuckCategory, string> = {
  atoms: "Atoms",
  molecules: "Molecules",
  organisms: "Organisms",
  layout: "Layout",
};

const componentCategories: Array<{ name: keyof Components; category: PuckCategory }> = [
  { name: "Button", category: buttonCategory },
  { name: "Badge", category: badgeCategory },
  { name: "Text", category: textCategory },
  { name: "Image", category: imageCategory },
  { name: "Checkbox", category: checkboxCategory },
  { name: "Breadcrumb", category: breadcrumbCategory },
  { name: "Accordion", category: accordionCategory },
  { name: "Alert", category: alertCategory },
  { name: "AlertDialog", category: alertDialogCategory },
  { name: "Calendar", category: calendarCategory },
  { name: "Carousel", category: carouselCategory },
  { name: "Chart", category: chartCategory },
  { name: "Collapsible", category: collapsibleCategory },
  { name: "Combobox", category: comboboxCategory },
  { name: "Command", category: commandCategory },
  { name: "ContextMenu", category: contextMenuCategory },
  { name: "DataTable", category: dataTableCategory },
  { name: "DatePicker", category: datePickerCategory },
  { name: "Direction", category: directionCategory },
  { name: "Drawer", category: drawerCategory },
  { name: "Dialog", category: dialogCategory },
  { name: "DropdownMenu", category: dropdownMenuCategory },
  { name: "Empty", category: emptyCategory },
  { name: "Field", category: fieldCategory },
  { name: "HoverCard", category: hoverCardCategory },
  { name: "Input", category: inputCategory },
  { name: "InputOTP", category: inputOtpCategory },
  { name: "InputGroup", category: inputGroupCategory },
  { name: "Item", category: itemCategory },
  { name: "Kbd", category: kbdCategory },
  { name: "Label", category: labelCategory },
  { name: "Menubar", category: menubarCategory },
  { name: "NativeSelect", category: nativeSelectCategory },
  { name: "AspectRatio", category: aspectRatioCategory },
  { name: "Avatar", category: avatarCategory },
  { name: "Card", category: cardCategory },
  { name: "Section", category: sectionCategory },
  { name: "HeroCard", category: heroCardCategory },
  { name: "Grid", category: gridCategory },
  { name: "Flex", category: flexCategory },
  { name: "Space", category: spaceCategory },
];

const categories = Object.fromEntries(
  (["atoms", "molecules", "organisms", "layout"] as const).map((key) => [
    key,
    {
      title: categoryTitles[key],
      defaultExpanded: true,
      components: componentCategories.filter((c) => c.category === key).map((c) => c.name),
    },
  ])
) as Config<Components>["categories"];

export type { Components } from "@/puck/types";

export const config: Config<Components> = {
  categories,
  components: {
    ...accordionPuckConfig,
    ...alertDialogPuckConfig,
    ...alertPuckConfig,
    ...aspectRatioPuckConfig,
    ...avatarPuckConfig,
    ...breadcrumbPuckConfig,
    ...buttonPuckConfig,
    ...calendarPuckConfig,
    ...cardPuckConfig,
    ...carouselPuckConfig,
    ...chartPuckConfig,
    ...collapsiblePuckConfig,
    ...comboboxPuckConfig,
    ...commandPuckConfig,
    ...contextMenuPuckConfig,
    ...dataTablePuckConfig,
    ...datePickerPuckConfig,
    ...directionPuckConfig,
    ...drawerPuckConfig,
    ...dialogPuckConfig,
    ...dropdownMenuPuckConfig,
    ...emptyPuckConfig,
    ...fieldPuckConfig,
    ...hoverCardPuckConfig,
    ...inputPuckConfig,
    ...inputOtpPuckConfig,
    ...inputGroupPuckConfig,
    ...itemPuckConfig,
    ...kbdPuckConfig,
    ...labelPuckConfig,
    ...menubarPuckConfig,
    ...nativeSelectPuckConfig,
    ...checkboxPuckConfig,
    ...imagePuckConfig,
    ...badgePuckConfig,
    ...textPuckConfig,
    ...sectionPuckConfig,
    ...heroCardPuckConfig,
    ...gridPuckConfig,
    ...flexPuckConfig,
    ...spacePuckConfig,
  } as Config<Components>["components"],
  root: {
    render: ({ children }) => (
      <div className="min-h-full bg-background">
        {children}
      </div>
    ),
  },
};
