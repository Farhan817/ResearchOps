import type { useFormik } from "formik";

export interface LoginForm {
  email: string;
  password: string;
}

export type LoginResponse = {
  success: boolean;
  message: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
};

export type UseLoginReturn = [
  {
    showPassword: boolean;
    loading: boolean | undefined;
    formik: ReturnType<typeof useFormik<LoginForm>>;
  },
  {
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  },
];
