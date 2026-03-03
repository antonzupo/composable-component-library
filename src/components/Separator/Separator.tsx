import { Separator as BaseSeparator } from "@/components/ui/separator";
import type { Components } from "@/puck/types";

type SeparatorProps = Components["Separator"];

function Separator({
  orientation = "horizontal",
  decorative = true,
  className,
  id,
}: SeparatorProps) {
  return (
    <BaseSeparator
      orientation={orientation}
      decorative={decorative}
      className={className || undefined}
      id={id || undefined}
    />
  );
}

export { Separator };
