import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  policies: [
    {
      id: 1,
      type: "Auto Policy",
      number: "PRA00008087333",
      effective: "07/01/2025 - 07/01/2026",
      paymentType: "auto",
      message:
        "An automatic payment of $157.91 will be submitted on 04/01 using account ending in 1111.",
      icon: "directions_car"
    },
    {
      id: 2,
      type: "Home Policy",
      number: "NJH00008080616",
      effective: "09/22/2025 - 09/22/2026",
      paymentType: "manual",
      amount: "$477.34",
      due: "Due on 03/22",
      button: "Pay Now",
      icon: "home"
    },
    {
      id: 3,
      type: "Home Policy",
      number: "NJH00008006987",
      effective: "09/01/2025 - 09/01/2026",
      paymentType: "auto",
      message:
        "An automatic payment of $525.90 will be submitted on 04/15 using account ending in 4582.",
      icon: "home"
    }
  ],
  selectedPolicy: null
};

const policySlice = createSlice({
  name: "policies",
  initialState,
  reducers: {
    selectPolicy: (state, action) => {
      const policy = state.policies.find(
        (p) => p.id === action.payload
      );
      state.selectedPolicy = policy;
    }
  }
});

export const { selectPolicy } = policySlice.actions;
export default policySlice.reducer;