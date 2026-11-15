export interface Experiment {
  id: number;
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

export const experiments: Experiment[] = [
  {
    id: 1,
    title: "Cell Growth Analysis",
    description:
      "Analysis of cell growth under different environmental conditions.",
    objective: "Identify optimal growth conditions.",
    hypothesis:
      "Cells exposed to controlled temperature and nutrient conditions will demonstrate improved growth rates.",
    category: "Biology",
    project: "Cellular Research Initiative",
    team: "team_a",
    materials: ["Culture Media", "Petri Dish", "Microscope"],
    methodology:
      "Culture cells under different temperature and nutrient conditions. Monitor and record cell growth at regular intervals using microscopy.",
    plannedStartDate: "2026-11-01",
    plannedCompletionDate: "2026-11-30",
    actualStartDate: "2026-11-01",
    actualCompletionDate: "",
    expectedOutcome:
      "Identification of optimal environmental conditions for cell growth.",
    status: "in-progress",
    visibility: "public",
  },
  {
    id: 2,
    title: "Chemical Stability Test",
    description:
      "Testing chemical stability under varying temperature conditions.",
    objective: "Determine chemical degradation rate.",
    hypothesis:
      "Higher temperatures will accelerate chemical degradation compared to controlled storage conditions.",
    category: "Chemistry",
    project: "Chemical Stability Research",
    team: "team_b",
    materials: ["Test Tubes", "Chemical Reagents", "Temperature Sensors"],
    methodology:
      "Expose chemical samples to different temperature conditions and measure their stability at predefined intervals.",
    plannedStartDate: "2026-11-05",
    plannedCompletionDate: "2026-12-05",
    actualStartDate: "",
    actualCompletionDate: "",
    expectedOutcome:
      "A comparative analysis of chemical stability and degradation rates across different temperatures.",
    status: "planned",
    visibility: "public",
  },
  {
    id: 3,
    title: "Protein Analysis",
    description: "Analysis of protein samples using laboratory equipment.",
    objective: "Measure protein concentration.",
    hypothesis:
      "The selected analytical method will provide consistent and reproducible protein concentration measurements.",
    category: "Biochemistry",
    project: "Protein Characterization Study",
    team: "team_c",
    materials: ["Protein Samples", "Centrifuge", "Test Tubes"],
    methodology:
      "Prepare protein samples, process them using centrifugation, and analyze protein concentrations using laboratory measurement techniques.",
    plannedStartDate: "2026-10-10",
    plannedCompletionDate: "2026-11-20",
    actualStartDate: "2026-10-10",
    actualCompletionDate: "2026-11-12",
    expectedOutcome:
      "Accurate protein concentration measurements and documented analysis results.",
    status: "completed",
    visibility: "private",
  },
];
