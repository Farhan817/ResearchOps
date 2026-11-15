import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ExperimentSlice {
  id: number | null;
}

const initialState: ExperimentSlice = {
  id: null,
};

const ExperimentSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setExpId: (state, action: PayloadAction<number | null>) => {
      state.id = action.payload;
    },
  },
});

export const { setExpId } = ExperimentSlice.actions;

export default ExperimentSlice.reducer;
