import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pagestate",
  initialState: {
    value: {
      title: "",
      text: ""
    }
  },
  reducers: {
    getPageState: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { getPageState } = pageSlice.actions;

export default pageSlice.reducer;
