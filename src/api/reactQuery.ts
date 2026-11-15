import { useMutation, useQuery } from "@tanstack/react-query";
import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError, AxiosRequestConfig } from "axios";

import type {
  ApiConfig,
  ApiRequestVariables,
  UseGenericMutationOptions,
} from "./types";
import { apiClient } from "./axios";

type UseFetchOptions<TData> = {
  url: string;
  params?: Record<string, unknown>;
  config?: ApiConfig;
  queryKey?: QueryKey;
  queryOptions?: Omit<
    UseQueryOptions<TData, AxiosError, TData, QueryKey>,
    "queryKey" | "queryFn"
  >;
};

export function useFetch<TData = unknown>(
  url: string,
  params?: Record<string, unknown>,
  config?: ApiConfig,
  queryOptions?: Omit<
    UseQueryOptions<TData, AxiosError>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery<TData, AxiosError>({
    ...queryOptions,
    queryKey: ["api", "get", url, params],
    queryFn: async ({ signal }) => {
      const response = await apiClient.get<TData>(url, {
        ...config,
        params,
        signal,
      });

      return response.data;
    },
  });
}
export function useGenericMutation<
  TResponse = unknown,
  TBody = unknown,
  TParams = Record<string, unknown>,
  TContext = unknown,
>({
  url,
  method,
  config,
  mutationOptions,
}: UseGenericMutationOptions<TResponse, TBody, TParams, TContext>) {
  return useMutation<
    TResponse,
    AxiosError,
    ApiRequestVariables<TBody, TParams>,
    TContext
  >({
    ...mutationOptions,
    mutationFn: async ({ data, params, url: overrideUrl }) => {
      const response = await apiClient.request<TResponse>({
        ...config,
        url: overrideUrl ?? url,
        method,
        data,
        params,
      });

      return response.data;
    },
  });
}

export const usePost = <TResponse = unknown, TBody = unknown>(
  url: string,
  config?: ApiConfig,
) => {
  return useGenericMutation<TResponse, TBody>({
    url,
    method: "POST",
    config,
  });
};

export const usePut = <TResponse = unknown, TBody = unknown>(
  url: string,
  config: ApiConfig,
) => {
  return useGenericMutation<TResponse, TBody>({
    url,
    method: "PUT",
    config,
  });
};
