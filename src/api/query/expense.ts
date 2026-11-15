import { endpoints } from "../endpoint";
import { useFetch } from "../reactQuery";

export const useGetExpenseSummary = () => useFetch(endpoints.expenseSummary);
export const useGetExpense = (params) => useFetch(endpoints.expense, params);
