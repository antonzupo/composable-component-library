import { Avatar } from "@/components/Avatar/Avatar";
import type { Components, PuckCategory } from "@/puck/types";

type AvatarProps = Components["Avatar"];

export const puckCategory: PuckCategory = "atoms";

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
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      src: "",
      alt: "",
      fallback: "?",
      size: "md" as const,
      rounded: "full" as const,
      className: "",
      id: "",
    },
    render: (props: AvatarProps) => <Avatar {...props} />,
  },
};
