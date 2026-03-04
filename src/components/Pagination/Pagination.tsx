import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type PaginationProps = Components["Pagination"];

function getPageRange(
  pageCount: number,
  currentPage: number,
  siblingCount: number
): (number | "ellipsis")[] {
  if (pageCount <= 0) return [];
  if (pageCount === 1) return [1];
  const left = Math.max(1, currentPage - siblingCount);
  const right = Math.min(pageCount, currentPage + siblingCount);
  const result: (number | "ellipsis")[] = [];
  if (left > 2) {
    result.push(1, "ellipsis");
  } else {
    for (let i = 1; i < left; i++) result.push(i);
  }
  for (let i = left; i <= right; i++) result.push(i);
  if (right < pageCount - 1) {
    result.push("ellipsis", pageCount);
  } else if (right < pageCount) {
    result.push(pageCount);
  }
  return result;
}

export function Pagination({
  pageCount,
  currentPage,
  showPreviousNext,
  showFirstLast,
  siblingCount,
  className,
  id,
}: PaginationProps) {
  const safePageCount = Math.max(1, Math.floor(pageCount) || 1);
  const safeCurrent = Math.max(
    1,
    Math.min(safePageCount, Math.floor(currentPage) || 1)
  );
  const safeSibling = Math.max(0, Math.floor(siblingCount) || 0);
  const range = getPageRange(safePageCount, safeCurrent, safeSibling);

  return (
    <PaginationRoot className={cn(className)} id={id || undefined}>
      <PaginationContent>
        {showPreviousNext && (
          <PaginationItem>
            <PaginationPrevious
              href={safeCurrent <= 1 ? "#" : "#"}
              aria-disabled={safeCurrent <= 1}
              tabIndex={safeCurrent <= 1 ? -1 : undefined}
              className={safeCurrent <= 1 ? "pointer-events-none opacity-50" : undefined}
            />
          </PaginationItem>
        )}
        {showFirstLast && safePageCount > 1 && range[0] !== 1 && (
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        )}
        {range.map((item, index) =>
          item === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink href="#" isActive={item === safeCurrent}>
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        {showFirstLast && safePageCount > 1 && range[range.length - 1] !== safePageCount && (
          <PaginationItem>
            <PaginationLink href="#">{safePageCount}</PaginationLink>
          </PaginationItem>
        )}
        {showPreviousNext && (
          <PaginationItem>
            <PaginationNext
              href={safeCurrent >= safePageCount ? "#" : "#"}
              aria-disabled={safeCurrent >= safePageCount}
              tabIndex={safeCurrent >= safePageCount ? -1 : undefined}
              className={safeCurrent >= safePageCount ? "pointer-events-none opacity-50" : undefined}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationRoot>
  );
}
