import type { Config } from "@puckeditor/core";
// Import only the component configs you need; remove imports and spread entries to exclude components.
import { accordionPuckConfig, puckCategory as accordionCategory } from "@/components/Accordion/puck";
import { alertDialogPuckConfig, puckCategory as alertDialogCategory } from "@/components/AlertDialog/puck";
import { alertPuckConfig, puckCategory as alertCategory } from "@/components/Alert/puck";
import { aspectRatioPuckConfig, puckCategory as aspectRatioCategory } from "@/components/AspectRatio/puck";
import { avatarPuckConfig, puckCategory as avatarCategory } from "@/components/Avatar/puck";
import { badgePuckConfig, puckCategory as badgeCategory } from "@/components/Badge/puck";
import { buttonPuckConfig, puckCategory as buttonCategory } from "@/components/Button/puck";
import { cardPuckConfig, puckCategory as cardCategory } from "@/components/Card/puck";
import { flexPuckConfig, puckCategory as flexCategory } from "@/components/Flex/puck";
import { gridPuckConfig, puckCategory as gridCategory } from "@/components/Grid/puck";
import { heroCardPuckConfig, puckCategory as heroCardCategory } from "@/components/HeroCard/puck";
import { imagePuckConfig, puckCategory as imageCategory } from "@/components/Image/puck";
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
  { name: "Accordion", category: accordionCategory },
  { name: "Alert", category: alertCategory },
  { name: "AlertDialog", category: alertDialogCategory },
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
    ...buttonPuckConfig,
    ...imagePuckConfig,
    ...badgePuckConfig,
    ...textPuckConfig,
    ...cardPuckConfig,
    ...sectionPuckConfig,
    ...heroCardPuckConfig,
    ...gridPuckConfig,
    ...flexPuckConfig,
    ...spacePuckConfig,
  } as Config<Components>["components"],
  root: {
    render: ({ children }) => <div>{children}</div>,
  },
};
