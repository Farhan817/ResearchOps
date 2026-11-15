import { useFormik } from "formik";
import { type ExpenseFormValues } from "../types";
import { expenseSchema } from "./ExpnseFormSchema";
import { useNavigate } from "react-router-dom";
import { experiments, materials } from "../../../utils/constants";
import { useMemo } from "react";

const useAddEditExpense = () => {
  const initialExpenseValues: ExpenseFormValues = {
    description: "",
    category: "",
    amount: "",
    currency: "INR",
    expenseDate: "",
    projectId: "",
    experimentId: "",
    materialId: "",
    attachment: null,
  };

  const navigate = useNavigate();
  const formik = useFormik<ExpenseFormValues>({
    initialValues: initialExpenseValues,
    validationSchema: expenseSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        navigate("/expenses");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleProjectChange = (value: string) => {
    formik.setFieldValue("projectId", value);
    formik.setFieldValue("experimentId", "");
    formik.setFieldValue("materialId", "");
  };

  const handleExperimentChange = (value: string) => {
    formik.setFieldValue("experimentId", value);
    formik.setFieldValue("materialId", "");
  };

  const handleFileChange = (file: File | null) => {
    formik.setFieldValue("attachment", file);
  };

  const removeAttachment = () => {
    handleFileChange(null);
  };

  const selectedExperiments = useMemo(
    () =>
      experiments.filter(
        (experiment) => experiment.projectId === formik.values.projectId,
      ),
    [formik.values.projectId],
  );

  const selectedMaterials = useMemo(
    () =>
      materials.filter(
        (material) => material.experimentId === formik.values.experimentId,
      ),
    [formik.values.experimentId],
  );

  const handleCancel = () => {
    navigate("/expense");
  };
  return [
    { formik, selectedExperiments, selectedMaterials },
    {
      handleProjectChange,
      handleExperimentChange,
      handleFileChange,
      removeAttachment,
      handleCancel,
    },
  ];
};
export default useAddEditExpense;
