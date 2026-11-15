import type {
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import type { AxiosError, AxiosRequestConfig, Method } from "axios";
import type { Experiment } from "../mockAPi/handlers/types";

export type ApiConfig = Omit<
  AxiosRequestConfig,
  "url" | "method" | "data" | "params" | "signal"
>;

export type ApiQueryOptions<TData> = Omit<
  UseQueryOptions<TData, AxiosError>,
  "queryKey" | "queryFn"
>;
export interface ApiResponse<T> {
  data: T;
}

export interface ApiRequestVariables<
  TBody = unknown,
  TParams = Record<string, unknown>,
> {
  data?: TBody;
  params?: TParams;
  url?: string;
}

export interface UseGenericMutationOptions<
  TResponse,
  TBody,
  TParams,
  TContext = unknown,
> {
  url: string;
  method: Method;
  config?: ApiConfig;
  mutationOptions?: Omit<
    UseMutationOptions<
      TResponse,
      AxiosError,
      ApiRequestVariables<TBody, TParams>,
      TContext
    >,
    "mutationFn"
  >;
}

export type ExperimentalDetailsResponse = {
  data: Experiment;
  success: boolean;
  message: string;
};
