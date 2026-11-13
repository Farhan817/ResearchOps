import { useState } from "react";
import { useFormik } from "formik";
import type { LoginForm, UseLoginReturn } from "../types";
import { loginSchema } from "./LoginFormSchema";
import { useLoginApi } from "../../../api/query/login";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../utils/helper";

const useLogin = (): UseLoginReturn => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { mutate: loginMutation, isPending: loading } = useLoginApi();

  const formik = useFormik<LoginForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginMutation(
        { data: values },
        {
          onSuccess: (data) => {
            if (data.success) {
              showSuccessToast("Login Successfully");
              navigate("/dashboard", { replace: true });
            } else {
              showErrorToast(data.message);
            }
          },
          onError: (error) => {
            console.log(error, "error");
          },
        },
      );
    },
  });

  return [{ showPassword, loading, formik }, { setShowPassword }];
};
export default useLogin;
