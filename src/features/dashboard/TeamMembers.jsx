import { Avatar, Card, Skeleton } from "@heroui/react";
// import { IoMdMore } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useGetData } from "../../hooks/useGetData";
import { useItemTranslation } from "../../hooks/useTranslation";

export default function TeamMembers() {
  const { data, isLoading, error } = useGetData();
  const { teamMembers } = data ?? {};
  const { t } = useTranslation();
  const { translateItem } = useItemTranslation("pages.dashboard.teamMembers.roles");

  if (error) console.log(error);
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <span className="text-lg  text-bold capitalize">
        {t("pages.dashboard.teamMembers.title")}
      </span>
      <ul className="flex flex-col space-y-3">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              className="flex items-center space-x-3 shadow rounded-xl px-3 py-2"
              shadow="none"
            >
              <div className="flex items-center w-full gap-x-2">
                <Skeleton className="rounded-full size-10 bg-default-300" />
                <div className="space-y-2 grow">
                  <Skeleton className="w-2/5 rounded-lg h-3 bg-default-300" />
                  <Skeleton className="w-3/5 rounded-lg h-3 bg-default-300" />
                </div>
              </div>
            </Card>
          ))
        ) : teamMembers ? (
          teamMembers.map((member, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 shadow-md rounded-xl px-3 py-2 "
            >
              <Avatar src={member.avatar} alt={member.name} size="lg" />
              <div>
                <span className="text-sm font-semibold  capitalize">
                  {member.name}
                </span>
                <p className="text-xs text-slate-400 dark:text-gray-400 capitalize">
                  {translateItem(member.role)}
                </p>
              </div>
              {/* <Button className="ms-auto !p-0 !min-w-fit" variant="fade">
              <IoMdMore className="text-xl text-slate-400" />
              </Button> */}
            </li>
          ))
        ) : (
          <span className="text-red-400">{error.message}</span>
        )}
      </ul>
    </div>
  );
}
