import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Language = "fa" | "en";

interface LangState {
  lang: Language;
}
const savedLang = localStorage.getItem("lang");

const initialState: LangState = {
  lang: savedLang === "fa" || savedLang === "en" ? savedLang : "en",
};

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<Language>) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
