import { SortableContext } from "@dnd-kit/sortable";
import { Button } from "@heroui/react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import KanbanItem from "./KanbanItem";
import { addKanban } from "./kanbanSlice";

export default function Column(props) {
  const { col } = props;
  const [editngId, setEditngId] = useState(false);

  const items = useSelector((state) => state.kanban.items);

  const dispatch = useDispatch();

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

  return (
    <SortableContext
      key={col.id}
      items={items?.filter((i) => i.column === col.id).map((i) => i.id)}
    >
      <div className="bg-white dark:bg-secondary lg:w-full md:w-1/2 sm:w-[70%] w-[80%] rounded-xl p-5 space-y-10 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="capitalize text-xl font-semibold">{col.name}</span>
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
  );
}
