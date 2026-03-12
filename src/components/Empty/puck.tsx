import type { ComponentType } from "react";
import { iconNames } from "lucide-react/dynamic";
import { Empty } from "@/components/Empty/Empty";
import { SLOT_ALLOW_DEFAULT } from "@/puck/allowLists";
import type { AreaContentProps, Components } from "@/puck/types";

const lucideIconOptions = [
  { label: "— None —", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

export const emptyPuckConfig = {
  Empty: {
    label: "Empty",
    fields: {
      title: { type: "text", label: "Title" },
      description: { type: "textarea", label: "Description" },
      mediaVariant: {
        type: "select" as const,
        label: "Empty media",
        options: [
          { label: "Default", value: "default" },
          { label: "Icon", value: "icon" },
          { label: "Avatar", value: "avatar" },
        ],
      },
      icon: {
        type: "select" as const,
        label: "Icon (when media is Icon)",
        options: lucideIconOptions,
      },
      avatarImageUrl: {
        type: "text" as const,
        label: "Avatar image URL (when media is Avatar)",
      },
      content: {
        type: "slot" as const,
        label: "Content (e.g. action button below text)",
        allow: [...SLOT_ALLOW_DEFAULT],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      title: "No results",
      description: "Get started by adding content.",
      mediaVariant: "icon" as const,
      icon: "",
      avatarImageUrl: "",
      content: [],
      className: "",
      id: "",
    },
    render: ({
      title,
      description,
      mediaVariant,
      icon,
      avatarImageUrl,
      content,
      className,
      id,
    }: Components["Empty"]) => {
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const hasContent =
        Content && !Array.isArray(content);
      return (
        <Empty
          title={title || "No results"}
          description={description || undefined}
          mediaVariant={mediaVariant}
          icon={icon || undefined}
          avatarImageUrl={avatarImageUrl || undefined}
          className={className || undefined}
          id={id || undefined}
        >
          {hasContent ? <Content /> : undefined}
        </Empty>
      );
    },
  },
};
