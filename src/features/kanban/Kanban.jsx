import { Avatar, AvatarGroup, Button, Chip, Image } from "@heroui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  KanbanBoard,
  KanbanCard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from "../../components/ui/shadcn-io/kanban";
import { addKanban } from "./kanbanSlice";
import Avatar1 from "/imgs/Avatar1.png";
import Avatar2 from "/imgs/Avatar2.png";
import Avatar3 from "/imgs/Avatar3.png";

export default function Kanban() {
  const kanbanItems = useSelector((state) => state.kanban.items);
  const dispatch = useDispatch();

  const avatarMap = {
    Avatar1,
    Avatar2,
    Avatar3,
  };

  function getButtonBackground(status) {
    switch (status) {
      case "pending":
        return "warning";
      case "updates":
        return "primary";
      case "errors":
        return "danger";
      default:
        return "success";
    }
  }

  const columns = [
    { id: 1, name: "backlog", color: "#6B7280" },
    { id: 2, name: "In Progress", color: "#F59E0B" },
    { id: 3, name: "Done", color: "#10B981" },
  ];

  // const [features, setFeatures] = useState(kanbanItems);

  function handleAdd() {
    dispatch(
      addKanban({
        id: 10,
        title: "new",
        desc: "desc",
        column: 1,
        cover: "Avatar2",
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
                <span className="capitalize text-xl text-[#2B3674] dark:text-white font-semibold">
                  {column.name}
                </span>
                <Button
                  type="button"
                  onPress={handleAdd}
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
              {(feature) => {
                const background = getButtonBackground(feature.status);
                return (
                  <KanbanCard
                    className="shadow-lg border-0 bg-white dark:bg-white/5"
                    column={column.name}
                    id={feature.id}
                    key={feature.id}
                    name={feature.title}
                  >
                    <div className="flex items-center justify-between gap-x-5">
                      <span className="capitalize text-[#2B3674] dark:text-white  line-clamp-1 text-lg">
                        {feature.title}
                      </span>
                      <Button
                        isOnlyIcon
                        variant="light"
                        className="p-0 !shrink-0 min-w-auto !size-8 rounded-lg text-slate-400"
                      >
                        <AiOutlineEdit />
                      </Button>
                    </div>
                    <div className="flex flex-col text-slate-400 space-y-3">
                      {feature.cover && (
                        <Image src={feature.cover} alt={feature.title} />
                      )}
                      <p>{feature.desc}</p>
                    </div>
                    <div className="flex items-center gap-x-2 justify-between">
                      <AvatarGroup>
                        {feature?.members?.map((member) => (
                          <Avatar src={avatarMap[member]} />
                        ))}
                      </AvatarGroup>
                      <Chip
                        radius="sm"
                        color={background}
                        className="uppercase text-white"
                      >
                        {feature.status ? feature.status : "done"}
                      </Chip>
                    </div>
                  </KanbanCard>
                );
              }}
            </KanbanCards>
          </KanbanBoard>
        )}
      </KanbanProvider>
    </div>
  );
}
