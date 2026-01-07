import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { Checkbox, CheckboxGroup, cn, Skeleton } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetData } from "../../../hooks/useGetData";
import { useItemTranslation } from "../../../hooks/useTranslation";
import TaskItem from "./TaskItem";
import { Task, TaskResponse } from "./types/task.types";

export default function Tasks() {
  const [items, setItems] = useState<Task[]>([]);
  const { data, isLoading, error } = useGetData<TaskResponse>();
  const { tasks } = data ?? {};
  const { t } = useTranslation();

  const { translateItem } = useItemTranslation("pages.dashboard.tasks");

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

  const toggleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (checked) {
      setSelected(allTitles);
    } else {
      setSelected([]);
    }
  };

  const isAllSelected = selected.length === allTitles.length;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

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
          <span className="capitalize font-bold ">
            {t("pages.dashboard.tasks.title")}
          </span>
        </Checkbox>
      </div>
      {isLoading ? (
        <ul className="w-full space-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="w-full">
              <Skeleton className="rounded-sm h-4 bg-default-100 w-full" />
            </li>
          ))}
        </ul>
      ) : error ? (
        <span className="text-red-400">{error.message}</span>
      ) : (
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
                <TaskItem
                  key={item.id}
                  item={{ ...item, title: translateItem(item.title) }}
                />
              ))}
            </CheckboxGroup>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}
