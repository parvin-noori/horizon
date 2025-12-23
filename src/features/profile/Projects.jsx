import { Avatar, Button, Link } from "@heroui/react";
import { FaPen } from "react-icons/fa6";

export default function Projects({ userInfo }) {
  const projects = userInfo?.projects ?? [];

  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl flex flex-col space-y-4">
      <span className=" text-xl font-semibold capitalize">all projects </span>
      <p className="text-slate-400 text-sm">
        here you can find more details about your projects. keep you user
        engaged by providing meaningful inforamtion
      </p>
      <ul className="flex flex-col space-y-4 mt-5">
        {projects?.map((project, index) => (
          <li
            key={index}
            className="flex items-center gap-3 shadow-md rounded-xl ps-3 pe-5 py-2 dark:bg-white/5"
          >
            <Avatar
              radius="sm"
              size="xl"
              src={project.img}
              alt={project.name}
            />
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold  capitalize line-clamp-1">
                {project.name}
              </span>
              <p className="text-xs text-slate-400 dark:text-gray-400 capitalize">
                project #{index + 1} .{" "}
                <span className="text-xs text-slate-400 dark:text-gray-400 capitalize">
                  <Link
                    to="#"
                    color="primary"
                    underline="always"
                    size="sm"
                    className="cursor-pointer"
                  >
                    See project detail
                  </Link>
                </span>
              </p>
            </div>
            <Button className="ms-auto !p-0 !min-w-fit" variant="fade">
              <FaPen className="text-slate-400" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
