/** Data access layer for Table. */

export interface TableColumn {
  id: string;
  header: string;
}

export interface TableRow {
  values: string;
}

export interface TableData {
  columns: TableColumn[];
  rows: TableRow[];
  caption: string;
}

export const mockTableData: TableData = {
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
};

export interface TableDataItem extends TableData {
  id: string;
}

const MOCK_TABLE_LIST: TableDataItem[] = [
  { id: "users", ...mockTableData },
  {
    id: "products",
    columns: [
      { id: "sku", header: "SKU" },
      { id: "name", header: "Product" },
      { id: "price", header: "Price" },
    ],
    rows: [
      { values: "A1\nWidget A\n$9.99" },
      { values: "B2\nWidget B\n$14.99" },
    ],
    caption: "Product list",
  },
];

/** Fetches table data by id. */
export async function getTableData(id?: string): Promise<TableData> {
  await Promise.resolve();
  return id ? { ...mockTableData, caption: `Table: ${id}` } : { ...mockTableData };
}

/** Fetches list of tables for external data source picker. */
export async function getTableList(query?: string): Promise<TableDataItem[]> {
  await Promise.resolve();
  const list = [...MOCK_TABLE_LIST];
  if (query?.trim()) {
    const q = query.toLowerCase();
    return list.filter(
      (t) =>
        t.id.toLowerCase().includes(q) ||
        t.caption?.toLowerCase().includes(q) ||
        t.columns.some((c) => c.header?.toLowerCase().includes(q))
    );
  }
  return list;
}
