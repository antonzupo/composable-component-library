import { DataTable } from "@/components/DataTable/DataTable";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const dataTablePuckConfig = {
  DataTable: {
    label: "Data Table",
    fields: {
      columns: {
        type: "array",
        label: "Columns",
        getItemSummary: (item: { key: string; label: string }) => item?.label ?? item?.key ?? "Column",
        arrayFields: {
          key: { type: "text", label: "Key" },
          label: { type: "text", label: "Label" },
          width: { type: "text", label: "Width (e.g. 100px)" },
        },
      },
      data: {
        type: "array",
        label: "Data rows",
        getItemSummary: (row: Record<string, string | number>) =>
          [row.val1 ?? row.name ?? row.label, row.val2, row.val3].filter(Boolean).join(" · ") || "Row",
        arrayFields: {
          val1: { type: "text", label: "Column 1" },
          val2: { type: "text", label: "Column 2" },
          val3: { type: "text", label: "Column 3" },
          val4: { type: "text", label: "Column 4" },
          val5: { type: "text", label: "Column 5" },
        },
      },
      size: {
        type: "select",
        label: "Size",
        options: [
          { label: "Small", value: "sm" },
          { label: "Default", value: "default" },
          { label: "Large", value: "lg" },
        ],
      },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Bordered", value: "bordered" },
          { label: "Striped", value: "striped" },
        ],
      },
      showHeader: {
        type: "select",
        label: "Show header",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      rounded: {
        type: "select",
        label: "Rounded",
        options: [
          { label: "None", value: "none" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
          { label: "Full", value: "full" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      columns: [
        { key: "val1", label: "Column 1" },
        { key: "val2", label: "Column 2" },
        { key: "val3", label: "Column 3" },
      ] as Components["DataTable"]["columns"],
      data: [] as Components["DataTable"]["data"],
      size: "default" as const,
      variant: "default" as const,
      showHeader: true,
      rounded: "md" as const,
      className: "",
      id: "",
    },
    render: (props: Components["DataTable"]) => (
      <DataTable
        columns={props.columns}
        data={props.data}
        size={props.size}
        variant={props.variant}
        showHeader={props.showHeader}
        rounded={props.rounded}
        className={props.className || undefined}
        id={props.id || undefined}
      />
    ),
  },
};
