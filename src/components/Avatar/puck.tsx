import { Avatar } from "@/components/Avatar/Avatar";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "atoms";

export const avatarPuckConfig = {
  Avatar: {
    label: "Avatar",
    fields: {
      src: { type: "text", label: "Image URL" },
      alt: { type: "text", label: "Alt text" },
      fallback: { type: "text", label: "Fallback (e.g. name for initials)" },
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
          { label: "Full (circle)", value: "full" },
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
      fallback: "AB",
      size: "md" as const,
      rounded: "full" as const,
      className: "",
      id: "",
    },
    render: (props: Components["Avatar"]) => (
      <Avatar
        src={props.src || undefined}
        alt={props.alt}
        fallback={props.fallback}
        size={props.size}
        rounded={props.rounded}
        className={props.className || undefined}
        id={props.id || undefined}
      />
    ),
  },
};
