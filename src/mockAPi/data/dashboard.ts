export const statsData = [
  {
    title: "Total Experiments",
    value: 128,
    description: "vs previous month",
    trend: "+12%",
    iconClassName: "bg-primary/10 text-primary",
    icon: "◫",
  },
  {
    title: "Active Experiments",
    value: 42,
    description: "Currently in progress",
    iconClassName: "bg-blue-500/10 text-blue-600",
    icon: "◷",
  },
  {
    title: "Completed Experiments",
    value: 68,
    description: "53% of total experiments",
    trend: "+8%",
    iconClassName: "bg-emerald-500/10 text-emerald-600",
    icon: "✓",
  },
  {
    title: "Delayed Experiments",
    value: 18,
    description: "Require attention",
    trend: "14% of total",
    trendPositive: false,
    iconClassName: "bg-red-500/10 text-red-600",
    icon: "!",
  },
];

export const lifecycleData = [
  { stage: "Planning", count: 20 },
  { stage: "Preparation", count: 15 },
  { stage: "Running", count: 10 },
  { stage: "Completed", count: 65 },
  { stage: "Delayed", count: 18 },
];

export const trendData = [
  { month: "Jun", created: 12, completed: 8 },
  { month: "Jul", created: 18, completed: 11 },
  { month: "Aug", created: 15, completed: 14 },
  { month: "Sep", created: 22, completed: 16 },
  { month: "Oct", created: 19, completed: 18 },
  { month: "Nov", created: 25, completed: 20 },
];

export const categoryData = [
  { category: "Chemical", experiments: 32 },
  { category: "Material", experiments: 26 },
  { category: "Biological", experiments: 21 },
  { category: "Environmental", experiments: 18 },
  { category: "Other", experiments: 13 },
];

export const recentActivities = [
  {
    id: 1,
    title: "New experiment created",
    description: "Materials testing experiment",
    time: "10 minutes ago",
    type: "created",
    researcher: "Redacted",
  },
  {
    id: 2,
    title: "Experiment status updated",
    description: "Chemical analysis moved to Running",
    time: "1 hour ago",
    type: "updated",
    researcher: "Redacted",
  },
  {
    id: 3,
    title: "Expected end date changed",
    description: "Sample validation experiment",
    time: "3 hours ago",
    type: "calendar",
    researcher: "Redacted",
  },
  {
    id: 4,
    title: "Experiment completed",
    description: "Material durability testing",
    time: "Yesterday",
    type: "completed",
    researcher: "Redacted",
  },
];

export const budgetData = {
  totalBudget: 1000000,
  usedBudget: 720000,
  remainingBudget: 280000,
  utilizationPercentage: 72,
};
