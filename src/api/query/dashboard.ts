import { endpoints } from "../endpoint";
import { useFetch } from "../reactQuery";

export const useGetStats = () => useFetch(endpoints.dashboardStats);
export const useGetLifeCycle = () => useFetch(endpoints.dashboardLifeCycle);
export const useGetTrends = () => useFetch(endpoints.dashboardTrends);
export const useGetActivities = () => useFetch(endpoints.dashboardActivities);
export const useGetCategories = () => useFetch(endpoints.dashboardCategory);
export const useGetBudget = () => useFetch(endpoints.dashboardBudget);
