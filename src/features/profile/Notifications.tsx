import { cn, Switch } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useItemTranslation } from "../../hooks/useTranslation";

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
  const { t } = useTranslation();
  const { translateItem } = useItemTranslation("pages.profile.notifications");

  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl flex flex-col space-y-6">
      <span className=" text-xl font-semibold capitalize">
        {t("pages.profile.notifications.title")}
      </span>
      <ul className="space-y-3">
        {notifItems.map((item, index) => (
          <li key={index}>
            <Switch
              classNames={{ label: cn("!text-inherit capitalize") }}
              size="sm"
              defaultSelected={item.status === "enabled"}
            >
              <span>{String(translateItem(item.title))}</span>
            </Switch>
          </li>
        ))}
      </ul>
    </div>
  );
}
