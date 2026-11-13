import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

/* ----------------------------------
   Configuration
---------------------------------- */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

let accessToken: string | null = null;

export const tokenService = {
  get: () => accessToken,

  set: (token: string) => {
    accessToken = token;
  },

  clear: () => {
    accessToken = null;
  },
};

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = tokenService.get();

    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

/* ----------------------------------
   Response Interceptor
---------------------------------- */

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as
      | InternalAxiosRequestConfig
      | undefined;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    // Only handle 401 errors.
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }
  },
);

export default apiClient;
export { apiClient };
