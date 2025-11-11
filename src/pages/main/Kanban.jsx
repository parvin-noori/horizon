import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@heroui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import Avatar1 from "/imgs/Avatar1.png";
import Avatar2 from "/imgs/Avatar2.png";
import Avatar3 from "/imgs/Avatar3.png";

export default function Kanban() {
  const status = [
    {
      id: 1,
      title: "backlog",
      items: [
        {
          id: 1,
          title: 'option to "use local/server version" feature',
          desc: "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
          status: "updates",
          members: [Avatar2, Avatar1],
        },
        {
          id: 2,
          cover: "/imgs/Cover1.png",
          title: "add/modify your own CSS/Selectors",
          desc: "Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.",
          status: "pending",
          members: [Avatar2, Avatar1, Avatar3],
        },
        {
          id: 3,
          title: "Shortcode for templates to display correctly",
          desc: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
          status: "errors",
          members: [Avatar2],
        },
      ],
    },
    {
      id: 2,
      title: "in progress",
      items: [
        {
          id: 4,
          title: "general ideas to improve 'edit' workflow",
          desc: "Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).",
          status: "pending",
          members: [Avatar2, Avatar1, Avatar3],
        },
        {
          id: 5,
          title: "shortcuts for templates to display correctly",
          desc: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
          status: "updates",
          members: [Avatar2],
        },
        {
          id: 6,
          title: "[UX Design]- set the default library tab",
          cover: "/imgs/cover2.png",
          desc: "I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...",
          status: "errors",
          memebers: [Avatar2, Avatar1],
        },
      ],
    },
    {
      id: 3,
      title: "done",
      items: [
        {
          id: 7,
          title: "copy/paste elements between pages",
          desc: "We can only copy/paste elements (or group of elements) in the same page, which is quite limited.",
          members: [Avatar2],
        },
        {
          id: 8,
          title: "Remove Extra DIV for each container added",
          desc: "I still hope there won't have an extra div for each container we added. It should be something for better styling...",
          members: [Avatar2, Avatar3, Avatar1],
        },
        {
          id: 9,
          title: "Add Figma files for the Library design blocks",
          desc: "I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...",
          members: [Avatar2, Avatar3, Avatar1],
        },
      ],
    },
  ];

  function getButtonBackground(status) {
    switch (status) {
      case "pending":
        return "warning";
      case "updates":
        return "primary";
      default:
        return "success";
    }
  }
  return (
    <div className="kanban grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {status.map((section) => (
        <div
          className="bg-white dark:bg-secondary rounded-2xl p-3 space-y-4"
          key={section.id}
        >
          <div className="flex items-center justify-between">
            <span className="capitalize text-xl text-[#2B3674] dark:text-white font-semibold">
              {section.title}
            </span>
            <Button
              isOnlyIcon
              variant="light"
              className="bg-secondary text-primary"
            >
              <FiPlus />
            </Button>
          </div>
          {section.items.map((item) => {
            const background = getButtonBackground(item.status);
            return (
              <Card
                shadow="none"
                className="!border-0 dark:bg-background shadow-lg"
                key={item.id}
              >
                <CardHeader className="font-semibold ">
                  <div className="flex items-center justify-between gap-x-5">
                    <span className="capitalize text-[#2B3674] dark:text-white  line-clamp-1 text-lg">
                      {item.title}
                    </span>
                    <Button
                      isOnlyIcon
                      variant="light"
                      className="p-0 !shrink-0 min-w-auto text-slate-400"
                    >
                      <AiOutlineEdit />
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="flex flex-col text-slate-400">
                  {item.cover && <Image src={item.cover} alt={item.title} />}
                  {item.desc}
                </CardBody>
                <CardFooter className="flex items-center gap-x-2 justify-between">
                  <AvatarGroup>
                    {item?.members?.map((member) => (
                      <Avatar src={member} />
                    ))}
                  </AvatarGroup>
                  <Chip
                    radius="sm"
                    color={background}
                    className="uppercase text-white"
                  >
                    {item.status ? item.status : "done"}
                  </Chip>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ))}
    </div>
  );
}
