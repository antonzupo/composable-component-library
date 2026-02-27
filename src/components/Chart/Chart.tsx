import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

type ChartProps = Components["Chart"];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

function buildConfig(_data: Array<Record<string, string | number>>, dataKey: string, xAxisKey: string, linesKeys: string[], barsKeys: string[]): ChartConfig {
  const config: ChartConfig = {};
  [xAxisKey, dataKey, ...linesKeys, ...barsKeys].forEach((key) => {
    if (key && !config[key]) config[key] = { label: key };
  });
  return config;
}

export function Chart({
  type = "line",
  data = [],
  dataKey = "value",
  xAxisKey = "name",
  lines = "",
  bars = "",
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  variant = "default",
  className,
  id,
}: ChartProps) {
  const linesKeys = lines ? lines.split(",").map((s) => s.trim()).filter(Boolean) : [dataKey];
  const barsKeys = bars ? bars.split(",").map((s) => s.trim()).filter(Boolean) : [dataKey];
  const config = buildConfig(data, dataKey, xAxisKey, linesKeys, barsKeys);

  if (data.length === 0) {
    return (
      <div
        className={cn("flex items-center justify-center bg-muted/30 text-muted-foreground text-sm", variant === "muted" && "bg-muted/50", className)}
        style={{ height }}
        id={id || undefined}
      >
        Add chart data
      </div>
    );
  }

  const chartContent = () => {
    if (type === "line") {
      return (
        <RechartsLineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />}
          <XAxis dataKey={xAxisKey} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          {showTooltip && (
            <ChartTooltip content={<ChartTooltipContent />} />
          )}
          {showLegend && <ChartLegend content={<ChartLegendContent />} />}
          {linesKeys.map((key, i) => (
            <Line key={key} type="monotone" dataKey={key} stroke={COLORS[i % COLORS.length]} strokeWidth={2} />
          ))}
        </RechartsLineChart>
      );
    }
    if (type === "bar") {
      return (
        <RechartsBarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />}
          <XAxis dataKey={xAxisKey} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          {showTooltip && (
            <ChartTooltip content={<ChartTooltipContent />} />
          )}
          {showLegend && <ChartLegend content={<ChartLegendContent />} />}
          {barsKeys.map((key, i) => (
            <Bar key={key} dataKey={key} fill={COLORS[i % COLORS.length]} radius={[4, 4, 0, 0]} />
          ))}
        </RechartsBarChart>
      );
    }
    if (type === "pie") {
      const pieDataKey = linesKeys[0] || barsKeys[0] || dataKey;
      return (
        <RechartsPieChart>
          <ChartTooltip content={<ChartTooltipContent />} />
          {showLegend && <ChartLegend content={<ChartLegendContent />} />}
          <Pie
            data={data}
            dataKey={pieDataKey}
            nameKey={xAxisKey}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </RechartsPieChart>
      );
    }
    return (
      <RechartsLineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />}
        <XAxis dataKey={xAxisKey} tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        {showTooltip && <ChartTooltip content={<ChartTooltipContent />} />}
        {showLegend && <ChartLegend content={<ChartLegendContent />} />}
        <Line type="monotone" dataKey={dataKey} stroke={COLORS[0]} strokeWidth={2} />
      </RechartsLineChart>
    );
  };

  return (
    <ChartContainer config={config} className={cn("w-full", variant === "muted" && "opacity-90", className)} id={id || undefined} style={{ height }}>
      {chartContent()}
    </ChartContainer>
  );
}
