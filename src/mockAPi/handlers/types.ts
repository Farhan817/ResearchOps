export type ExperimentStatus =
  | "Planned"
  | "In Progress"
  | "Completed"
  | "On Hold";

export interface Experiment {
  id?: number;
  title: string;
  description: string;
  objective: string;
  hypothesis: string;
  category: string;
  project: string;
  team: string;
  materials: string[];
  methodology: string;
  plannedStartDate: string;
  plannedCompletionDate: string;
  actualStartDate: string;
  actualCompletionDate: string;
  expectedOutcome: string;
  status: "draft" | "planned" | "in-progress" | "completed" | "cancelled";
  visibility: "private" | "public";
}

export interface CreateExperimentPayload {
  title: string;
  description: string;
  objective: string;
  category: string;
  team: string;
  materialUsed: string[];
  startDate: string;
  expectedEndDate: string;
  status: ExperimentStatus;
}

export interface ExperimentPagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface ExperimentListResponse {
  success: boolean;
  message: string;
  data: Experiment[];
  pagination: ExperimentPagination;
}

export interface ExperimentResponse {
  success: boolean;
  message: string;
  data: Experiment;
}

export interface ExperimentQueryParams {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: ExperimentStatus;
}
