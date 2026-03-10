import { Badge } from "@/components/Badge/Badge";
import { iconNames } from "lucide-react/dynamic";
import type { Components } from "@/puck/types";

type BadgeProps = Components["Badge"];

const lucideIconOptions = [
  { label: "None", value: "" },
  ...[...iconNames].sort((a, b) => a.localeCompare(b)).map((name) => ({ label: name, value: name })),
];

const baseFields = {
  text: { type: "text" as const, label: "Text" },
  variant: {
    type: "select" as const,
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
    type: "radio" as const,
    label: "Show icon",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  icon: {
    type: "select" as const,
    label: "Icon",
    options: lucideIconOptions,
  },
  iconPosition: {
    type: "radio" as const,
    label: "Icon position",
    options: [
      { label: "Left", value: "left" },
      { label: "Right", value: "right" },
    ],
  },
  showSpinner: {
    type: "radio" as const,
    label: "Show spinner",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  spinnerPosition: {
    type: "radio" as const,
    label: "Spinner position",
    options: [
      { label: "Left", value: "left" },
      { label: "Right", value: "right" },
    ],
  },
  useAsLink: {
    type: "radio" as const,
    label: "Render as link",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  href: { type: "text" as const, label: "Link URL" },
  openInNewTab: {
    type: "radio" as const,
    label: "Open in new tab",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  className: { type: "text" as const, label: "Class name" },
  id: { type: "text" as const, label: "ID" },
};

export const badgePuckConfig = {
  Badge: {
    label: "Badge",
    resolveFields: (data: { props: BadgeProps }) => {
      const showIcon = data.props.showIcon === true;
      const showSpinner = data.props.showSpinner === true;
      const useAsLink = data.props.useAsLink === true;
      return {
        text: baseFields.text,
        variant: baseFields.variant,
        showIcon: baseFields.showIcon,
        ...(showIcon ? { icon: baseFields.icon, iconPosition: baseFields.iconPosition } : {}),
        showSpinner: baseFields.showSpinner,
        ...(showSpinner ? { spinnerPosition: baseFields.spinnerPosition } : {}),
        useAsLink: baseFields.useAsLink,
        ...(useAsLink ? { href: baseFields.href, openInNewTab: baseFields.openInNewTab } : {}),
        className: baseFields.className,
        id: baseFields.id,
      };
    },
    fields: baseFields,
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
