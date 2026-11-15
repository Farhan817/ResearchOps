import { dashboardHandlers } from "./handlers/dashboard";
import { expenseHandlers } from "./handlers/expense";
import { experimentHandlers } from "./handlers/experiments";
import { authHandlers } from "./handlers/login";

export const handlers = [
  ...authHandlers,
  ...experimentHandlers,
  ...dashboardHandlers,
  ...expenseHandlers,
];
