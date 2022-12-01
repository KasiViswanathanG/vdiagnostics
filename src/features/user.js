import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thisUserId: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setThisUserId: (state, action) => {
      state.thisUserId = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setThisUserId } = userSlice.actions;
