import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type SectionProps = Components["Section"] & { children?: React.ReactNode };

export function Section({ content: _content, className, id, children }: SectionProps) {
  return (
    <section
      className={cn("rounded-lg border border-border bg-muted/30 p-6", className)}
      id={id}
    >
      {children}
    </section>
  );
}
