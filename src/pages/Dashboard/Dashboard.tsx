import { lazy } from "react";
import Loader from "../../components/common/Loader";
import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/StatsCard";
import useDashboard from "./hook/useDashboard";
import dayjs from "dayjs";

const ChartComponent = lazy(() => import("../../components/common/ChartComp"));

const BudgetUtilization = ({ data, loading }) => {
  const percentage = Math.round((data.usedBudget / data.totalBudget) * 100);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className='min-w-0 rounded-xl border border-border bg-card p-4 sm:p-5 lg:p-6'>
      {loading ? (
        <div className='flex min-h-[160px] items-center justify-center'>
          <Loader size='lg' />
        </div>
      ) : (
        <>
          <div>
            <h3 className='text-base font-semibold text-foreground'>
              Budget Utilization
            </h3>
            <p className='mt-1 text-xs sm:text-sm text-muted-foreground'>
              Overall research project expenditure
            </p>
          </div>

          <div className='mt-5 sm:mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <h2 className='text-2xl sm:text-3xl font-bold text-foreground'>
                {percentage}%
              </h2>
              <p className='mt-1 text-xs text-muted-foreground'>
                Budget utilized
              </p>
            </div>

            <div className='sm:text-right'>
              <p className='text-sm font-semibold text-foreground'>
                {formatCurrency(data.usedBudget)}
              </p>
              <p className='text-xs text-muted-foreground'>
                of {formatCurrency(data.totalBudget)}
              </p>
            </div>
          </div>

          <div className='mt-5 h-3 overflow-hidden rounded-full bg-muted'>
            <div
              className='h-full rounded-full bg-primary transition-all'
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className='mt-4 flex flex-wrap justify-between gap-4 text-sm'>
            <div>
              <p className='text-xs text-muted-foreground'>Utilized</p>
              <p className='mt-1 font-medium text-foreground'>
                {formatCurrency(data.usedBudget)}
              </p>
            </div>

            <div className='text-right'>
              <p className='text-xs text-muted-foreground'>Remaining</p>
              <p className='mt-1 font-medium text-foreground'>
                {formatCurrency(data.remainingBudget)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const RecentActivity = ({ recentActivities, loading }) => {
  const activityStyles: Record<string, { icon: string; color: string }> = {
    created: {
      icon: "+",
      color: "bg-emerald-500/10 text-emerald-600",
    },
    updated: {
      icon: "↻",
      color: "bg-blue-500/10 text-blue-600",
    },
    calendar: {
      icon: "◷",
      color: "bg-amber-500/10 text-amber-600",
    },
    completed: {
      icon: "✓",
      color: "bg-emerald-500/10 text-emerald-600",
    },
  };

  return (
    <div className='min-w-0 rounded-xl border border-border bg-card p-4 sm:p-5 lg:p-6'>
      {loading ? (
        <div className='flex min-h-[160px] items-center justify-center'>
          <Loader size='lg' />
        </div>
      ) : (
        <>
          <div className='mb-5'>
            <h3 className='text-base font-semibold text-foreground'>
              Recent Research Activity
            </h3>
            <p className='mt-1 text-xs sm:text-sm text-muted-foreground'>
              Latest updates across research experiments
            </p>
          </div>

          <div className='space-y-5'>
            {recentActivities.map((activity, index) => {
              const style = activityStyles[activity.type];

              return (
                <div key={activity.id} className='flex gap-3 min-w-0'>
                  <div className='flex flex-col items-center shrink-0'>
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-semibold ${style.color}`}
                    >
                      {style.icon}
                    </div>

                    {index !== recentActivities.length - 1 && (
                      <div className='mt-2 h-full min-h-5 w-px bg-border' />
                    )}
                  </div>

                  <div className='min-w-0 flex-1 pb-1'>
                    <div className='flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-2'>
                      <p className='text-sm font-medium text-foreground break-words'>
                        {activity.title}
                      </p>

                      <span className='shrink-0 text-xs text-muted-foreground'>
                        {activity.time}
                      </span>
                    </div>

                    <p className='mt-1 text-sm text-muted-foreground break-words'>
                      {activity.description}
                    </p>

                    <p className='mt-2 text-xs text-muted-foreground break-words'>
                      Researcher: {activity.researcher}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [
    {
      statsData,
      statsLoading,
      trendData,
      trendsLoading,
      lifeCycleData,
      lifeCycleLoading,
      categoryData,
      categoryLoading,
      budgetData,
      budgetLoading,
      activityData,
      activityLoading,
    },
  ] = useDashboard();

  return (
    <div className='min-h-full w-full min-w-0 bg-background'>
      <div className='mx-auto w-full max-w-screen-2xl space-y-5 sm:space-y-6'>
        {/* Header */}
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div className='min-w-0'>
            <PageHeader
              title='Research Dashboard'
              subText='Overview of research experiments and operations.'
            />
          </div>

          <div className='flex items-center'>
            <span className='rounded-lg border border-border bg-card px-3 py-2 text-xs sm:text-sm text-muted-foreground'>
              {dayjs().format("MMMM YYYY")}
            </span>
          </div>
        </div>

        <section
          className='
          grid min-w-0
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-3 sm:gap-4
          rounded-xl border border-border
          bg-card
          p-3 sm:p-4 lg:p-5
        '
        >
          {statsLoading ? (
            <div className='col-span-full flex min-h-[130px] items-center justify-center'>
              <Loader size='lg' />
            </div>
          ) : (
            statsData.map((stat) => (
              <StatCard
                key={stat.title}
                {...stat}
                icon={<span className='text-xl'>{stat.icon}</span>}
              />
            ))
          )}
        </section>

        <section
          className='
          grid min-w-0
          grid-cols-1
          xl:grid-cols-2
          gap-4 sm:gap-5
        '
        >
          <div className='min-w-0'>
            <ChartComponent
              title='Experiment Lifecycle'
              description='Distribution of experiments across different stages'
              data={lifeCycleData}
              chartType='pie'
              xKey='stage'
              yKey='count'
              showLegend
              height={300}
              loading={lifeCycleLoading}
            />
          </div>

          <div className='min-w-0'>
            <ChartComponent
              title='Experiment Trends'
              description='Monthly comparison of created and completed experiments'
              data={trendData}
              chartType='area'
              xKey='month'
              yKey={["created", "completed"]}
              xLabel='Month'
              yLabel='Experiments'
              showLegend
              height={300}
              loading={trendsLoading}
            />
          </div>
        </section>

        <section
          className='
          grid min-w-0
          grid-cols-1
          xl:grid-cols-2
          gap-4 sm:gap-5
        '
        >
          <div className='min-w-0'>
            <ChartComponent
              title='Experiments by Category'
              description='Comparison of experiments across research categories'
              data={categoryData}
              chartType='bar'
              xKey='category'
              yKey='experiments'
              xLabel='Category'
              yLabel='Number of experiments'
              height={300}
              loading={categoryLoading}
            />
          </div>

          <div className='min-w-0'>
            <BudgetUtilization data={budgetData} loading={budgetLoading} />
          </div>
        </section>

        {/* Recent Activity */}
        <section className='min-w-0'>
          <RecentActivity
            recentActivities={activityData}
            loading={activityLoading}
          />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
