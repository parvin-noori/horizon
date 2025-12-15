import { Avatar, Button } from "@heroui/react";
import { IoMdMore } from "react-icons/io";
import { useMembers } from "./useTeamMembers";

export default function TeamMembers() {
  const { data: teamMembers, isLoading, error } = useMembers();
  if (isLoading) return <span>is loading</span>
  if(error) console.log(error)
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <span className="text-lg  text-bold capitalize">team members</span>
      <ul className="flex flex-col space-y-5">
        {teamMembers.map((member, index) => (
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
                {member.role}
              </p>
            </div>
            <Button className="ms-auto !p-0 !min-w-fit" variant="fade">
              <IoMdMore className="text-xl text-slate-400" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
