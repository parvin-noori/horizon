import { Avatar, Image } from "@heroui/react";

import banner from "/imgs/userInfoBanner.png";

export default function UserInfo(props) {
  const { user } = props;
  const { avatar, name, jobPosition, posts, followers, following } = user;
  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl space-y-15">
      <div className="relative">
        <Image src={banner} alt="banner" width="100%" />
        <Avatar
          isBordered
          color="white"
          classNames={{
            base: "absolute -bottom-0 translate-y-1/2 start-1/2 -translate-x-1/2 z-10",
          }}
          className="size-20"
          src={avatar}
        />
      </div>
      <div className="flex flex-col items-center space-y-5 capitalize">
        <div className="flex flex-col items-center">
          <h3 className=" text-xl font-semibold">{name}</h3>
          <span className="text-slate-400 text-sm ">{jobPosition}</span>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex flex-col items-center text-slate-400 text-sm">
            <span className=" text-xl font-semibold">{posts}</span>
            posts
          </div>
          <div className="flex flex-col items-center text-slate-400 text-sm">
            <span className=" text-xl font-semibold">{followers}</span>
            followers
          </div>
          <div className="flex flex-col items-center text-slate-400 text-sm">
            <span className=" text-xl font-semibold">{following}</span>
            following
          </div>
        </div>
      </div>
    </div>
  );
}
