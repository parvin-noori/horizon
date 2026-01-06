import { Avatar, Image, Skeleton } from "@heroui/react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useGetData } from "../../hooks/useGetData";
import { useItemTranslation } from "../../hooks/useTranslation";
import { UserInfo } from "../../pages/main/Profile";
import { RootState } from "../../types/store";
import banner from "/imgs/userInfoBanner.png";

export type UserInfoProps = {
  user?: UserInfo | undefined;
  info?: UserInfo | undefined;
};

export default function UserInfo(props: UserInfoProps) {
  const { user } = props;
  const { isLoading, error } = useGetData();
  const { avatar, name, jobPosition, posts, followers, following } = user ?? {};
  const { t } = useTranslation();
  const language = useSelector((state: RootState) => state.lang.lang);

  const { translateItem } = useItemTranslation("pages.profile");

  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl space-y-15">
      <div className="relative">
        <Image src={banner} alt="banner" width="100%" />
        <Avatar
          isBordered
          classNames={{
            base: `absolute -bottom-0 ${
              language === "fa" ? "translate-x-1/2" : "-translate-x-1/2"
            } translate-y-1/2 start-1/2  z-10`,
          }}
          className="size-20"
          src={avatar}
        />
      </div>
      {error ? (
        <span className="text-red-400 flex justify-center">
          {error.message}
        </span>
      ) : (
        <div className="flex flex-col items-center space-y-5 capitalize">
          <div className="flex flex-col items-center">
            {isLoading ? (
              <>
                <Skeleton className="w-32 rounded-lg h-3 bg-default-300 mb-3" />
                <Skeleton className="w-22 rounded-lg h-3 bg-default-300 mb-3" />
              </>
            ) : (
              <>
                <h3 className=" text-xl font-semibold">{name}</h3>
                <span className="text-slate-400 text-sm ">
                  {String(translateItem(jobPosition))}
                </span>
              </>
            )}
          </div>

          <div className="flex items-end gap-x-5">
            <div className="flex flex-col items-center text-sm">
              {isLoading ? (
                <Skeleton className="w-10 rounded-lg h-2 bg-default-300 mb-3" />
              ) : (
                <span className="text-xl font-semibold">{posts}</span>
              )}
              <span className="text-slate-400">{t("pages.profile.posts")}</span>
            </div>
            <div className="flex flex-col items-center text-sm">
              {isLoading ? (
                <Skeleton className="w-10 rounded-lg h-2 bg-default-300 mb-3" />
              ) : (
                <span className=" text-xl font-semibold">{followers}</span>
              )}
              <span className="text-slate-400">
                {t("pages.profile.followers")}
              </span>
            </div>
            <div className="flex flex-col items-center text-sm">
              {isLoading ? (
                <Skeleton className="w-10 rounded-lg h-2 bg-default-300 mb-3" />
              ) : (
                <span className=" text-xl font-semibold">{following}</span>
              )}
              <span className="text-slate-400">
                {t("pages.profile.followings")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
