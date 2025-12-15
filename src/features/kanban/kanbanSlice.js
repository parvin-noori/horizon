import { createSlice } from "@reduxjs/toolkit";

const savedItems = localStorage.getItem("kanbanItems");

const initialState = {
  items: savedItems ? JSON.parse(savedItems) : [],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    setKanbanItems: (state, action) => {
      state.items = action.payload;
      localStorage.setItem("kanbanItems", JSON.stringify(state.items));
    },
    addKanban: (state, action) => {
      state.items.unshift(action.payload);
    },
    editKanban: (state, action) => {
      let newItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      return { ...state, items: newItems };
    },
    removeKanban: (state, action) => {
      let newItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: newItems };
    },
  },
});

export const { setKanbanItems, addKanban, editKanban, removeKanban } =
  kanbanSlice.actions;
export default kanbanSlice.reducer;
