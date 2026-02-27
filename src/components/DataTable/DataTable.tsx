"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface DataTableProps {
  columns: Array<{ id: string; header: string }>;
  rows: Array<{ values: string }>;
  caption?: string;
  className?: string;
  id?: string;
}

export function DataTable({
  columns,
  rows,
  caption,
  className,
  id,
}: DataTableProps) {
  const visibleColumns = columns.filter((col) => col.id?.trim() || col.header?.trim());

  return (
    <div className={cn("w-full", className)} id={id}>
      <Table>
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
      </Table>
    </div>
  );
}
