import { Button } from "@/components/ui/button";
import { Sonner } from "@/components/Sonner/Sonner";
import { useIsPuckEditor } from "@/puck/editorContext";
import type { Components } from "@/puck/types";
import { toast } from "sonner";

const PUCK_SONNER_ID = "puck-sonner";

type SonnerProps = Components["Sonner"];

function SonnerCanvas(props: SonnerProps) {
  const isEditor = useIsPuckEditor();
  const toasterId = props.id || PUCK_SONNER_ID;

  const triggerButton = (
    <Button
      type="button"
      size="sm"
      variant="outline"
      onClick={() =>
        toast.success("Preview toast", { toasterId })
      }
    >
      Preview toast
    </Button>
  );

  return (
    <>
      <Sonner {...props} id={toasterId} />
      {isEditor ? (
        <div className="flex min-h-[80px] flex-col items-center justify-center gap-2 rounded-md border border-dashed border-muted-foreground/30 bg-muted/20 p-4">
          <span className="text-muted-foreground text-sm">
            Toaster ({props.position})
          </span>
          {triggerButton}
        </div>
      ) : (
        triggerButton
      )}
    </>
  );
}

export const sonnerPuckConfig = {
  Sonner: {
    label: "Sonner",
    fields: {
      position: {
        type: "select" as const,
        label: "Position",
        options: [
          { label: "Top left", value: "top-left" },
          { label: "Top center", value: "top-center" },
          { label: "Top right", value: "top-right" },
          { label: "Bottom left", value: "bottom-left" },
          { label: "Bottom center", value: "bottom-center" },
          { label: "Bottom right", value: "bottom-right" },
        ],
      },
      expand: {
        type: "radio" as const,
        label: "Expand",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      richColors: {
        type: "radio" as const,
        label: "Rich colors",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      closeButton: {
        type: "radio" as const,
        label: "Close button",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      position: "bottom-right" as const,
      expand: false,
      richColors: false,
      closeButton: false,
      className: "",
      id: "",
    } satisfies SonnerProps,
    render: (props: SonnerProps) => <SonnerCanvas {...props} />,
  },
};
