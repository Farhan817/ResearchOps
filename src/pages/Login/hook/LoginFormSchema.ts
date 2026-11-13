import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email address is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),

  rememberMe: yup.boolean().default(false),
});

export type LoginFormValues = yup.InferType<typeof loginSchema>;
