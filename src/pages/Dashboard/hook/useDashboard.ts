import {
  useGetActivities,
  useGetBudget,
  useGetCategories,
  useGetLifeCycle,
  useGetStats,
  useGetTrends,
} from "../../../api/query/dashboard";

const useDashboard = () => {
  const { data: statsData, isLoading: statsLoading } = useGetStats();
  const { data: trendData, isLoading: trendsLoading } = useGetTrends();
  const { data: lifeCycleData, isLoading: lifeCycleLoading } =
    useGetLifeCycle();
  const { data: categoryData, isLoading: categoryLoading } = useGetCategories();
  const { data: budgetData, isLoading: budgetLoading } = useGetBudget();
  const { data: activityData, isLoading: activityLoading } = useGetActivities();
  return [
    {
      statsData: statsData?.data ?? [],
      statsLoading,
      trendData: trendData?.data ?? [],
      trendsLoading,
      lifeCycleData: lifeCycleData?.data ?? [],
      lifeCycleLoading,
      categoryData: categoryData?.data ?? [],
      categoryLoading,
      budgetData: budgetData?.data ?? [],
      budgetLoading,
      activityData: activityData?.data ?? [],
      activityLoading,
    },
    {},
  ];
};
export default useDashboard;
