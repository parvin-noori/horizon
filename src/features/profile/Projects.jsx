import { Avatar, Button, Link, Skeleton } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { FaPen } from "react-icons/fa6";
import { useGetData } from "../../hooks/useGetData";
import { useItemTranslation } from "../../hooks/useTranslation";

export default function Projects({ userInfo }) {
  const projects = userInfo?.projects ?? [];
  const { isLoading, error } = useGetData();
  const { t } = useTranslation();
  const { translateItem } = useItemTranslation("pages.profile.projects");

  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl flex flex-col space-y-4">
      <span className=" text-xl font-semibold capitalize">
        {t("pages.profile.projects.title")}
      </span>
      <p className="text-slate-400 text-sm">
        {t("pages.profile.projects.subtitle")}
      </p>
      <ul className="flex flex-col space-y-4 mt-5">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center w-full gap-x-2">
              <Skeleton className="rounded-lg size-10 bg-default-300" />
              <div className="space-y-2 grow">
                <Skeleton className="w-2/5 rounded-lg h-2 bg-default-300" />
                <Skeleton className="w-3/5 rounded-lg h-2 bg-default-300" />
              </div>
            </div>
          ))
        ) : error ? (
          <span className="text-red-400">{error.message}</span>
        ) : (
          projects.map((project, index) => (
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
                  {String(translateItem(project.name))}
                </span>
                <p className="text-xs text-slate-400 dark:text-gray-400 capitalize">
                  {t("pages.profile.projects.project")} #{index + 1} .{" "}
                  <span className="text-xs text-slate-400 dark:text-gray-400 capitalize">
                    <Link
                      to="#"
                      color="primary"
                      underline="always"
                      size="sm"
                      className="cursor-pointer"
                    >
                      {t("pages.profile.projects.seeProjectDetail")}
                    </Link>
                  </span>
                </p>
              </div>
              <Button className="ms-auto !p-0 !min-w-fit" variant="fade">
                <FaPen className="text-slate-400" />
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
