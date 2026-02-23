import { Alert, AlertDescription, AlertTitle, AlertIcon, alertAlignClass } from "@/components/Alert/Alert";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

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
          { label: "Success", value: "success" },
          { label: "Warning", value: "warning" },
        ],
      },
      titleAlign: {
        type: "select",
        label: "Title alignment",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ],
      },
      descriptionAlign: {
        type: "select",
        label: "Description alignment",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ],
      },
      rounded: {
        type: "select",
        label: "Rounded",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
          { label: "Full", value: "full" },
        ],
      },
      padding: {
        type: "select",
        label: "Padding",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      fullWidth: {
        type: "select",
        label: "Full width",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showIcon: {
        type: "select",
        label: "Show icon",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      ariaLive: {
        type: "select",
        label: "Announce (aria-live)",
        options: [
          { label: "Polite", value: "polite" },
          { label: "Assertive", value: "assertive" },
          { label: "Off", value: "off" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      title: "Alert title",
      description: "Alert description or message content.",
      showTitle: true,
      variant: "default" as const,
      titleAlign: "left" as const,
      descriptionAlign: "left" as const,
      rounded: "lg" as const,
      padding: "md" as const,
      fullWidth: true,
      showIcon: false,
      ariaLive: "polite" as const,
      className: "",
      id: "",
    },
    render: (props: Components["Alert"]) => (
      <Alert
        variant={props.variant}
        rounded={props.rounded}
        padding={props.padding}
        fullWidth={props.fullWidth}
        ariaLive={props.ariaLive}
        className={props.className || undefined}
        id={props.id || undefined}
      >
        {props.showIcon && <AlertIcon variant={props.variant} />}
        <div className={props.showIcon ? "pl-7" : ""}>
          {props.showTitle && (
            <AlertTitle className={alertAlignClass(props.titleAlign)}>{props.title}</AlertTitle>
          )}
          <AlertDescription className={alertAlignClass(props.descriptionAlign)}>
            {props.description}
          </AlertDescription>
        </div>
      </Alert>
    ),
  },
};
