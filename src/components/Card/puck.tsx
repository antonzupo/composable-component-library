import type { ComponentType } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card/Card";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const cardPuckConfig = {
  Card: {
    label: "Card",
    fields: {
      title: { type: "text", label: "Title" },
      description: { type: "text", label: "Description" },
      content: { type: "slot", label: "Content" },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
      showHeader: {
        type: "select",
        label: "Show header",
        options: [{ label: "Yes", value: true }, { label: "No", value: false }],
      },
      showDescription: {
        type: "select",
        label: "Show description",
        options: [{ label: "Yes", value: true }, { label: "No", value: false }],
      },
    },
    defaultProps: {
      title: "Card title",
      description: "Card description",
      content: [],
      className: "",
      id: "",
      showHeader: true,
      showDescription: true,
    },
    render: ({ title, description, content, className, id, showHeader, showDescription }: Components["Card"]) => {
      const Content = content as unknown as ComponentType | undefined;
      return (
        <Card className={className || undefined} id={id || undefined}>
          {showHeader && (
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              {showDescription && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          )}
          <CardContent>
            {Content ? <Content /> : null}
          </CardContent>
        </Card>
      );
    },
  },
};
