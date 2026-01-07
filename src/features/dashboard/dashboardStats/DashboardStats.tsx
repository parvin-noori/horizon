import { Card } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useItemTranslation } from "../../../hooks/useTranslation";
import { dashboardStatsProps } from "./types/DashboardStats";

export default function DashboardStats(props: dashboardStatsProps) {
  const { items } = props;
  const { t } = useTranslation();
  const { translateItem } = useItemTranslation(
    "pages.dashboard.dashboardStats"
  );

  return (
    <div className="grid grid-flow-col overflow-x-auto auto-cols-[183px] gap-3 w-full max-w-full whitespace-nowrap">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Card
            shadow="none"
            key={item.id}
            className="shadow-md p-3 mb-2 dark:bg-secondary text-inherit"
          >
            <div className="flex items-center gap-3 h-full">
              {Icon && (
                <div className="bg-secondary dark:bg-white/5 text-primary dark:text-white size-10 flex items-center justify-center rounded-full text-xl">
                  <Icon />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm capitalize">
                  {String(translateItem(item.title))}
                </span>
                <span className=" font-semibold">{item.value}</span>
                {item.change != null && item.change !== 0 && (
                  <p className="text-slate-400 text-sm mt-1">
                    <span
                      className={`${
                        item.change > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.change > 0 ? "+" : "-"}
                      {item.change}%{" "}
                    </span>
                    {t("pages.dashboard.sinceLastMonth")}
                  </p>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
