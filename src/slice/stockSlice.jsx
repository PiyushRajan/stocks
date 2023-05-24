import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStocks: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStocks } = stockSlice.actions;

export default stockSlice.reducer;
