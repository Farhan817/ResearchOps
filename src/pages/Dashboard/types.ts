import type { ReactNode } from "react";

type ChartData = Record<string, string | number>;

type ChartType = "area" | "line" | "bar" | "pie";

export interface ChartComponentProps {
  title: string;
  description?: string;
  data: ChartData[];
  chartType: ChartType;
  xKey: string;
  yKey: string | string[];
  xLabel?: string;
  yLabel?: string;
  height?: number;
  colors?: string[];
  showLegend?: boolean;
  showGrid?: boolean;
  loading?: boolean;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: ReactNode;
  iconClassName?: string;
  trend?: string;
  trendPositive?: boolean;
}
