import type { ComponentType } from "react";
import { Direction } from "@/components/Direction/Direction";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "layout";

export const directionPuckConfig = {
  Direction: {
    label: "Direction",
    fields: {
      dir: {
        type: "select",
        label: "Direction",
        options: [
          { label: "Left to right (LTR)", value: "ltr" },
          { label: "Right to left (RTL)", value: "rtl" },
        ],
      },
      content: { type: "slot", label: "Content" },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      dir: "ltr",
      content: [],
      className: "",
      id: "",
    },
    render: ({ dir, content, className, id }: Components["Direction"]) => {
      const Content = content as unknown as ComponentType | undefined;
      return (
        <Direction dir={dir} className={className || undefined} id={id || undefined}>
          {Content ? <Content /> : null}
        </Direction>
      );
    },
  },
};
