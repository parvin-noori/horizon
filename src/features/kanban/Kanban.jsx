import {
  DndContext,
  DragOverlay,
  MouseSensor,
  pointerWithin,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useEffect, useMemo, useState } from "react";

import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetData } from "../../hooks/useGetData";
import Column from "./Column";
import KanbanItem from "./KanbanItem";
import { replaceAllKanbanItems } from "./kanbanSlice";

export default function Kanban() {
  const { data, isLoading, error } = useGetData();
  const { kanban: kanbanItems } = data ?? {};
  const [activeColumn, setActiveColumn] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const [columns, setColumns] = useState([
    { id: "backlog", title: "backlog", color: "#6B7280" },
    { id: "In Progress", title: "In Progress", color: "#F59E0B" },
    { id: "Done", title: "Done", color: "#10B981" },
  ]);

  const items = useSelector((state) => state.kanban.items);
  const dispatch = useDispatch();
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  // sync local items with redux changes (edit / add)
  useEffect(() => {
    if (!items.length && kanbanItems) {
      dispatch(replaceAllKanbanItems(kanbanItems));
    }
  }, [kanbanItems, dispatch]);

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
       delay: 150,
      tolerance: 5,
      distance: 3,
    },
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      // delay: 150,
      // tolerance: 5,
      distance: 3,
    },
  });
  const sensors = useSensors(touchSensor, mouseSensor);

  const createNewColumns = () => {
    const columnToAdd = {
      id: uuidv4(),
      title: `columne ${columns.length}`,
      // color:"#3B82F6"
    };
    return [...columns, columnToAdd];
  };

  const onDragStart = (event) => {
    if (event.active.data.current?.type === "column") {
      setActiveColumn(event.active.data.current?.column);
      return;
    }
    if (event.active.data.current?.type === "item") {
      setActiveItem(event.active.data.current?.feature);
      return;
    }
  };

  const onDragEnd = (event) => {
    setActiveColumn(null);
    setActiveItem(null);

    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });

    dispatch(replaceAllKanbanItems(items));
  };

  const onDragOver = (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "item";
    const isOverATask = over.data.current?.type === "item";

    if (!isActiveATask) return;

    // I'm dropping a task over another task
    if (isActiveATask && isOverATask) {
      const activeIndex = items.findIndex((t) => t.id === activeId);
      const overIndex = items.findIndex((t) => t.id === overId);

      const newItems = items.map((item) => ({ ...item }));
      newItems[activeIndex].column = newItems[overIndex].column;
      const sorted = arrayMove(newItems, activeIndex, overIndex);

      dispatch(replaceAllKanbanItems(sorted));
    }

    const isOverAColumn = over.data.current?.type === "column";

    // I'm dropping a task over a column

    if (isActiveATask && isOverAColumn) {
      // setFeatures((features) => {
      const activeIndex = items.findIndex((t) => t.id === activeId);

      const newItems = items.map((item) => ({ ...item }));
      newItems[activeIndex].column = overId;

      dispatch(replaceAllKanbanItems(newItems));

    }
  };

  if (isLoading) <span>is loading...</span>;
  if (error) console.log(error);

  return (
    <div className="kanban">
      <DndContext
        collisionDetection={pointerWithin}
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div
          className="flex lg:grid 
          lg:grid-cols-3 
          gap-5 
          overflow-x-auto 
          no-scrollbar"
        >
          <SortableContext items={columnsId}>
            {columns.map((col) => (
              <Column
                key={col.id}
                col={col}
                features={items}
                items={items.filter((item) => item.column === col.id)}
              />
            ))}
          </SortableContext>
        </div>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <Column
                col={activeColumn}
                features={items}
                items={items.filter((item) => item.column === activeColumn.id)}
              />
            )}
            {activeItem && (
              <div>
                <KanbanItem feature={activeItem} />
              </div>
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
}
