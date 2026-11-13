import type { LoginForm, LoginResponse } from "../../pages/Login/types";
import { endpoints } from "../endpoint";
import { usePost } from "../reactQuery";

export const useLoginApi = () =>
  usePost<LoginResponse, LoginForm>(endpoints.login);
