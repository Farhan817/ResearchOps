import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  LineChart,
} from "recharts";
import { CHART_COLORS } from "../../utils/constants";
import type { ChartComponentProps } from "../../pages/Dashboard/types";
import Loader from "./Loader";

const ChartComponent = ({
  title,
  description,
  data,
  chartType,
  xKey,
  yKey,
  xLabel,
  yLabel,
  height = 280,
  colors = CHART_COLORS,
  showLegend = false,
  showGrid = true,
  loading = false,
}: ChartComponentProps) => {
  const yKeys = Array.isArray(yKey) ? yKey : [yKey];

  const commonAxisProps = {
    tick: {
      fontSize: 12,
      fill: "hsl(var(--muted-foreground))",
    },
    axisLine: false,
    tickLine: false,
  };

  const tooltipStyle = {
    backgroundColor: "hsl(var(--card))",
    border: "1px solid hsl(var(--border))",
    borderRadius: "8px",
    color: "hsl(var(--foreground))",
    fontSize: 12,
  };

  const renderChart = () => {
    switch (chartType) {
      case "area":
        return (
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            {showGrid && (
              <CartesianGrid
                strokeDasharray='3 3'
                vertical={false}
                stroke='hsl(var(--border))'
              />
            )}

            <XAxis
              dataKey={xKey}
              {...commonAxisProps}
              label={
                xLabel
                  ? { value: xLabel, position: "insideBottom", offset: -8 }
                  : undefined
              }
            />

            <YAxis
              {...commonAxisProps}
              label={
                yLabel
                  ? {
                      value: yLabel,
                      angle: -90,
                      position: "insideLeft",
                    }
                  : undefined
              }
            />

            <Tooltip contentStyle={tooltipStyle} />

            {showLegend && <Legend />}

            {yKeys.map((key, index) => (
              <Area
                key={key}
                type='monotone'
                dataKey={key}
                name={key}
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
                fillOpacity={0.12}
                strokeWidth={2}
                activeDot={{ r: 5 }}
              />
            ))}
          </AreaChart>
        );
      case "line":
        return (
          <LineChart data={data}>
            {showGrid && (
              <CartesianGrid
                strokeDasharray='3 3'
                vertical={false}
                stroke='hsl(var(--border))'
              />
            )}
            <XAxis dataKey={xKey} {...commonAxisProps} />
            <YAxis {...commonAxisProps} />
            <Tooltip contentStyle={tooltipStyle} />
            {showLegend && <Legend />}
            {yKeys.map((key, index) => (
              <Line
                key={key}
                type='monotone'
                dataKey={key}
                name={key}
                stroke={colors[index % colors.length]}
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            ))}
          </LineChart>
        );

      case "bar":
        return (
          <BarChart data={data}>
            {showGrid && (
              <CartesianGrid
                strokeDasharray='3 3'
                vertical={false}
                stroke='hsl(var(--border))'
              />
            )}
            <XAxis dataKey={xKey} {...commonAxisProps} />
            <YAxis {...commonAxisProps} />
            <Tooltip contentStyle={tooltipStyle} />
            {showLegend && <Legend />}
            {yKeys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                name={key}
                fill={colors[index % colors.length]}
                radius={[5, 5, 0, 0]}
                maxBarSize={48}
              />
            ))}
          </BarChart>
        );

      case "pie":
        return (
          <PieChart>
            <Pie
              data={data}
              dataKey={yKeys[0]}
              nameKey={xKey}
              cx='50%'
              cy='50%'
              innerRadius='58%'
              outerRadius='82%'
              paddingAngle={3}
              stroke='none'
            >
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
            {showLegend && <Legend verticalAlign='bottom' iconType='circle' />}
          </PieChart>
        );

      default:
        return null;
    }
  };

  return (
    <div className='rounded-xl border border-border bg-card p-5'>
      {loading ? (
        <div className='col-span-full flex min-h-[280px] items-center justify-center'>
          <Loader size='lg' />
        </div>
      ) : (
        <>
          <div className='mb-5'>
            <h3 className='text-base font-semibold text-foreground'>{title}</h3>
            {description && (
              <p className='mt-1 text-sm text-muted-foreground'>
                {description}
              </p>
            )}
          </div>

          <ResponsiveContainer width='100%' height={height}>
            {renderChart()}
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default ChartComponent;
