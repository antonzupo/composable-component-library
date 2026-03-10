import { Chart } from "@/components/Chart/Chart";
import type { Components } from "@/puck/types";

type ChartProps = Components["Chart"];

export const chartPuckConfig = {
  Chart: {
    label: "Chart",
    fields: {
      dataSourceMode: {
        type: "select" as const,
        label: "Data source",
        options: [
          { label: "Manual", value: "manual" },
          { label: "API", value: "api" },
        ],
      },
      dataSourceUrl: { type: "text", label: "Data source URL (API mode)" },
      type: {
        type: "select" as const,
        label: "Chart type",
        options: [
          { label: "Line", value: "line" },
          { label: "Bar", value: "bar" },
          { label: "Pie", value: "pie" },
        ],
      },
      data: {
        type: "array" as const,
        label: "Data rows",
        getItemSummary: (item: Record<string, string | number>) =>
          String(item?.name ?? item?.value ?? "Row"),
        arrayFields: {
          name: { type: "text", label: "Name" },
          value: { type: "number", label: "Value" },
        },
      },
      dataKey: { type: "text", label: "Data key (value key)" },
      xAxisKey: { type: "text", label: "X axis key (category)" },
      lines: { type: "text", label: "Line keys (comma-separated)" },
      bars: { type: "text", label: "Bar keys (comma-separated)" },
      height: { type: "number", label: "Height" },
      showGrid: {
        type: "select" as const,
        label: "Show grid",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      showLegend: {
        type: "select" as const,
        label: "Show legend",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      showTooltip: {
        type: "select" as const,
        label: "Show tooltip",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      variant: {
        type: "select" as const,
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Muted", value: "muted" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      dataSourceMode: "manual" as const,
      dataSourceUrl: "",
      type: "line" as const,
      data: [
        { name: "A", value: 40 },
        { name: "B", value: 60 },
        { name: "C", value: 80 },
      ],
      dataKey: "value",
      xAxisKey: "name",
      lines: "value",
      bars: "",
      height: 300,
      showGrid: true,
      showLegend: true,
      showTooltip: true,
      variant: "default" as const,
      className: "",
      id: "",
    },
    render: (props: ChartProps) => <Chart {...props} />,
  },
};
