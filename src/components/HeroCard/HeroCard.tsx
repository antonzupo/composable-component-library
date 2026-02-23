import { Button } from "@/components/Button/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card/Card";
import { cn } from "@/lib/utils";

export type HeroCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaVariant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  ctaSize: "default" | "sm" | "lg" | "icon";
  ctaAlign: "left" | "center" | "right";
  className?: string;
  id?: string;
  showDescription: boolean;
  children?: React.ReactNode;
};

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
    <Card className={className} id={id}>
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
