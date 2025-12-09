import { Button } from "@heroui/react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  KanbanBoard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from "../../components/ui/shadcn-io/kanban";
import { addKanban } from "./kanbanSlice";

import { useState } from "react";
import KanbanItem from "./KanbanItem";

export default function Kanban() {
  const [editngId, setEditngId] = useState(false);
  const kanbanItems = useSelector((state) => state.kanban.items);
  const dispatch = useDispatch();

  const columns = [
    { id: 1, name: "backlog", color: "#6B7280" },
    { id: 2, name: "In Progress", color: "#F59E0B" },
    { id: 3, name: "Done", color: "#10B981" },
  ];

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
    <div className="kanban">
      <KanbanProvider columns={columns} data={kanbanItems}>
        {(column) => (
          <KanbanBoard
            className="bg-white shadow-none border-0 p-2 dark:bg-secondary"
            id={column.id}
            key={column.id}
            // onDataChange={setFeatures}
          >
            <KanbanHeader className="border-0">
              <div className="flex items-center justify-between">
                <span className="capitalize text-xl  font-semibold">
                  {column.name}
                </span>
                <Button
                  type="button"
                  onPress={() => handleAdd(column.id)}
                  isOnlyIcon
                  variant="light"
                  className="bg-secondary text-primary dark:text-white dark:bg-white/5"
                >
                  <FiPlus />
                </Button>
                {/* {console.log(features)} */}
              </div>
            </KanbanHeader>
            <KanbanCards id={column.id} className="space-y-2">
              {(feature) => (
                <KanbanItem
                  key={feature.id}
                  feature={feature}
                  column={column}
                  isEditng={editngId === feature.id}
                  setEditngId={setEditngId}
                />
              )}
            </KanbanCards>
          </KanbanBoard>
        )}
      </KanbanProvider>
    </div>
  );
}
