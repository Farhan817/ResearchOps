import { DollarSign, FolderKanban, LayoutDashboard } from "lucide-react";

import Login from "../pages/Login/Login";

import Experiments from "../pages/Experiment/Experiments";
import AddEditExperiments from "../pages/Experiment/AddEditExperiments";
import Dashboard from "../pages/Dashboard/Dashboard";
import ExpenseManagement from "../pages/Expense/Expense";
import AddEditExpense from "../pages/Expense/AddEditExpense";
export const publicRoute = [
  {
    path: "/login",
    element: <Login />,
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/experiments",
    element: <Experiments />,
  },
  {
    path: "/experiments/:mode",
    element: <AddEditExperiments />,
  },
  {
    path: "/expense",
    element: <ExpenseManagement />,
  },
  {
    path: "/expense/:mode",
    element: <AddEditExpense />,
  },
];

export const navigation = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Experiments", path: "/experiments", icon: FolderKanban },
  // {
  //   name: "Experiments Management",
  //   path: "/management",
  //   icon: ChartNoAxesCombined,
  // },
  // { name: "Activity", path: "/activity", icon: BriefcaseBusiness },
  { name: "Expense", path: "/expense", icon: DollarSign },
];
