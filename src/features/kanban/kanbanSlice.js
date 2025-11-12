import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: 'option to "use local/server version" feature',
      desc: "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
      status: "updates",
      members: ["Avatar2", "Avatar1"],
      column: 1,
    },
    {
      id: 2,
      cover: "/imgs/Cover1.png",
      title: "add/modify your own CSS/Selectors",
      desc: "Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.",
      status: "pending",
      members: ["Avatar2", "Avatar1", "Avatar3"],
      column: 1,
    },
    {
      id: 3,
      title: "Shortcode for templates to display correctly",
      desc: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
      status: "errors",
      members: ["Avatar2"],
      column: 1,
    },
    {
      id: 4,
      title: "general ideas to improve 'edit' workflow",
      desc: "Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).",
      status: "pending",
      members: ["Avatar2", "Avatar1", "Avatar3"],
      column: 2,
    },
    {
      id: 5,
      title: "shortcuts for templates to display correctly",
      desc: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
      status: "updates",
      members: ["Avatar2"],
      column: 2,
    },
    {
      id: 6,
      title: "[UX Design]- set the default library tab",
      cover: "/imgs/cover2.png",
      desc: "I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...",
      status: "errors",
      memebers: ["Avatar2", "Avatar1"],
      column: 2,
    },
    {
      id: 7,
      title: "copy/paste elements between pages",
      desc: "We can only copy/paste elements (or group of elements) in the same page, which is quite limited.",
      members: ["Avatar2"],
      column: 3,
    },
    {
      id: 8,
      title: "Remove Extra DIV for each container added",
      desc: "I still hope there won't have an extra div for each container we added. It should be something for better styling...",
      members: ["Avatar2", "Avatar3", "Avatar1"],
      column: 3,
    },
    {
      id: 9,
      title: "Add Figma files for the Library design blocks",
      desc: "I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...",
      members: ["Avatar2", "Avatar3", "Avatar1"],
      column: 3,
    },
  ],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    addKanban: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});

export const { addKanban } = kanbanSlice.actions;
export default kanbanSlice.reducer;
