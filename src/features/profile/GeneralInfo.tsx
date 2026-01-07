import { Skeleton } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useGetData } from "../../hooks/useGetData";
import { UserInfoType } from "./types/userInfo.types";

export default function GeneralInfo(props: UserInfoType) {
  const { info } = props ?? {};
  const { isLoading, error } = useGetData<null>();
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl flex flex-col space-y-4">
      <span className=" text-xl font-semibold capitalize">
        {t("pages.profile.generalInfo.title")}
      </span>
      <p className="text-slate-400 text-sm">
        {t("pages.profile.generalInfo.subtitle")}
      </p>
      <ul className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 mt-5 gap-5">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="capitalize shadow-md dark:bg-white/5 space-y-3 dark:shadow-none p-5 flex flex-col rounded-lg w-full"
            >
              <Skeleton className="w-2/5 rounded-lg h-2 bg-default-300" />
              <Skeleton className="w-3/5 rounded-lg h-2 bg-default-300" />
            </div>
          ))
        ) : error ? (
          <span className="text-red-400">{error.message}</span>
        ) : (
          info && (
            <>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">
                  {t("pages.profile.generalInfo.education")}
                </span>
                {info.education}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">
                  {t("pages.profile.generalInfo.languages")}
                </span>
                {info.languages}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">
                  {t("pages.profile.generalInfo.department")}
                </span>
                {info.department}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">
                  {t("pages.profile.generalInfo.workHistory")}
                </span>
                {info.workHistory}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">
                  {t("pages.profile.generalInfo.organization")}
                </span>
                {info.organization}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">
                  {t("pages.profile.generalInfo.birthday")}
                </span>
                {info.birthday}
              </li>
            </>
          )
        )}
      </ul>
    </div>
  );
}
