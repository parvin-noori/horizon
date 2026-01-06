import { Avatar, AvatarGroup, Button } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { MdSlowMotionVideo } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";
import { TbFlameFilled } from "react-icons/tb";

 export type Member = {
  id: number;
  img: string;
  name: string;
};

const members: Member[] = [
  { id: 1, img: "/imgs/Avatar1.png", name: "user 1" },
  { id: 1, img: "/imgs/Avatar2.png", name: "user 2" },
  { id: 1, img: "/imgs/Avatar3.png", name: "user 3" },
];

export default function BusinessDesign() {
  const { t } = useTranslation();
  return (
    <div className="bg-white  dark:bg-secondary overflow-hidden rounded-2xl shadow pt-5 flex flex-col space-y-5">
      <div className="flex items-center gap-2  px-6">
        <span className="bg-orange-100 size-9 text-orange-500 text-2xl rounded-lg flex items-center justify-center">
          <TbFlameFilled />
        </span>
        <div className="flex flex-col capitalize font-bold">
          <span className="text-xs text-slate-400">
            {t("pages.dashboard.businessDesign.title")}
          </span>
          <span className=" text-sm  ">
            {" "}
            {t("pages.dashboard.businessDesign.subtitle")}
          </span>
        </div>
      </div>

      <p className=" text-lg  px-6 grow">
        {t("pages.dashboard.businessDesign.caption")}
      </p>
      <div className="flex flex-col bg-secondary dark:bg-white/5   px-6">
        <div className="flex items-center gap-5  text-xs py-5">
          <span className="flex items-center gap-2">
            <RiTimerLine className="text-green-400" />
            85 {t("pages.dashboard.businessDesign.mins")}
          </span>
          <span className="flex items-center gap-2">
            <MdSlowMotionVideo className="text-red-400 text-lg" />
            {t("pages.dashboard.businessDesign.videoFormat")}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 pb-5">
          <AvatarGroup max={2}>
            {members?.map((member) => (
              <Avatar src={member.img} size="sm" />
            ))}
          </AvatarGroup>
          <Button
            aria-label="start"
            className="capitalize bg-primary rounded-xl px-6 text-white"
          >
            {t("getStarted")}
          </Button>
        </div>
      </div>
    </div>
  );
}
