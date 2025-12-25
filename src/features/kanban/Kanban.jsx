import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useEffect, useMemo } from "react";

import { useDispatch } from "react-redux";
import { useGetData } from "../../hooks/useGetData";
import Column from "./Column";
import { editKanban, setKanbanItems } from "./kanbanSlice";

export default function Kanban() {
  const { data, isLoading, error } = useGetData();
  const { kanban: kanbanItems } = data ?? {};
  const dispatch = useDispatch();

  // sync local items with redux changes (edit / add)
  useEffect(() => {
    if (kanbanItems) {
      dispatch(setKanbanItems(kanbanItems));
    }
  }, [kanbanItems, dispatch]);

  const columns = useMemo(
    () => [
      { id: 1, name: "backlog", color: "#6B7280" },
      { id: 2, name: "In Progress", color: "#F59E0B" },
      { id: 3, name: "Done", color: "#10B981" },
    ],
    []
  );

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 150,
      tolerance: 5,
    },
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      delay: 150,
      tolerance: 5,
    },
  });
  const sensor = useSensors(touchSensor, mouseSensor);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const activeItem = items.find((item) => item.id === activeId);
    const overItem = items.find((item) => item.id === over.id);
    const newColumn = overItem?.column;

    setKanbanItems((prev) => {
      let newList = [...prev];

      if (newColumn && activeItem.column !== newColumn) {
        newList = newList.map((item) =>
          item.id === activeId ? { ...item, column: newColumn } : item
        );
      }

      const activeIndex = newList.findIndex((item) => item.id === activeId);
      const overIndex = newList.findIndex((item) => item.id === over.id);

      return arrayMove(newList, activeIndex, overIndex);
    });
    dispatch(editKanban({ id: activeId, column: newColumn }));
  };

  if (isLoading) <span>is loading...</span>;
  if (error) console.log(error);

  return (
    <div className="kanban">
      <DndContext sensors={sensor} onDragEnd={handleDragEnd}>
        <div
          className="flex lg:grid 
          lg:grid-cols-3 
          gap-5 
          overflow-x-auto 
          no-scrollbar"
        >
          {columns.map((col) => (
            <Column col={col} />
          ))}
        </div>
      </DndContext>
    </div>
  );
}
