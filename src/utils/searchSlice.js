import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchToggle: false,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.searchToggle = !state.searchToggle;
    },
  },
});
export const { toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;
