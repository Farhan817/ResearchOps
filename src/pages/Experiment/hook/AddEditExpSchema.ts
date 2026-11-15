import * as Yup from "yup";

export const experimentSchema = Yup.object({
  title: Yup.string()
    .trim()
    .required("Experiment title is required")
    .min(3, "Title must be at least 3 characters")
    .max(150, "Title cannot exceed 150 characters"),

  description: Yup.string()
    .trim()
    .required("Description is required")
    .max(1000, "Description cannot exceed 1000 characters"),

  objective: Yup.string()
    .trim()
    .required("Research objective is required")
    .max(1000, "Objective cannot exceed 1000 characters"),

  hypothesis: Yup.string()
    .trim()
    .max(1000, "Hypothesis cannot exceed 1000 characters")
    .optional(),

  category: Yup.string().required("Experiment category is required"),

  project: Yup.string().optional(),

  team: Yup.string().optional(),

  materials: Yup.array()
    .of(Yup.string().trim().required("Material cannot be empty"))
    .max(50, "You can add a maximum of 50 materials")
    .optional(),

  methodology: Yup.string()
    .trim()
    .max(5000, "Methodology cannot exceed 5000 characters")
    .optional(),

  plannedStartDate: Yup.string().required("Planned start date is required"),

  plannedCompletionDate: Yup.string()
    .required("Planned completion date is required")
    .test(
      "after-start-date",
      "Completion date must be after or equal to start date",
      function (value) {
        const { plannedStartDate } = this.parent;

        if (!value || !plannedStartDate) return true;

        return value >= plannedStartDate;
      },
    ),

  actualStartDate: Yup.string().optional(),

  actualCompletionDate: Yup.string()
    .optional()
    .test(
      "after-actual-start",
      "Actual completion date must be after or equal to actual start date",
      function (value) {
        const { actualStartDate } = this.parent;

        if (!value || !actualStartDate) return true;

        return value >= actualStartDate;
      },
    ),

  expectedOutcome: Yup.string()
    .trim()
    .max(2000, "Expected outcome cannot exceed 2000 characters")
    .optional(),

  status: Yup.string()
    .oneOf(
      ["draft", "planned", "in_progress", "on_hold"],
      "Invalid experiment status",
    )
    .required("Lifecycle status is required"),

  visibility: Yup.string()
    .oneOf(["private", "public"], "Invalid visibility option")
    .required("Visibility configuration is required"),
});

export type ExperimentFormValues = Yup.InferType<typeof experimentSchema>;
