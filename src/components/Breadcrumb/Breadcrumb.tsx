import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Slash } from "lucide-react";
import type { Components } from "@/puck/types";

type BreadcrumbProps = Components["Breadcrumb"];

const separatorMap = {
  slash: <Slash className="size-3.5" />,
  chevron: <ChevronRight className="size-3.5" />,
  dot: <span className="size-1 rounded-full bg-current" />,
};

export function Breadcrumb({
  items = [],
  separator = "chevron",
  className,
  id,
}: BreadcrumbProps) {
  if (items.length === 0) {
    return (
      <BreadcrumbRoot className={className} id={id || undefined}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbRoot>
    );
  }

  const sep = separatorMap[separator];

  return (
    <BreadcrumbRoot className={className} id={id || undefined}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = isLast && !item.href;
          const isCollapsed = item.node === "collapsed";

          return (
            <span key={index} className="inline-flex items-center gap-1.5">
              <BreadcrumbItem>
                {isCollapsed ? (
                  <BreadcrumbEllipsis />
                ) : isCurrent ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : item.href ? (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator>{sep}</BreadcrumbSeparator>}
            </span>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
}
