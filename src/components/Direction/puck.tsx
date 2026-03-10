import type { ComponentType } from "react";
import { Direction } from "@/components/Direction/Direction";
import type { Components } from "@/puck/types";

type DirectionProps = Components["Direction"];

export const directionPuckConfig = {
  Direction: {
    label: "Direction",
    fields: {
      dir: {
        type: "radio" as const,
        label: "Direction",
        options: [
          { label: "Left to right (LTR)", value: "ltr" },
          { label: "Right to left (RTL)", value: "rtl" },
        ],
      },
      content: { type: "slot" as const, label: "Content" },
      className: { type: "text" as const, label: "Class name" },
      id: { type: "text" as const, label: "ID" },
    },
    defaultProps: {
      dir: "ltr",
      content: [],
      className: "",
      id: "",
    } satisfies DirectionProps,
    render: ({ dir, content, className, id }: DirectionProps) => {
      const Content = content as unknown as ComponentType | undefined;
      return (
        <Direction dir={dir} content={content} className={className ?? ""} id={id ?? ""}>
          {Content ? <Content /> : null}
        </Direction>
      );
    },
  },
};
