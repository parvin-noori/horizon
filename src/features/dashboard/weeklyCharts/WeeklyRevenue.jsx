import { Skeleton } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Bar, BarChart, Legend, Tooltip, XAxis } from "recharts";
import { useGetData } from "../../../hooks/useGetData";

export default function WeeklyRevenue() {
  const { data, isLoading, error } = useGetData();
  const { weeklySummary } = data ?? {};
  const { t } = useTranslation();
  return (
    <div
      className={`${
        isLoading ? "h-[50vh]" : ""
      } bg-white dark:bg-secondary  rounded-2xl shadow py-5 px-6 flex flex-col space-y-5 [&_.recharts-surface:focus]:outline-none`}
    >
      <span className="text-2xl  text-bold capitalize">
        {t("pages.dashboard.weeklyRevenue")}
      </span>
      {isLoading ? (
        <Skeleton className="rounded-lg">
          <div className="h-62 rounded-lg bg-default-300" />
        </Skeleton>
      ) : error ? (
        <span className="text-red-400">{error.message}</span>
      ) : (
        <BarChart
          barCategoryGap={10}
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.8,
            fontSize: "small",
          }}
          responsive
          data={weeklySummary}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" axisLine={false} />
          {/* <YAxis width="auto" /> */}
          <Tooltip cursor={false} />
          <Legend formatter={(value) => t(`chart.${value}`)} />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" barSize={15} />
          <Bar dataKey="uv" stackId="a" fill="#39B8FF" />
          <Bar
            dataKey="amt"
            stackId="a"
            fill="#dddddd"
            radius={[12, 12, 0, 0]}
          />
        </BarChart>
      )}
    </div>
  );
}
