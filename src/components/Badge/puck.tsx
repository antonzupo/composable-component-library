import { Badge } from "@/components/Badge/Badge";
import { iconNames } from "lucide-react/dynamic";
import type { Components } from "@/puck/types";

type BadgeProps = Components["Badge"];

const lucideIconOptions = [
  { label: "None", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

export const badgePuckConfig = {
  Badge: {
    label: "Badge",
    fields: {
      text: { type: "text", label: "Text" },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Secondary", value: "secondary" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Ghost", value: "ghost" },
        ],
      },
      showIcon: {
        type: "radio",
        label: "Show icon",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      icon: {
        type: "select",
        label: "Icon",
        options: lucideIconOptions,
      },
      iconPosition: {
        type: "select",
        label: "Icon position",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
      showSpinner: {
        type: "radio",
        label: "Show spinner",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      spinnerPosition: {
        type: "select",
        label: "Spinner position",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
      useAsLink: {
        type: "radio",
        label: "Render as link",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      href: { type: "text", label: "Link URL" },
      openInNewTab: {
        type: "radio",
        label: "Open in new tab",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      text: "Badge",
      variant: "default" as const,
      showIcon: false,
      icon: "",
      iconPosition: "left" as const,
      showSpinner: false,
      spinnerPosition: "right" as const,
      useAsLink: false,
      href: "",
      openInNewTab: false,
      className: "",
      id: "",
    },
    render: ({
      text = "Badge",
      variant,
      showIcon,
      icon,
      iconPosition,
      showSpinner,
      spinnerPosition,
      useAsLink,
      href,
      openInNewTab,
      className,
      id,
    }: BadgeProps) => {
      return (
        <Badge
          variant={variant}
          showIcon={showIcon}
          icon={icon || undefined}
          iconPosition={iconPosition}
          showSpinner={showSpinner}
          spinnerPosition={spinnerPosition}
          useAsLink={useAsLink}
          href={href || undefined}
          openInNewTab={openInNewTab}
          className={className || undefined}
          id={id || undefined}
        >
          {text}
        </Badge>
      );
    },
  },
};
