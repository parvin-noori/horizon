import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
}

const savedTheme = localStorage.getItem("theme");
const initialState: ThemeState = {
  theme: savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
