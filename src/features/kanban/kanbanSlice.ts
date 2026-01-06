import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KanbanItemType } from "./Kanban";

const savedItems = localStorage.getItem("kanbanItems");

const initialState: { items: KanbanItemType[] } = {
  items: savedItems ? JSON.parse(savedItems) : [],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    replaceAllKanbanItems: (state, action: PayloadAction<KanbanItemType[]>) => {
      state.items = action.payload;
      localStorage.setItem("kanbanItems", JSON.stringify(state.items));
    },
    addKanban: (state, action: PayloadAction<KanbanItemType>) => {
      state.items.unshift(action.payload);
    },
    editKanban: (state, action: PayloadAction<KanbanItemType>) => {
      let newItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      return { ...state, items: newItems };
    },
    removeKanban: (state, action: PayloadAction<{ id: number }>) => {
      let newItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: newItems };
    },
  },
});

export const { replaceAllKanbanItems, addKanban, editKanban, removeKanban } =
  kanbanSlice.actions;
export default kanbanSlice.reducer;
