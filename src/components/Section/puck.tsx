import type { ComponentType } from "react";
import { Section } from "@/components/Section/Section";
import type { Components } from "@/puck/types";

export const sectionPuckConfig = {
  Section: {
    label: "Section",
    fields: {
      content: { type: "slot", label: "Content" },
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
