import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import todoSlice from "./todoSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    todo: todoSlice,
  },
});

export default store;
