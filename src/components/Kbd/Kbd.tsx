import { Kbd as KbdPrimitive, KbdGroup } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type KbdProps = Components["Kbd"];

export function Kbd(props: KbdProps) {
  const { displayMode, text, keys, className, id } = props;

  if (displayMode === "group") {
    const keyItems = keys.length > 0 ? keys : [{ key: "Add keys below" }];
    return (
      <KbdGroup className={cn(className)} id={id || undefined}>
        {keyItems.map((item, i) => (
          <KbdPrimitive key={i}>{item.key}</KbdPrimitive>
        ))}
      </KbdGroup>
    );
  }

  return (
    <KbdPrimitive className={cn(className)} id={id || undefined}>
      {text}
    </KbdPrimitive>
  );
}
