import { SortableContext } from "@dnd-kit/sortable";
import { useState } from "react";

export default function Tasks() {
  const [items] = useState([1, 2, 3]);
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-[#2B3674] dark:text-white capitalize font-bold">
          tasks
        </span>
      </div>
      <SortableContext items={items}></SortableContext>
    </div>
  );
}
