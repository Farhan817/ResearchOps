import type { UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError, AxiosRequestConfig, Method } from "axios";

export type ApiConfig = Omit<
  AxiosRequestConfig,
  "url" | "method" | "data" | "params" | "signal"
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
