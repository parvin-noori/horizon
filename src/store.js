import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "./features/kanban/kanbanSlice";
import themeReducer from "./features/theme/ThemeSlice";
import languageReducer from "./features/language/languageSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    kanban: kanbanReducer,
    lang:languageReducer
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("kanbanItems", JSON.stringify(state.kanban.items));
});
