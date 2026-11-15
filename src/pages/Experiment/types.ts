export interface ExperimentFormData {
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
