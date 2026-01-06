import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import { MdOutlineDragIndicator } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ColumnType, KanbanItemType } from "./Kanban";
import KanbanItem from "./KanbanItem";

interface ColumnProps {
  col: ColumnType;
  items: KanbanItemType[];
  features: KanbanItemType[];
}

export default function Column(props: ColumnProps) {
  const { col, items, features } = props;
  const [editngId, setEditngId] = useState<number | null>(null);

  const itemsId = useMemo(() => items.map((item) => item.id), [items]);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: col.id, data: { type: "column", column: col } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const dispatch = useDispatch();

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="rounded-xl p-5 flex flex-col min-h-[500px]   bg-white  border-primary border-2"
      ></div>
    );
  }

  return (
    <div
      style={style}
      ref={setNodeRef}
      className="rounded-xl p-5 flex flex-col w-full min-w-[300px] bg-white dark:bg-secondary"
    >
      <div className="flex items-center  justify-between mb-4">
        <button {...attributes} {...listeners} className="cursor-grab">
          <MdOutlineDragIndicator />
        </button>
        <span className="font-semibold">{col.title}</span>
        <span className="bg-secondary dark:bg-white/5 size-7 items-center justify-center flex rounded">
          {items.length}
        </span>
      </div>

      <ul className="space-y-3 min-h-[400px]">
        <SortableContext items={itemsId}>
          {items?.map((item) => (
            <KanbanItem
              key={item.id}
              features={features}
              feature={item}
              isEditng={editngId === item.id}
              setEditngId={setEditngId}
            />
          ))}
        </SortableContext>
      </ul>
    </div>
  );
}
