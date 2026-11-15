import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ExpenseSlice {
  id: number | null;
}

const initialState: ExpenseSlice = {
  id: null,
};

const ExpenseSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setExpenseId: (state, action: PayloadAction<number | null>) => {
      state.id = action.payload;
    },
  },
});

export const { setExpenseId } = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
