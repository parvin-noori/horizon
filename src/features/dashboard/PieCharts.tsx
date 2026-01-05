import { Select, SelectItem } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Cell, Legend, Pie, PieChart } from "recharts";

type DataType = {
  name: string;
  value: number;
};

type SelectItemsType = {
  key: string;
  label: string;
};
const data: DataType[] = [
  { name: "yourFiles", value: 800 },
  { name: "system", value: 400 },
  { name: "", value: 300 },
];

const RADIAN = Math.PI / 180;
const COLORS = ["#8884d8", "#39B8FF", "#dddddd"];

export default function PieCharts() {
  const { t } = useTranslation();
  const selectItems: SelectItemsType[] = [
    { key: "monthly", label: t("pages.dashboard.pieChart.monthly") },
    { key: "yearly", label: t("pages.dashboard.pieChart.yearly") },
    { key: "daily", label: t("pages.dashboard.pieChart.daily") },
  ];
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <div className="flex items-center justify-between">
        <span className=" capitalize font-bold">
          {t("pages.dashboard.pieChart.title")}
        </span>
        <Select
          size="sm"
          variant="underlined"
          className="max-w-[100px]"
          classNames={{ base: "!text-slate-400", value: "!text-slate-400" }}
          defaultSelectedKeys={["monthly"]}
        >
          {selectItems.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>
      </div>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "0 auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Legend
          style={{
            fontSize: "small",
          }}
          formatter={(value) => t(`chart.${value}`)}
        />
        <Pie
          data={data}
          labelLine={false}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
