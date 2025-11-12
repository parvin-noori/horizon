import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "./features/kanban/kanbanSlice";
import themeReducer from "./features/theme/ThemeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    kanban: kanbanReducer,
  },
});
