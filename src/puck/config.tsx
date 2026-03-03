import type { Config } from "@puckeditor/core";

import { accordionPuckConfig } from "@/components/Accordion/puck";
import { alertDialogPuckConfig } from "@/components/AlertDialog/puck";
import { alertPuckConfig } from "@/components/Alert/puck";
import { aspectRatioPuckConfig } from "@/components/AspectRatio/puck";
import { avatarPuckConfig } from "@/components/Avatar/puck";
import { avatarGroupPuckConfig } from "@/components/AvatarGroup/puck";
import { badgePuckConfig } from "@/components/Badge/puck";
import { breadcrumbPuckConfig } from "@/components/Breadcrumb/puck";
import { buttonPuckConfig } from "@/components/Button/puck";
import { buttonGroupPuckConfig } from "@/components/ButtonGroup/puck";
import { calendarPuckConfig } from "@/components/Calendar/puck";
import { cardPuckConfig } from "@/components/Card/puck";
import { carouselPuckConfig } from "@/components/Carousel/puck";
import { chartPuckConfig } from "@/components/Chart/puck";
import { checkboxPuckConfig } from "@/components/Checkbox/puck";
import { collapsiblePuckConfig } from "@/components/Collapsible/puck";
import { comboboxPuckConfig } from "@/components/Combobox/puck";
import { commandPuckConfig } from "@/components/Command/puck";
import { contextMenuPuckConfig } from "@/components/ContextMenu/puck";
import { dataTablePuckConfig } from "@/components/DataTable/puck";
import { datePickerPuckConfig } from "@/components/DatePicker/puck";
import { directionPuckConfig } from "@/components/Direction/puck";
import { drawerPuckConfig } from "@/components/Drawer/puck";
import { dialogPuckConfig } from "@/components/Dialog/puck";
import { dropdownMenuPuckConfig } from "@/components/DropdownMenu/puck";
import { emptyPuckConfig } from "@/components/Empty/puck";
import { fieldPuckConfig } from "@/components/Field/puck";
import { flexPuckConfig } from "@/components/Flex/puck";
import { gridPuckConfig } from "@/components/Grid/puck";
import { heroCardPuckConfig } from "@/components/HeroCard/puck";
import { hoverCardPuckConfig } from "@/components/HoverCard/puck";
import { imagePuckConfig } from "@/components/Image/puck";
import { inputOtpPuckConfig } from "@/components/InputOTP/puck";
import { inputPuckConfig } from "@/components/Input/puck";
import { inputGroupPuckConfig } from "@/components/InputGroup/puck";
import { itemPuckConfig } from "@/components/Item/puck";
import { kbdPuckConfig } from "@/components/Kbd/puck";
import { labelPuckConfig } from "@/components/Label/puck";
import { menubarPuckConfig } from "@/components/Menubar/puck";
import { nativeSelectPuckConfig } from "@/components/NativeSelect/puck";
import { popoverPuckConfig } from "@/components/Popover/puck";
import { progressPuckConfig } from "@/components/Progress/puck";
import { sectionPuckConfig } from "@/components/Section/puck";
import { spacePuckConfig } from "@/components/Space/puck";
import { textPuckConfig } from "@/components/Text/puck";
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

export const config: Config<Components> = {
  categories,
  components: {
    ...accordionPuckConfig,
    ...alertDialogPuckConfig,
    ...alertPuckConfig,
    ...aspectRatioPuckConfig,
    ...avatarPuckConfig,
    ...avatarGroupPuckConfig,
    ...breadcrumbPuckConfig,
    ...buttonPuckConfig,
    ...buttonGroupPuckConfig,
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
    ...popoverPuckConfig,
    ...progressPuckConfig,
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
