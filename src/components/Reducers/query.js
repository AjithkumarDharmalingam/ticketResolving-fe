import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    value: {
      id: "",
      title: "",
      createdat: "",
      description: "",
      category: "",
      subcategory: "",
      language: "",
      status: "",
      sendermail: "",
      receivermail: ""
    }
  },
  reducers: {
    getQueryData: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { getQueryData } = querySlice.actions;

export default querySlice.reducer;
