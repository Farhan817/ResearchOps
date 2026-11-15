import * as Yup from "yup";

export const expenseSchema = Yup.object({
  description: Yup.string()
    .trim()
    .required("Expense description is required")
    .max(200, "Maximum 200 characters allowed"),

  category: Yup.string().required("Please select an expense category"),

  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than zero")
    .required("Amount is required"),

  currency: Yup.string().required("Currency is required"),

  expenseDate: Yup.date()
    .typeError("Please select a valid expense date")
    .required("Expense date is required")
    .max(new Date(), "Expense date cannot be in the future"),

  projectId: Yup.string().required("Please select a project"),

  experimentId: Yup.string().optional(),

  materialId: Yup.string().optional(),

  attachment: Yup.mixed<File>()
    .nullable()
    .test(
      "fileSize",
      "File size must be less than 5 MB",
      (file) => !file || file.size <= 5 * 1024 * 1024,
    )
    .test(
      "fileType",
      "Only PDF, JPG and PNG files are allowed",
      (file) =>
        !file ||
        ["application/pdf", "image/jpeg", "image/png"].includes(file.type),
    ),
});
