import { Button } from "@/components/Button/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card/Card";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type HeroCardProps = Components["HeroCard"];

export function HeroCard({
  title,
  description,
  ctaLabel,
  ctaVariant,
  ctaSize,
  ctaAlign,
  className,
  id,
  showDescription,
  children,
}: HeroCardProps) {
  return (
    <Card className={cn(className)} id={id || undefined}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {showDescription && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div
          className={cn(
            "flex w-full",
            ctaAlign === "center" && "justify-center",
            ctaAlign === "right" && "justify-end"
          )}
        >
          <Button variant={ctaVariant} size={ctaSize}>
            {ctaLabel}
          </Button>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
