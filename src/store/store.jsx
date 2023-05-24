import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "../slice/stockSlice";

export const store = configureStore({
  reducer: {
    Stocks: stockReducer,
  },
});
