import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thisTestId: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setThisTestId: (state, action) => {
      state.thisTestId = action.payload;
    },
  },
});

export default testSlice.reducer;
export const { setThisTestId } = testSlice.actions;
