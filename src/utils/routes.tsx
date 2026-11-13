import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/Login";
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
];
