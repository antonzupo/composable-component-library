import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dataTableVariants = cva("w-full text-sm", {
  variants: {
    variant: {
      default: "border border-border",
      bordered: "border border-border [&_td]:border [&_td]:border-border [&_th]:border [&_th]:border-border",
      striped: "border border-border [&_tbody_tr:nth-child(even)]:bg-muted/50",
    },
    size: {
      sm: "[&_td]:py-2 [&_th]:py-2 [&_td]:px-2 [&_th]:px-2",
      default: "[&_td]:py-3 [&_th]:py-3 [&_td]:px-4 [&_th]:px-4",
      lg: "[&_td]:py-4 [&_th]:py-4 [&_td]:px-6 [&_th]:px-6",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    rounded: "md",
  },
});

export type DataTableColumn = { key: string; label: string; width?: string };

export type DataTableProps = React.HTMLAttributes<HTMLTableElement> &
  VariantProps<typeof dataTableVariants> & {
    columns: DataTableColumn[];
    data: Array<Record<string, string | number>>;
    showHeader?: boolean;
  };

const DataTable = React.forwardRef<HTMLTableElement, DataTableProps>(
  (
    {
      columns,
      data,
      showHeader = true,
      variant,
      size,
      rounded,
      className,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("overflow-auto", rounded && "rounded-md")}>
        <table
          ref={ref}
          className={cn(dataTableVariants({ variant, size, rounded }), className)}
          id={id}
          {...props}
        >
          {showHeader && (
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="text-left font-medium"
                    style={col.width ? { width: col.width } : undefined}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-8 text-center text-muted-foreground"
                >
                  No rows
                </td>
              </tr>
            ) : (
              data.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-border transition-colors hover:bg-muted/50"
                >
                  {columns.map((col) => (
                    <td key={col.key}>{String(row[col.key] ?? "")}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
);
DataTable.displayName = "DataTable";

export { DataTable, dataTableVariants };
