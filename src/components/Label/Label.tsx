import { Label as LabelPrimitive } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type LabelProps = Components["Label"];

export function Label(props: LabelProps) {
  const { text, htmlFor, className, id } = props;
  return (
    <LabelPrimitive
      htmlFor={htmlFor || undefined}
      className={cn(className)}
      id={id || undefined}
    >
      {text}
    </LabelPrimitive>
  );
}
