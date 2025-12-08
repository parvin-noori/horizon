import { Switch } from "@heroui/react";

const notifItems = [
  {
    id: 1,
    title: "item update notification",
    status: "enabled",
  },
  {
    id: 2,
    title: "item comment notifications",
    status: "disabled",
  },
  {
    id: 3,
    title: "buyer review notifications",
    status: "enabled",
  },
  {
    id: 4,
    title: "rating reminders notifications",
    status: "disabled",
  },
  {
    id: 5,
    title: "meetups near you notifications",
    status: "disabled",
  },
  {
    id: 6,
    title: "company news notifications",
    status: "enabled",
  },
  {
    id: 7,
    title: "new launches and projects",
    status: "enabled",
  },
  {
    id: 8,
    title: "monthly product changes",
    status: "disabled",
  },
  {
    id: 9,
    title: "subscribe to newsletter",
    status: "disabled",
  },
  {
    id: 10,
    title: "email me when someone follows me",
    status: "enabled",
  },
];

export default function Notifications() {
  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl flex flex-col space-y-4">
      <span className="text-[#2B3674] dark:text-white text-xl font-semibold capitalize">
        notifications
      </span>
      {notifItems.map(item=>(
        <Switch defaultSelected={item.status === "enabled"}>{item.title}</Switch>
      ))}
    </div>
  );
}
