import { http, HttpResponse } from "msw";
import { expenseData, expenseSummary } from "../data/expense";

export const expenseHandlers = [
  http.get("/api/expenses/summary", () => {
    return HttpResponse.json({
      success: true,
      data: expenseSummary,
    });
  }),
  http.get("/api/expenses", ({ request }) => {
    const url = new URL(request.url);

    const page = Number(url.searchParams.get("page") || 1);
    const limit = Number(url.searchParams.get("pageSize") || 5);

    const sortBy = url.searchParams.get("sortBy");
    const sortOrder = url.searchParams.get("sortOrder") || "asc";

    const records = [...expenseData];

    // Sorting
    if (sortBy) {
      records.sort((a, b) => {
        const valueA = a[sortBy as keyof typeof a];
        const valueB = b[sortBy as keyof typeof b];

        const comparison =
          typeof valueA === "number" && typeof valueB === "number"
            ? valueA - valueB
            : String(valueA ?? "").localeCompare(
                String(valueB ?? ""),
                undefined,
                { numeric: true },
              );

        return sortOrder === "desc" ? -comparison : comparison;
      });
    }

    // Pagination
    const totalRecords = records.length;
    const totalPages = Math.ceil(totalRecords / limit);

    const startIndex = (page - 1) * limit;
    const paginatedRecords = records.slice(startIndex, startIndex + limit);

    return HttpResponse.json({
      success: true,
      data: paginatedRecords,
      pagination: {
        page,
        pageSize: limit,
        total: totalRecords,
        totalPages,
      },
    });
  }),
];
