import { AlertDialogContent } from "@/components/AlertDialog/AlertDialog";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const alertDialogPuckConfig = {
  AlertDialog: {
    label: "Alert Dialog",
    fields: {
      title: { type: "text", label: "Title" },
      description: { type: "textarea", label: "Description" },
      cancelLabel: { type: "text", label: "Cancel button label" },
      confirmLabel: { type: "text", label: "Confirm button label" },
      confirmVariant: {
        type: "select",
        label: "Confirm variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Destructive", value: "destructive" },
        ],
      },
      showCancel: {
        type: "select",
        label: "Show cancel button",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
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
      actionsAlign: {
        type: "select",
        label: "Actions alignment",
        options: [
          { label: "Start", value: "start" },
          { label: "Center", value: "center" },
          { label: "End", value: "end" },
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
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      title: "Are you sure?",
      description: "This action cannot be undone.",
      cancelLabel: "Cancel",
      confirmLabel: "Continue",
      confirmVariant: "default" as const,
      showCancel: true,
      titleAlign: "left" as const,
      descriptionAlign: "left" as const,
      actionsAlign: "end" as const,
      rounded: "lg" as const,
      padding: "md" as const,
      className: "",
      id: "",
    },
    render: (props: Components["AlertDialog"]) => (
      <AlertDialogContent
        title={props.title}
        description={props.description}
        cancelLabel={props.cancelLabel}
        confirmLabel={props.confirmLabel}
        confirmVariant={props.confirmVariant}
        showCancel={props.showCancel}
        titleAlign={props.titleAlign}
        descriptionAlign={props.descriptionAlign}
        actionsAlign={props.actionsAlign}
        rounded={props.rounded}
        padding={props.padding}
        className={props.className || undefined}
        id={props.id || undefined}
      />
    ),
  },
};
