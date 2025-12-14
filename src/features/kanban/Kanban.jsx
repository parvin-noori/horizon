import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { Button } from "@heroui/react";
import { useEffect, useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import KanbanItem from "./KanbanItem";
import { addKanban, editKanban } from "./kanbanSlice";

export default function Kanban() {
  const [editngId, setEditngId] = useState(false);
  const kanbanItems = useSelector((state) => state.kanban.items);
  const [items, setItems] = useState(kanbanItems);
  const dispatch = useDispatch();
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

  // sync local items with redux changes (edit / add)
  useEffect(() => {
    setItems(kanbanItems);
  }, [kanbanItems]);

  const columns = useMemo(
    () => [
      { id: 1, name: "backlog", color: "#6B7280" },
      { id: 2, name: "In Progress", color: "#F59E0B" },
      { id: 3, name: "Done", color: "#10B981" },
    ],
    []
  );

  function handleAdd(columnId) {
    const newId = uuidv4();
    setEditngId(newId);
    dispatch(
      addKanban({
        id: newId,
        title: "",
        desc: "",
        column: columnId,
      })
    );
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const activeItem = items.find((item) => item.id === activeId);
    const overItem = items.find((item) => item.id === over.id);
    const newColumn = overItem?.column;

    setItems((prev) => {
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
            <SortableContext
              key={col.id}
              items={items.filter((i) => i.column === col.id).map((i) => i.id)}
            >
              <div className="bg-white dark:bg-secondary lg:w-full md:w-1/2 sm:w-[70%] w-[80%] rounded-xl p-5 space-y-10 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="capitalize text-xl font-semibold">
                    {col.name}
                  </span>
                  <Button
                    type="button"
                    onPress={() => handleAdd(col.id)}
                    isOnlyIcon
                    variant="light"
                    className="bg-secondary text-primary dark:text-white dark:bg-white/5"
                  >
                    <FiPlus />
                  </Button>
                </div>
                <ul className="space-y-5">
                  {items
                    .filter((item) => item.column === col.id)
                    .map((item) => (
                      <KanbanItem
                        key={item.id}
                        feature={item}
                        features={items}
                        isEditng={editngId === item.id}
                        setEditngId={setEditngId}
                      />
                    ))}
                </ul>
              </div>
            </SortableContext>
          ))}
        </div>
      </DndContext>
    </div>
  );
}
