import { useMemo, useState } from "react";
import {
  useGetExpense,
  useGetExpenseSummary,
} from "../../../api/query/expense";
import { Calculator, Receipt, TrendingUp, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { setExpenseId } from "../../../store/slice/ExpenseSlice";

const useExpense = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { data: summaryData, isLoading: summaryLoading } =
    useGetExpenseSummary();
  const { data: expenseData, isLoading: expenseLoading } = useGetExpense({
    page: currentPage,
    pageSize: 3,
  });
  const summaryCards = useMemo(
    () => [
      {
        title: "Total Expenses",
        value: summaryData?.data?.totalExpenses ?? "0",
        description: "All recorded expenses",
        icon: Wallet,
      },
      {
        title: "This Month",
        value: summaryData?.data.monthlyExpenses ?? "0",
        description: "November expenditure",
        icon: TrendingUp,
      },
      {
        title: "Total Records",
        value: summaryData?.data.totalRecords ?? "0",
        description: "Recorded transactions",
        icon: Receipt,
      },
      {
        title: "Average Expense",
        value: summaryData?.data.averageExpense ?? "0",
        description: "Per expense record",
        icon: Calculator,
      },
    ],
    [summaryData?.data],
  );

  const handelAdd = () => {
    navigate("/expense/create");
  };
  const handelPageChange = (pageValue) => {
    setCurrentPage(pageValue.page);
  };

  const onEdit = (id) => {
    dispatch(setExpenseId(id));
    navigate("/expense/edit");
  };
  return [
    {
      summaryCards,
      summaryData: summaryData?.data ?? {},
      summaryLoading,
      expenseData: expenseData?.data ?? [],
      pagination: expenseData?.pagination ?? {},
      expenseLoading,
    },
    { handelAdd, handelPageChange, onEdit },
  ];
};

export default useExpense;
