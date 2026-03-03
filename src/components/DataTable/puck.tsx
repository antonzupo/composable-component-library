import { DataTable } from "@/components/DataTable/DataTable";
import type { Components } from "@/puck/types";

export const dataTablePuckConfig = {
  DataTable: {
    label: "Data Table",
    fields: {
      columns: {
        type: "array",
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
        type: "array",
        label: "Rows",
        getItemSummary: (item: { values: string }) => {
          const first = item?.values?.split("\n")?.[0];
          return first ? `${first}…` : "Row";
        },
        arrayFields: {
          values: {
            type: "textarea",
            label: "Cells (one per line, matches column order)",
          },
        },
        defaultItemProps: () => ({ values: "" }),
      },
      caption: { type: "text", label: "Caption" },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      columns: [
        { id: "name", header: "Name" },
        { id: "email", header: "Email" },
        { id: "role", header: "Role" },
      ],
      rows: [
        { values: "Alice\nalice@example.com\nAdmin" },
        { values: "Bob\nbob@example.com\nUser" },
        { values: "Carol\ncarol@example.com\nEditor" },
      ],
      caption: "",
      className: "",
      id: "",
    },
    render: (props: Components["DataTable"]) => <DataTable {...props} />,
  },
};
