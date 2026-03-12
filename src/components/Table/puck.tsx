import { Table } from "@/components/Table/Table";
import {
  fetchTableDataFromUrl,
  getTableList,
  mockTableData,
  type TableDataItem,
} from "@/data/table";
import type { Components } from "@/puck/types";

type TableProps = Components["Table"];

const baseFields = {
  dataSourceMode: {
    type: "select" as const,
    label: "Data source",
    options: [
      { label: "Manual", value: "manual" },
      { label: "From API", value: "api" },
    ],
  },
  dataSourceUrl: {
    type: "text" as const,
    label: "Data source URL",
    description: "URL returning JSON: { columns, rows, caption? }. Used when Data source is From API.",
  },
  dataSource: {
    type: "external" as const,
    label: "Table from list",
    placeholder: "Select table",
    getItemSummary: (item: TableDataItem) =>
      item?.caption?.trim() || item?.id || "Table",
    fetchList: async ({ query }: { query?: string }) => {
      return getTableList(query);
    },
  },
  columns: {
    type: "array" as const,
    label: "Columns",
    getItemSummary: (item: { id: string; header: string }) =>
      item?.header || item?.id || "Column",
    arrayFields: {
      id: { type: "text", label: "Column ID (optional)" },
      header: { type: "text", label: "Header" },
    },
    defaultItemProps: () => ({ id: "", header: "" }),
  },
  rows: {
    type: "array" as const,
    label: "Rows",
    getItemSummary: (item: { values: string }) => {
      const first = item?.values?.split("\n")?.[0];
      return first ? `${first}…` : "Row";
    },
    arrayFields: {
      values: {
        type: "textarea" as const,
        label: "Cells (one per line, matches column order)",
      },
    },
    defaultItemProps: () => ({ values: "" }),
  },
  caption: { type: "text", label: "Caption" },
  variant: {
    type: "select" as const,
    label: "Variant",
    options: [
      { label: "Default", value: "default" },
      { label: "Bordered", value: "bordered" },
    ],
  },
  className: { type: "text", label: "Class name" },
  id: { type: "text", label: "ID" },
};

export const tablePuckConfig = {
  Table: {
    label: "Table",
    fields: baseFields,
    defaultProps: {
      dataSourceMode: "manual" as const,
      dataSourceUrl: "",
      dataSource: null,
      ...mockTableData,
      variant: "default" as const,
      className: "",
      id: "",
    } satisfies TableProps,
    resolveData: async ({ props }: { props: TableProps }) => {
      if (props.dataSourceMode !== "api") {
        return {
          props,
          readOnly: { columns: false, rows: false, caption: false },
        };
      }
      const url = props.dataSourceUrl?.trim();
      if (url) {
        try {
          const data = await fetchTableDataFromUrl(url);
          return {
            props: {
              ...props,
              columns: data.columns,
              rows: data.rows,
              caption: data.caption ?? props.caption,
            },
            readOnly: { columns: true, rows: true, caption: true },
          };
        } catch {
          return {
            props,
            readOnly: { columns: false, rows: false, caption: false },
          };
        }
      }
      if (props.dataSource) {
        const { columns, rows, caption } = props.dataSource;
        return {
          props: {
            ...props,
            columns,
            rows,
            caption: caption ?? props.caption,
          },
          readOnly: { columns: true, rows: true, caption: true },
        };
      }
      return {
        props,
        readOnly: { columns: false, rows: false, caption: false },
      };
    },
    render: (props: TableProps) => {
      const columns =
        props.dataSourceMode === "api" && props.dataSource && !props.dataSourceUrl?.trim()
          ? props.dataSource.columns
          : props.columns;
      const rows =
        props.dataSourceMode === "api" && props.dataSource && !props.dataSourceUrl?.trim()
          ? props.dataSource.rows
          : props.rows;
      const caption =
        props.dataSourceMode === "api" && props.dataSource && !props.dataSourceUrl?.trim() && props.dataSource.caption != null
          ? props.dataSource.caption
          : props.caption;
      return <Table {...props} columns={columns} rows={rows} caption={caption} />;
    },
  },
};
