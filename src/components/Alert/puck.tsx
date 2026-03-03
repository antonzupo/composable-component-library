import type { ComponentType, ReactNode } from "react";
import { Alert } from "@/components/Alert/Alert";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

const alertActionAllow = ["Button", "Text", "Badge", "Flex", "Space"] as const;

const alertIconOptions = [
  { label: "None", value: "" },
  { label: "Check circle (success)", value: "check-circle-2" },
  { label: "Info", value: "info" },
  { label: "Alert circle (error)", value: "alert-circle" },
  { label: "Alert triangle (warning)", value: "alert-triangle" },
  { label: "X circle", value: "x-circle" },
];

const defaultProps: Components["Alert"] = {
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

export const alertPuckConfig = {
  Alert: {
    label: "Alert",
    fields: {
      title: { type: "text", label: "Title" },
      description: { type: "textarea", label: "Description" },
      showTitle: {
        type: "select",
        label: "Show title",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Destructive", value: "destructive" },
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
        options: alertIconOptions,
      },
      showAction: {
        type: "select",
        label: "Show action",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      alertAction: {
        type: "slot",
        label: "Alert action (e.g. button)",
        allow: [...alertActionAllow],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
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
    }: Components["Alert"]) => {
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
