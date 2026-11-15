export const ResearchTeam = {
  team_a: "Research Team A",
  team_b: "Research Team B",
  Team_c: "Research Team C",
} as const;

export type ResearchTeamKey = keyof typeof ResearchTeam;
