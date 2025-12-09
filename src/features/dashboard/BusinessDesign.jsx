import { Avatar, AvatarGroup, Button } from "@heroui/react";
import { MdSlowMotionVideo } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";
import { TbFlameFilled } from "react-icons/tb";

const members = [
  { id: 1, img: "/imgs/Avatar1.png", name: "user 1" },
  { id: 1, img: "/imgs/Avatar2.png", name: "user 2" },
  { id: 1, img: "/imgs/Avatar3.png", name: "user 3" },
];

export default function BusinessDesign() {
  return (
    <div className="bg-white  dark:bg-secondary overflow-hidden rounded-2xl shadow pt-5 flex flex-col space-y-5">
      <div className="flex items-center gap-2  px-6">
        <span className="bg-orange-100 size-9 text-orange-500 text-2xl rounded-lg flex items-center justify-center">
          <TbFlameFilled />
        </span>
        <div className="flex flex-col capitalize font-bold">
          <span className="text-xs text-slate-400">business design</span>
          <span className=" text-sm  ">new lession is available</span>
        </div>
      </div>

      <p className=" text-lg  px-6 grow">
        what do you need to know to create better products?
      </p>
      <div className="flex flex-col bg-secondary dark:bg-white/5   px-6">
        <div className="flex items-center gap-5  text-xs py-5">
          <span className="flex items-center gap-2">
            <RiTimerLine className="text-green-400" />
            85 mins
          </span>
          <span className="flex items-center gap-2">
            <MdSlowMotionVideo className="text-red-400 text-lg" />
            video format
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 pb-5">
          <AvatarGroup max={2}>
            {members?.map((member) => (
              <Avatar src={member.img} size="sm" />
            ))}
          </AvatarGroup>
          <Button className="capitalize bg-primary rounded-xl px-6 text-white">
            get started
          </Button>
        </div>
      </div>
    </div>
  );
}
