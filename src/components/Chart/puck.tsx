import { Chart } from "@/components/Chart/Chart";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const chartPuckConfig = {
  Chart: {
    label: "Chart",
    fields: {
      dataSourceMode: {
        type: "select",
        label: "Data source",
        options: [
          { label: "Manual", value: "manual" },
          { label: "From API / URL", value: "api" },
        ],
      },
      dataSourceUrl: {
        type: "text",
        label: "Data URL (JSON array)",
        description: "When using API: URL that returns a JSON array of objects, e.g. [{ name: \"Jan\", value: 400 }, ...]",
      },
      type: {
        type: "select",
        label: "Chart type",
        options: [
          { label: "Line", value: "line" },
          { label: "Bar", value: "bar" },
          { label: "Pie", value: "pie" },
        ],
      },
      data: {
        type: "array",
        label: "Data (when Manual)",
        getItemSummary: (item: Record<string, string | number>) => (item?.name ?? item?.value ?? "Row") as string,
        arrayFields: {
          name: { type: "text", label: "Name" },
          value: { type: "number", label: "Value" },
          uv: { type: "number", label: "UV (optional)" },
          pv: { type: "number", label: "PV (optional)" },
          amt: { type: "number", label: "AMT (optional)" },
        },
      },
      dataKey: { type: "text", label: "Data key (pie)" },
      xAxisKey: { type: "text", label: "X axis key" },
      lines: {
        type: "text",
        label: "Line keys (comma-separated)",
      },
      bars: {
        type: "text",
        label: "Bar keys (comma-separated)",
      },
      height: {
        type: "number",
        label: "Height",
        min: 150,
        max: 600,
      },
      showGrid: {
        type: "select",
        label: "Show grid",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showLegend: {
        type: "select",
        label: "Show legend",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showTooltip: {
        type: "select",
        label: "Show tooltip",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      variant: {
        type: "select",
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
        { name: "Jan", value: 400, uv: 2400, pv: 2400 },
        { name: "Feb", value: 300, uv: 1398, pv: 2210 },
        { name: "Mar", value: 200, uv: 9800, pv: 2290 },
        { name: "Apr", value: 278, uv: 3908, pv: 2000 },
        { name: "May", value: 189, uv: 4800, pv: 2181 },
      ],
      dataKey: "value",
      xAxisKey: "name",
      lines: "value, uv, pv",
      bars: "value, uv, pv",
      height: 300,
      showGrid: true,
      showLegend: true,
      showTooltip: true,
      variant: "default" as const,
      className: "",
      id: "",
    },
    render: (props: Components["Chart"]) => {
      const lines = props.lines ? props.lines.split(",").map((s) => s.trim()).filter(Boolean) : ["value"];
      const bars = props.bars ? props.bars.split(",").map((s) => s.trim()).filter(Boolean) : ["value"];
      return (
        <Chart
          {...props}
          dataSourceMode={props.dataSourceMode}
          dataSourceUrl={props.dataSourceUrl || undefined}
          lines={lines}
          bars={bars}
          className={props.className || undefined}
          id={props.id || undefined}
        />
      );
    },
  },
};
