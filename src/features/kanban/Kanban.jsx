import {
  closestCorners,
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useEffect, useMemo, useState } from "react";

import { arrayMove } from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";
import { useGetData } from "../../hooks/useGetData";
import Column from "./Column";
import KanbanItem from "./KanbanItem";
import { replaceAllKanbanItems } from "./kanbanSlice";

export default function Kanban() {
  const { data, isLoading, error } = useGetData();
  const { kanban: kanbanItems } = data ?? {};
  const [activeId, setActiveId] = useState(null);
  const items = useSelector((state) => state.kanban.items);
  const dispatch = useDispatch();

  // sync local items with redux changes (edit / add)
  useEffect(() => {
    if (!items.length && kanbanItems) {
      dispatch(replaceAllKanbanItems(kanbanItems));
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

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const activeIndex = items.findIndex((item) => item.id === activeId);
    const overIndex = items.findIndex((item) => item.id === overId);
    const activeItem = items[activeIndex];
    const overItem = items[overIndex];

    if (!activeItem || !overIndex === -1) return;

    let newItems = [...items];

    if (activeItem.column == overItem.column) {
      const columnItems = newItems.filter(
        (item) => item.column === activeItem.column
      );

      const oldIndex = columnItems.findIndex((i) => i.id === activeId);
      const newIndex = columnItems.findIndex((i) => i.id === overId);

      const sortedColumn = arrayMove(columnItems, oldIndex, newIndex);

      // merge back
      newItems = newItems.map((item) => {
        if (item.column !== activeItem.column) return item;
        return sortedColumn.shift();
      });
    } else {
      newItems = newItems.map((item) =>
        item.id === activeId ? { ...item, column: overItem.column } : item
      );
    }
    dispatch(replaceAllKanbanItems(newItems));
  };

  if (isLoading) <span>is loading...</span>;
  if (error) console.log(error);

  return (
    <div className="kanban">
      <DndContext
        onDragStart={handleDragStart}
        collisionDetection={closestCorners}
        sensors={sensor}
        onDragEnd={handleDragEnd}
      >
        <div
          className="flex lg:grid 
          lg:grid-cols-3 
          gap-5 
          overflow-x-auto 
          no-scrollbar"
        >
          {columns.map((col) => (
            <Column key={col.id} col={col} />
          ))}
        </div>
        <DragOverlay>
          {activeId ? (
            <KanbanItem feature={items.find((i) => i.id === activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
