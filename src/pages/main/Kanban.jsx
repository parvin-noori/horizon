import { Avatar, AvatarGroup, Button, Chip, Image } from "@heroui/react";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import {
  KanbanBoard,
  KanbanCard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from "../../components/ui/shadcn-io/kanban";
import Avatar1 from "/imgs/Avatar1.png";
import Avatar2 from "/imgs/Avatar2.png";
import Avatar3 from "/imgs/Avatar3.png";

export default function Kanban() {
  const kanbanItems = [
    {
      id: 1,
      title: 'option to "use local/server version" feature',
      desc: "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
      status: "updates",
      members: [Avatar2, Avatar1],
      column: 1,
    },
    {
      id: 2,
      cover: "/imgs/Cover1.png",
      title: "add/modify your own CSS/Selectors",
      desc: "Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.",
      status: "pending",
      members: [Avatar2, Avatar1, Avatar3],
      column: 1,
    },
    {
      id: 3,
      title: "Shortcode for templates to display correctly",
      desc: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
      status: "errors",
      members: [Avatar2],
      column: 1,
    },
    {
      id: 4,
      title: "general ideas to improve 'edit' workflow",
      desc: "Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).",
      status: "pending",
      members: [Avatar2, Avatar1, Avatar3],
      column: 2,
    },
    {
      id: 5,
      title: "shortcuts for templates to display correctly",
      desc: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
      status: "updates",
      members: [Avatar2],
      column: 2,
    },
    {
      id: 6,
      title: "[UX Design]- set the default library tab",
      cover: "/imgs/cover2.png",
      desc: "I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...",
      status: "errors",
      memebers: [Avatar2, Avatar1],
      column: 2,
    },
    {
      id: 7,
      title: "copy/paste elements between pages",
      desc: "We can only copy/paste elements (or group of elements) in the same page, which is quite limited.",
      members: [Avatar2],
      column: 3,
    },
    {
      id: 8,
      title: "Remove Extra DIV for each container added",
      desc: "I still hope there won't have an extra div for each container we added. It should be something for better styling...",
      members: [Avatar2, Avatar3, Avatar1],
      column: 3,
    },
    {
      id: 9,
      title: "Add Figma files for the Library design blocks",
      desc: "I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...",
      members: [Avatar2, Avatar3, Avatar1],
      column: 3,
    },
  ];

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

  const [features, setFeatures] = useState(kanbanItems);
  return (
    <div className="kanban">
      <KanbanProvider columns={columns} data={features}>
        {(column) => (
          <KanbanBoard
            className="bg-white shadow-none border-0 p-2 dark:bg-secondary"
            id={column.id}
            key={column.id}
            onDataChange={setFeatures}
          >
            <KanbanHeader className="border-0">
              <div className="flex items-center justify-between">
                <span className="capitalize text-xl text-[#2B3674] dark:text-white font-semibold">
                  {column.name}
                </span>
                <Button
                  isOnlyIcon
                  variant="light"
                  className="bg-secondary text-primary dark:text-white dark:bg-white/5"
                >
                  <FiPlus />
                </Button>
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
                          <Avatar src={member} />
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
