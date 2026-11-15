import { http, HttpResponse, delay } from "msw";
import {
  budgetData,
  categoryData,
  lifecycleData,
  recentActivities,
  statsData,
  trendData,
} from "../data/dashboard";

export const dashboardHandlers = [
  // Stats
  http.get("/api/dashboard/stats", async () => {
    await delay(500);

    return HttpResponse.json({
      success: true,
      message: "Dashboard stats fetched successfully",
      data: statsData,
    });
  }),

  // Lifecycle
  http.get("/api/dashboard/lifecycle", async () => {
    await delay(500);

    return HttpResponse.json({
      success: true,
      message: "Lifecycle data fetched successfully",
      data: lifecycleData,
    });
  }),

  // Trends
  http.get("/api/dashboard/trends", async () => {
    await delay(500);

    return HttpResponse.json({
      success: true,
      message: "Experiment trends fetched successfully",
      data: trendData,
    });
  }),

  // Categories
  http.get("/api/dashboard/categories", async () => {
    await delay(500);

    return HttpResponse.json({
      success: true,
      message: "Category data fetched successfully",
      data: categoryData,
    });
  }),

  // Recent Activities
  http.get("/api/dashboard/activities", async () => {
    await delay(500);

    return HttpResponse.json({
      success: true,
      message: "Recent activities fetched successfully",
      data: recentActivities,
    });
  }),

  // Budget
  http.get("/api/dashboard/budget", async () => {
    await delay(500);

    return HttpResponse.json({
      success: true,
      message: "Budget data fetched successfully",
      data: budgetData,
    });
  }),
];
