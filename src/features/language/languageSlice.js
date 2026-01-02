import { createSlice } from "@reduxjs/toolkit";


const initialState = { lang: localStorage.getItem("lang") || "en" };

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;