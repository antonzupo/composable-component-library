import type { ComponentType, ReactNode } from "react";
import { Alert } from "@/components/Alert/Alert";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

const alertActionAllow = ["Button", "Typography", "Badge", "Flex", "Space"] as const;

const alertIconOptions = [
  { label: "None", value: "" },
  { label: "Check circle (success)", value: "check-circle-2" },
  { label: "Info", value: "info" },
  { label: "Alert circle (error)", value: "alert-circle" },
  { label: "Alert triangle (warning)", value: "alert-triangle" },
  { label: "X circle", value: "x-circle" },
];

type AlertProps = Components["Alert"];

const defaultProps: AlertProps = {
  title: "Alert title",
  description: "Alert description text.",
  showTitle: true,
  variant: "default",
  showIcon: false,
  icon: "",
  showAction: false,
  alertAction: [],
  className: "",
  id: "",
};

const baseFields = {
  title: { type: "text" as const, label: "Title" },
  description: { type: "textarea" as const, label: "Description" },
  showTitle: {
    type: "radio" as const,
    label: "Show title",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  variant: {
    type: "radio" as const,
    label: "Variant",
    options: [
      { label: "Default", value: "default" },
      { label: "Destructive", value: "destructive" },
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
    options: alertIconOptions,
  },
  showAction: {
    type: "radio" as const,
    label: "Show action",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
  alertAction: {
    type: "slot" as const,
    label: "Alert action (e.g. button)",
    allow: [...alertActionAllow],
  },
  className: { type: "text" as const, label: "Class name" },
  id: { type: "text" as const, label: "ID" },
};

export const alertPuckConfig = {
  Alert: {
    label: "Alert",
    resolveFields: (data: { props: AlertProps }) => {
      const showIcon = data.props.showIcon === true;
      const showAction = data.props.showAction === true;
      return {
        title: baseFields.title,
        description: baseFields.description,
        showTitle: baseFields.showTitle,
        variant: baseFields.variant,
        showIcon: baseFields.showIcon,
        ...(showIcon ? { icon: baseFields.icon } : {}),
        showAction: baseFields.showAction,
        ...(showAction ? { alertAction: baseFields.alertAction } : {}),
        className: baseFields.className,
        id: baseFields.id,
      };
    },
    fields: baseFields,
    defaultProps,
    render: ({
      alertAction,
      showAction = false,
      title = "",
      description = "",
      showTitle = true,
      variant = "default",
      showIcon = false,
      icon = "",
      className,
      id,
    }: AlertProps) => {
      const ActionContent = alertAction as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const isSlotFunction = typeof ActionContent === "function";

      const actionChildren = isSlotFunction ? (
        <ActionContent
          className={cn(
            "flex min-h-[44px] min-w-0 max-w-[28%] shrink flex-wrap items-center justify-end gap-2 pl-0",
            showAction ? "ml-auto" : "hidden"
          )}
          minEmptyHeight={44}
        />
      ) : (
        <div
          className={cn(
            "flex min-h-[44px] min-w-0 max-w-[28%] shrink flex-wrap items-center justify-end gap-2 pl-0",
            showAction ? "ml-auto" : "hidden"
          )}
        >
          {ActionContent != null && !Array.isArray(ActionContent) ? (
            (ActionContent as ReactNode)
          ) : (
            <span className="text-muted-foreground text-sm whitespace-nowrap">
              Add action
            </span>
          )}
        </div>
      );

      return (
        <Alert
          title={title}
          description={description}
          showTitle={showTitle}
          variant={variant}
          showIcon={showIcon}
          icon={icon}
          showAction={showAction}
          alertAction={alertAction}
          className={cn("overflow-x-hidden", className)}
          id={id}
        >
          {actionChildren}
        </Alert>
      );
    },
  },
};
