import * as React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chartVariants = cva("w-full", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--destructive))", "hsl(var(--muted-foreground))", "#22c55e", "#eab308"];

export type ChartDataPoint = Record<string, string | number>;

export type ChartProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof chartVariants> & {
    type: "line" | "bar" | "pie";
    data?: ChartDataPoint[];
    dataSourceMode?: "manual" | "api";
    dataSourceUrl?: string;
    dataKey?: string;
    xAxisKey?: string;
    lines?: string[];
    bars?: string[];
    height?: number;
    showGrid?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
  };

function Chart({
  type,
  data: dataProp,
  dataSourceMode = "manual",
  dataSourceUrl,
  dataKey = "value",
  xAxisKey = "name",
  lines = ["value"],
  bars = ["value"],
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  variant,
  className,
  id,
  ...props
}: ChartProps) {
  const [fetchedData, setFetchedData] = React.useState<ChartDataPoint[] | null>(null);
  const [fetchError, setFetchError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (dataSourceMode !== "api" || !dataSourceUrl?.trim()) {
      setFetchedData(null);
      setFetchError(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setFetchError(null);
    fetch(dataSourceUrl.trim())
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        const arr = Array.isArray(json) ? json : json?.data ?? json?.items ?? [];
        setFetchedData(Array.isArray(arr) ? arr : []);
      })
      .catch((err) => {
        if (!cancelled) setFetchError(err?.message ?? "Failed to load data");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [dataSourceMode, dataSourceUrl]);

  const data =
    dataSourceMode === "api" && dataSourceUrl?.trim()
      ? (fetchedData ?? [])
      : (dataProp ?? []);

  if (loading) {
    return (
      <div
        className={cn(chartVariants({ variant }), "flex items-center justify-center border border-dashed rounded-md bg-muted/30", className)}
        id={id}
        style={{ height }}
        {...props}
      >
        <span className="text-muted-foreground text-sm">Loading chart data…</span>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div
        className={cn(chartVariants({ variant }), "flex items-center justify-center border border-dashed rounded-md bg-destructive/10 border-destructive/30", className)}
        id={id}
        style={{ height }}
        {...props}
      >
        <span className="text-destructive text-sm">{fetchError}</span>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div
        className={cn(chartVariants({ variant }), "flex items-center justify-center border border-dashed rounded-md bg-muted/30", className)}
        id={id}
        style={{ height }}
        {...props}
      >
        <span className="text-muted-foreground text-sm">
          {dataSourceMode === "api" ? "No data from URL" : "Add data to display chart"}
        </span>
      </div>
    );
  }

  const chartNode =
    type === "line" ? (
      <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />}
        <XAxis dataKey={xAxisKey} className="text-xs" tick={{ fill: "currentColor" }} />
        <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
        {showTooltip && <Tooltip contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }} />}
        {showLegend && <Legend />}
        {lines.map((key, i) => (
          <Line key={key} type="monotone" dataKey={key} stroke={COLORS[i % COLORS.length]} strokeWidth={2} dot={{ r: 4 }} />
        ))}
      </LineChart>
    ) : type === "bar" ? (
      <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />}
        <XAxis dataKey={xAxisKey} className="text-xs" tick={{ fill: "currentColor" }} />
        <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
        {showTooltip && <Tooltip contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }} />}
        {showLegend && <Legend />}
        {bars.map((key, i) => (
          <Bar key={key} dataKey={key} fill={COLORS[i % COLORS.length]} radius={[4, 4, 0, 0]} />
        ))}
      </BarChart>
    ) : (
      <PieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        {showTooltip && <Tooltip contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }} />}
        {showLegend && <Legend />}
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={xAxisKey}
          cx="50%"
          cy="50%"
          outerRadius={Math.min(height, 120) / 2 - 10}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );

  const content = <ResponsiveContainer width="100%" height={height}>{chartNode}</ResponsiveContainer>;

  return (
    <div className={cn(chartVariants({ variant }), className)} id={id} {...props}>
      {content}
    </div>
  );
}

Chart.displayName = "Chart";

export { Chart, chartVariants };
