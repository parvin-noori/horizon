import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { Checkbox, CheckboxGroup, cn } from "@heroui/react";
import { useEffect, useState } from "react";
import { useGetData } from "../../../hooks/useGetData";
import TaskItem from "./TaskItem";

export default function Tasks() {
  const [items, setItems] = useState([]);
  const { data, isLoading, error } = useGetData();
  const { tasks } = data ?? [];

  useEffect(() => {
    if (tasks) {
      setItems(tasks);
    }
  }, [tasks]);

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 150,
      tolerance: 5,
    },
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  });
  const sensors = useSensors(touchSensor, mouseSensor);

  const allTitles = items.map((task) => task.title);
  const [selected, setSelected] = useState([
    "dashboard builder",
    "mobile app design",
    "promotional LP",
  ]);

  const toggleSelection = (e) => {
    const checked = e.target.checked;

    if (checked) {
      setSelected(allTitles);
    } else {
      setSelected([]);
    }
  };

  const isAllSelected = selected.length === allTitles.length;

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  if (isLoading) return <span>is loading</span>;
  if (error) {
    console.log(error);
  }

  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <div className="flex items-center gap-2">
        <Checkbox
          classNames={{
            label: cn("w-full text-inherit capitalize"),
          }}
          onChange={toggleSelection}
          checked={isAllSelected}
          value="tasks"
        >
          <span className="capitalize font-bold ">tasks</span>
        </Checkbox>
      </div>

      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={items}>
          <CheckboxGroup
            className="flex flex-col gap-2"
            value={selected}
            onChange={setSelected}
          >
            {items.map((item) => (
              <TaskItem key={item.id} item={item} />
            ))}
          </CheckboxGroup>
        </SortableContext>
      </DndContext>
    </div>
  );
}
