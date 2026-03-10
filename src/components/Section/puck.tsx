import type { ComponentType } from "react";
import { Section } from "@/components/Section/Section";
import type { Components } from "@/puck/types";

const sectionContentAllow = [
  "Typography",
  "Badge",
  "Button",
  "Image",
  "Card",
  "Accordion",
  "Alert",
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
  "Dialog",
  "Drawer",
  "DropdownMenu",
  "Empty",
  "Field",
  "Flex",
  "Grid",
  "HeroCard",
  "HoverCard",
  "Input",
  "InputGroup",
  "Item",
  "Menubar",
  "NavigationMenu",
  "Pagination",
  "Popover",
  "Progress",
  "Resizable",
  "ScrollArea",
  "Select",
  "Sheet",
  "Sidebar",
  "Space",
] as const;

export const sectionPuckConfig = {
  Section: {
    label: "Section",
    fields: {
      content: { type: "slot", label: "Content", allow: [...sectionContentAllow] },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: { content: [], className: "", id: "" },
    render: ({ content, className, id }: Components["Section"]) => {
      const Content = content as unknown as ComponentType | undefined;
      return (
        <Section content={content} className={className ?? ""} id={id ?? ""}>
          {Content ? <Content /> : null}
        </Section>
      );
    },
  },
};
