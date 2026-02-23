import type { ComponentType } from "react";
import { AspectRatio } from "@/components/AspectRatio/AspectRatio";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "layout";

export const aspectRatioPuckConfig = {
  AspectRatio: {
    label: "Aspect Ratio",
    fields: {
      content: { type: "slot", label: "Content" },
      ratio: {
        type: "select",
        label: "Ratio",
        options: [
          { label: "1:1", value: "1/1" },
          { label: "4:3", value: "4/3" },
          { label: "3:4", value: "3/4" },
          { label: "16:9", value: "16/9" },
          { label: "9:16", value: "9/16" },
          { label: "21:9", value: "21/9" },
          { label: "9:21", value: "9/21" },
        ],
      },
      objectFit: {
        type: "select",
        label: "Object fit",
        options: [
          { label: "Cover", value: "cover" },
          { label: "Contain", value: "contain" },
          { label: "Fill", value: "fill" },
          { label: "None", value: "none" },
        ],
      },
      rounded: {
        type: "select",
        label: "Rounded",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
          { label: "Full", value: "full" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      content: [],
      ratio: "16/9" as const,
      objectFit: "cover" as const,
      rounded: "none" as const,
      className: "",
      id: "",
    },
    render: ({ content, ratio, objectFit, rounded, className, id }: Components["AspectRatio"]) => {
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      return (
        <AspectRatio
          ratio={ratio}
          objectFit={objectFit}
          rounded={rounded}
          className={className || undefined}
          id={id || undefined}
        >
          {Content ? <Content minEmptyHeight={120} /> : null}
        </AspectRatio>
      );
    },
  },
};
