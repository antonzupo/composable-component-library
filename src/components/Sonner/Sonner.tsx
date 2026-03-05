import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type SonnerProps = Components["Sonner"];

function Sonner({
  position = "bottom-right",
  expand = false,
  richColors = false,
  closeButton = false,
  className,
  id,
}: SonnerProps) {
  return (
    <Toaster
      position={position}
      expand={expand}
      richColors={richColors}
      closeButton={closeButton}
      className={cn("toaster group", className)}
      id={id || undefined}
    />
  );
}

export { Sonner };
