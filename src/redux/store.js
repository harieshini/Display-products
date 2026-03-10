import { configureStore } from "@reduxjs/toolkit";
import policyReducer from "./policySlice";

const store = configureStore({
  reducer: {
    policies: policyReducer
  }
});

export default store;