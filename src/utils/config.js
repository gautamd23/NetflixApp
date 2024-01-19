import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "lang",
  initialState: {
    lang: "en",
  },
  reducers: {
    addLng: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { addLng } = config.actions;
export default config.reducer;
