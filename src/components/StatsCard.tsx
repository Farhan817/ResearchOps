import type { StatCardProps } from "../pages/Dashboard/types";

const StatCard = ({
  title,
  value,
  description,
  icon,
  iconClassName = "bg-primary/10 text-primary",
  trend,
  trendPositive = true,
}: StatCardProps) => {
  return (
    <div className='rounded-xl border border-border bg-card p-5'>
      <div className='flex items-start justify-between'>
        <div>
          <p className='text-sm font-medium text-muted-foreground'>{title}</p>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-foreground'>
            {value}
          </h2>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-lg ${iconClassName}`}
        >
          {icon}
        </div>
      </div>

      <div className='mt-4 flex items-center gap-2 text-xs'>
        {trend && (
          <span
            className={
              trendPositive
                ? "font-medium text-emerald-600"
                : "font-medium text-red-500"
            }
          >
            {trend}
          </span>
        )}
        <span className='text-muted-foreground'>{description}</span>
      </div>
    </div>
  );
};
export default StatCard;
