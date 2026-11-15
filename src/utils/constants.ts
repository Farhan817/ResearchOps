export const categoryOptions = [
  { label: "Clinical Research", value: "clinical" },
  { label: "Laboratory", value: "laboratory" },
  { label: "Observational", value: "observational" },
  { label: "Experimental", value: "experimental" },
  { label: "Computational", value: "computational" },
];

export const projectOptions = [
  { label: "Project Alpha", value: "alpha" },
  { label: "Project Beta", value: "beta" },
  { label: "Project Gamma", value: "gamma" },
];

export const teamOptions = [
  { label: "Research Team A", value: "team_a" },
  { label: "Research Team B", value: "team_b" },
  { label: "Research Team C", value: "team_c" },
];

export const statusOptions = [
  { label: "Draft", value: "draft" },
  { label: "Planned", value: "planned" },
  { label: "In Progress", value: "in_progress" },
  { label: "On Hold", value: "on_hold" },
  {
    label: "Complete",
    value: "completed",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
];

export const visibilityOptions = [
  {
    label: "Private",
    value: "private",
    description: "Only you can access this experiment.",
  },

  {
    label: "Organization",
    value: "public",
    description: "Visible across the organization.",
  },
];

export const experiments = [
  { id: "101", name: "Experiment A-101", projectId: "1" },
  { id: "102", name: "Experiment A-102", projectId: "1" },
  { id: "103", name: "Experiment B-103", projectId: "2" },
  { id: "104", name: "Experiment G-104", projectId: "3" },
];

export const materials = [
  { id: "201", name: "Sensor Kit", experimentId: "101" },
  { id: "202", name: "Testing Equipment", experimentId: "101" },
  { id: "203", name: "Chemical A", experimentId: "103" },
  { id: "204", name: "Research Material", experimentId: "104" },
];

export const projects = [
  { id: "1", name: "Project Alpha" },
  { id: "2", name: "Project Beta" },
  { id: "3", name: "Project Gamma" },
];

export const CHART_COLORS = [
  "hsl(var(--primary))",
  "#8B5CF6",
  "#EAB308",
  "#22A06B",
  "#EF4444",
];
