import {
  Table as TableRoot,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type TableProps = Components["Table"];

const variantClass = {
  default: "",
  bordered: "border border-border [&_th]:border [&_th]:border-border [&_td]:border [&_td]:border-border",
};

export function Table({
  columns,
  rows,
  caption = "",
  variant = "default",
  className,
  id,
}: TableProps) {
  const visibleColumns = columns.filter((col) => col.id?.trim() || col.header?.trim());

  return (
    <div className={cn("w-full", className)} id={id || undefined}>
      <TableRoot className={cn(variantClass[variant])}>
        {caption ? <TableCaption>{caption}</TableCaption> : null}
        <TableHeader>
          <TableRow>
            {visibleColumns.map((col, colIndex) => (
              <TableHead key={col.id || col.header || `col-${colIndex}`}>
                {col.header || col.id || "—"}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => {
            const cells = row.values?.split("\n") ?? [];
            return (
              <TableRow key={rowIndex}>
                {visibleColumns.map((_, colIndex) => (
                  <TableCell key={colIndex}>{cells[colIndex] ?? "—"}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </TableRoot>
    </div>
  );
}
