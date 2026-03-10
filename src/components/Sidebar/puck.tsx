import type { ComponentType } from "react";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import type { AreaContentProps, Components } from "@/puck/types";

type SidebarProps = Components["Sidebar"];

const slotAllow = [
  "Typography",
  "Badge",
  "Button",
  "Image",
  "Checkbox",
  "Card",
  "Accordion",
  "Alert",
  "AlertDialog",
  "AspectRatio",
  "Avatar",
  "Breadcrumb",
  "Calendar",
  "Carousel",
  "Chart",
  "Collapsible",
  "Combobox",
  "Command",
  "ContextMenu",
  "DataTable",
  "DatePicker",
  "Direction",
  "Dialog",
  "Drawer",
  "Flex",
  "Grid",
  "HeroCard",
  "Section",
  "Space",
] as const;

export const sidebarPuckConfig = {
  Sidebar: {
    label: "Sidebar",
    fields: {
      defaultOpen: {
        type: "radio" as const,
        label: "Default open",
        options: [
          { label: "Open", value: true },
          { label: "Collapsed", value: false },
        ],
      },
      side: {
        type: "select" as const,
        label: "Side",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
      variant: {
        type: "select" as const,
        label: "Variant",
        options: [
          { label: "Sidebar", value: "sidebar" },
          { label: "Floating", value: "floating" },
          { label: "Inset", value: "inset" },
        ],
      },
      collapsible: {
        type: "select" as const,
        label: "Collapsible",
        options: [
          { label: "Offcanvas", value: "offcanvas" },
          { label: "Icon", value: "icon" },
          { label: "None", value: "none" },
        ],
      },
      sidebarContent: {
        type: "slot" as const,
        label: "Sidebar content",
        allow: [...slotAllow],
      },
      mainContent: {
        type: "slot" as const,
        label: "Main content",
        allow: [...slotAllow],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      defaultOpen: true,
      side: "left",
      variant: "sidebar",
      collapsible: "offcanvas",
      sidebarContent: [],
      mainContent: [],
      className: "",
      id: "",
    } satisfies SidebarProps,
    render: ({
      defaultOpen,
      side,
      variant,
      collapsible,
      sidebarContent,
      mainContent,
      className,
      id,
    }: SidebarProps) => {
      const SidebarContentSlot = sidebarContent as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const MainContentSlot = mainContent as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasSidebarContent =
        SidebarContentSlot && !Array.isArray(sidebarContent);
      const hasMainContent = MainContentSlot && !Array.isArray(mainContent);
      return (
        <Sidebar
          defaultOpen={defaultOpen}
          side={side}
          variant={variant}
          collapsible={collapsible}
          sidebarContent={
            hasSidebarContent ? <SidebarContentSlot /> : undefined
          }
          mainContent={hasMainContent ? <MainContentSlot /> : undefined}
          className={className || undefined}
          id={id || undefined}
        />
      );
    },
  },
};
