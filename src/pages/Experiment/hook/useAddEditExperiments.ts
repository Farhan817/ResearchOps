import { useNavigate, useParams } from "react-router-dom";
import { useGetExpeDetails } from "../../../api/query/experiments";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import type { ExperimentFormData } from "../types";
import { useFormik } from "formik";
import { setExpId } from "../../../store/slice/ExperimentSlice";
import { useMemo, useState } from "react";

const useAddEditExperiments = () => {
  const [materialInput, setMaterialInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const expId = useAppSelector((state) => state.experiments.id) || null;
  const { mode } = useParams();
  const isAdd = mode == "add";
  const { data: experimentDetails } = useGetExpeDetails(
    {
      id: expId,
    },
    {
      enabled: Boolean(expId) || !isAdd,
    },
  );
  const initialValues: ExperimentFormData = useMemo(
    () => ({
      title: experimentDetails?.data.title ?? "",
      description: experimentDetails?.data?.description ?? "",
      objective: experimentDetails?.data?.objective ?? "",
      hypothesis: experimentDetails?.data?.hypothesis ?? "",
      category: experimentDetails?.data?.category ?? "",
      project: experimentDetails?.data?.project ?? "",
      team: experimentDetails?.data?.team ?? "",
      materials: experimentDetails?.data?.materials ?? [],
      methodology: experimentDetails?.data?.methodology ?? "",
      plannedStartDate: experimentDetails?.data?.plannedStartDate ?? "",
      plannedCompletionDate:
        experimentDetails?.data?.plannedCompletionDate ?? "",
      actualStartDate: experimentDetails?.data?.actualStartDate ?? "",
      actualCompletionDate: experimentDetails?.data?.actualCompletionDate ?? "",
      expectedOutcome: experimentDetails?.data?.expectedOutcome ?? "",
      status: experimentDetails?.data?.status ?? "draft",
      visibility: experimentDetails?.data?.visibility ?? "private",
    }),
    [experimentDetails],
  );

  const formik = useFormik<ExperimentFormData>({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleCancel = () => {
    formik.resetForm();
    dispatch(setExpId(null));
    navigate("/experiments");
  };

  const addMaterial = (material: string) => {
    const value = material.trim();

    if (!value || formik.values.materials.includes(value)) return;

    formik.setFieldValue("materials", [...formik.values.materials, value]);
  };

  const removeMaterial = (material: string) => {
    formik.setFieldValue(
      "materials",
      formik.values.materials.filter((item) => item !== material),
    );
  };

  return [
    { formik, materialInput, isAdd },
    { handleCancel, addMaterial, removeMaterial, setMaterialInput },
  ];
};
export default useAddEditExperiments;
