import type { ComponentType } from "react";
import { AvatarGroup } from "@/components/AvatarGroup/AvatarGroup";
import { iconNames } from "lucide-react/dynamic";
import type { AreaContentProps, Components } from "@/puck/types";

type AvatarGroupProps = Components["AvatarGroup"];

const avatarGroupContentAllow = ["Avatar"] as const;

const countIconOptions = [
  { label: "None", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

const defaultProps: AvatarGroupProps = {
  content: [],
  showCount: false,
  count: "",
  countIcon: "plus",
  countDisplay: "count",
  countSize: "md",
  className: "",
  id: "",
};

export const avatarGroupPuckConfig = {
  AvatarGroup: {
    label: "Avatar group",
    resolveData: ({ props }: { props: AvatarGroupProps }) => {
      const content = props.content;
      if (!Array.isArray(content)) return { props };
      const avatarCount = content.length;
      const count = props.showCount ? String(avatarCount) : props.count;
      return {
        props: { ...props, count },
      };
    },
    fields: {
      content: {
        type: "slot" as const,
        label: "Avatars (drag Avatar here)",
        allow: [...avatarGroupContentAllow],
      },
      showCount: {
        type: "radio" as const,
        label: "Show count",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      count: {
        type: "text" as const,
        label: "Count (manual; auto when avatars in slot)",
      },
      countIcon: {
        type: "select" as const,
        label: "Count icon",
        options: countIconOptions,
      },
      countDisplay: {
        type: "radio" as const,
        label: "Display",
        options: [
          { label: "Icon", value: "icon" },
          { label: "Count", value: "count" },
        ],
      },
      countSize: {
        type: "select" as const,
        label: "Count size",
        options: [
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      className: { type: "text" as const, label: "Class name" },
      id: { type: "text" as const, label: "ID" },
    },
    defaultProps,
    render: (props: AvatarGroupProps) => {
      const { content, ...avatarGroupProps } = props;
      const avatarCount = Array.isArray(content) ? content.length : undefined;
      const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
      const displayCount =
        avatarGroupProps.showCount && avatarCount !== undefined
          ? String(avatarCount)
          : avatarGroupProps.count ?? "";

      return (
        <AvatarGroup
          showCount={avatarGroupProps.showCount ?? false}
          count={displayCount}
          countIcon={avatarGroupProps.countIcon ?? ""}
          countDisplay={avatarGroupProps.countDisplay ?? "count"}
          countSize={avatarGroupProps.countSize ?? "md"}
          className={avatarGroupProps.className ?? ""}
          id={avatarGroupProps.id ?? ""}
        >
          {Content ? (
            <Content
              allow={["Avatar"]}
              className="inline-flex w-max min-w-[80px] flex-row items-center flex-none"
              minEmptyHeight={80}
            />
          ) : null}
        </AvatarGroup>
      );
    },
  },
};
