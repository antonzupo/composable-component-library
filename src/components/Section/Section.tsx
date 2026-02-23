import { cn } from "@/lib/utils";

export type SectionProps = {
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export function Section({ className, id, children }: SectionProps) {
  return (
    <section
      className={cn("rounded-lg border border-border bg-muted/30 p-6", className)}
      id={id}
    >
      {children}
    </section>
  );
}
