import { Avatar } from "@/components/Avatar/Avatar";
import { iconNames } from "lucide-react/dynamic";
import type { Components } from "@/puck/types";

type AvatarProps = Components["Avatar"];

const badgeIconOptions = [
  { label: "None", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

export const avatarPuckConfig = {
  Avatar: {
    label: "Avatar",
    fields: {
      src: { type: "text", label: "Image URL" },
      alt: { type: "text", label: "Alt text" },
      fallback: { type: "text", label: "Fallback text" },
      size: {
        type: "select",
        label: "Size",
        options: [
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      rounded: {
        type: "select",
        label: "Rounded",
        options: [
          { label: "Full", value: "full" },
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      showBadge: {
        type: "radio",
        label: "Show badge",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      badgeContent: { type: "text", label: "Badge content (leave empty for dot)" },
      badgeIcon: {
        type: "select",
        label: "Badge icon",
        options: badgeIconOptions,
      },
      badgePosition: {
        type: "select",
        label: "Badge position",
        options: [
          { label: "Top right", value: "top-right" },
          { label: "Top left", value: "top-left" },
          { label: "Bottom right", value: "bottom-right" },
          { label: "Bottom left", value: "bottom-left" },
        ],
      },
      badgeVariant: {
        type: "select",
        label: "Badge variant",
        options: [
          { label: "Default (green)", value: "default" },
          { label: "Secondary", value: "secondary" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Ghost", value: "ghost" },
        ],
      },
      badgeColorClass: {
        type: "text",
        label: "Badge color (Tailwind class, overrides variant)",
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      src: "",
      alt: "",
      fallback: "?",
      size: "md" as const,
      rounded: "full" as const,
      showBadge: false,
      badgeContent: "",
      badgeIcon: "",
      badgePosition: "top-right" as const,
      badgeVariant: "default" as const,
      badgeColorClass: "",
      className: "",
      id: "",
    },
    render: (props: AvatarProps) => <Avatar {...props} />,
  },
};
