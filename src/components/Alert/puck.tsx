import type { ComponentType, ReactNode } from "react";
import {
  Alert as AlertRoot,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

const alertActionAllow = ["Button", "Text", "Badge", "Flex", "Space"] as const;

const defaultProps: Components["Alert"] = {
  title: "Alert title",
  description: "Alert description text.",
  showTitle: true,
  variant: "default",
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
      className,
      id,
    }: Components["Alert"]) => {
      const ActionContent = alertAction as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const isSlotFunction = typeof ActionContent === "function";

      return (
        <AlertRoot
          variant={variant}
          role="alert"
          className={cn(
            "w-full",
            showAction && "flex flex-row items-start gap-3 overflow-x-hidden",
            className
          )}
          id={id || undefined}
        >
          <div
            className={cn(
              "space-y-1 break-words",
              showAction && "min-w-0 flex-1"
            )}
          >
            {showTitle && title ? <AlertTitle>{title}</AlertTitle> : null}
            {description ? (
              <AlertDescription>{description}</AlertDescription>
            ) : null}
          </div>
          {isSlotFunction ? (
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
          )}
        </AlertRoot>
      );
    },
  },
};
