import { useState } from "react";
import { useGetExp } from "../../../api/query/experiments";

import { useAppDispatch } from "../../../store/store";
import { setExpId } from "../../../store/slice/ExperimentSlice";
import { useNavigate } from "react-router-dom";

const useExperiments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data: experimentData, isLoading: experimentDataLoading } = useGetExp({
    page: currentPage,
    pageSize: 10,
  });
  const handelPageChange = (pageValue) => {
    setCurrentPage(pageValue.page);
  };
  const onEdit = (id: number | null) => {
    dispatch(setExpId(id));
    navigate("/experiments/edit");
  };
  const handelAdd = () => {
    navigate("/experiments/add");
  };
  return [
    {
      experimentData: experimentData?.data || [],
      pagination: experimentData?.pagination || {},
      loading: experimentDataLoading,
    },
    { handelPageChange, onEdit, handelAdd },
  ];
};
export default useExperiments;
