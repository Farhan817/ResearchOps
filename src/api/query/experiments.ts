import { endpoints } from "../endpoint";
import { useFetch } from "../reactQuery";
import type { ExperimentalDetailsResponse } from "../types";

export const useGetExp = (params: { page: number; pageSize: number }) =>
  useFetch(endpoints.experiments, params);

export const useGetExpeDetails = (
  params: { id: number | null },
  config: { enabled?: boolean },
) =>
  useFetch<ExperimentalDetailsResponse>(
    endpoints.experimentsByid + params.id,
    {},
    config,
  );
