import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import KanbanItem from "./KanbanItem";
import { useState } from "react";

const containerStyle = {
  background: "#dadada",
  padding: 10,
  margin: 10,
  flex: 1,
};

export default function Container(props) {
  const { id, items } = props;
  const [isEditing, setIsEditing] = useState(false);
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div
        ref={setNodeRef}
        className={`rounded-xl p-5 flex flex-col min-h-[500px]  ${
          isOver ? "bg-gray-50" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          {/* <span className="font-semibold">{col.name}</span>
          <span>{columnItems.length}</span> */}
        </div>
        <ul className="space-y-3 flex-1">
          {items?.map((item) => (
            <KanbanItem
              feature={item}
              features={items}
              isEditing={isEditing}
              setIs={setIsEditing}
              key={item.id}
              id={item.id}
            />
          ))}
        </ul>
      </div>
    </SortableContext>
  );
}
