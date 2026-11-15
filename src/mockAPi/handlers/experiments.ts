import { http, HttpResponse, delay } from "msw";

import { experiments } from "../data/experiments";

import type {
  CreateExperimentPayload,
  Experiment,
  ExperimentStatus,
} from "./types";

export const experimentHandlers = [
  http.get("/api/experiments", async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);

    const page = Math.max(1, Number(url.searchParams.get("page")) || 1);

    const pageSize = Math.max(
      1,
      Number(url.searchParams.get("pageSize")) || 10,
    );

    const search = url.searchParams.get("search")?.toLowerCase() || "";

    const status = url.searchParams.get("status") as ExperimentStatus | null;

    let filteredData = [...experiments];

    // Search
    if (search) {
      filteredData = filteredData.filter((item) =>
        [item.title, item.description, item.objective, item.category].some(
          (value) => value.toLowerCase().includes(search),
        ),
      );
    }

    // Status filter
    if (status) {
      filteredData = filteredData.filter((item) => item.status === status);
    }

    const total = filteredData.length;
    const totalPages = Math.ceil(total / pageSize);

    const startIndex = (page - 1) * pageSize;

    const data = filteredData.slice(startIndex, startIndex + pageSize);

    return HttpResponse.json({
      success: true,
      message: "Experiments fetched successfully",
      data,
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
      },
    });
  }),

  // GET EXPERIMENT BY ID
  http.get("/api/experiments/:id", async ({ params }) => {
    await delay(300);

    const id = Number(params.id);

    const experiment = experiments.find((item) => item.id === id);

    if (!experiment) {
      return HttpResponse.json(
        {
          success: false,
          message: "Experiment not found",
        },
        { status: 404 },
      );
    }

    return HttpResponse.json({
      success: true,
      message: "Experiment fetched successfully",
      data: experiment,
    });
  }),

  // CREATE EXPERIMENT
  http.post("/api/experiments", async ({ request }) => {
    await delay(500);

    const payload = (await request.json()) as CreateExperimentPayload;

    const newExperiment: Experiment = {
      ...payload,
      id: Math.max(0, ...experiments.map((item) => item.id)) + 1,
    };

    experiments.unshift(newExperiment);

    return HttpResponse.json(
      {
        success: true,
        message: "Experiment created successfully",
        data: newExperiment,
      },
      { status: 201 },
    );
  }),
];
