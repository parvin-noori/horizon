import { Select, SelectItem } from "@heroui/react";
import { Cell, Legend, Pie, PieChart } from "recharts";

const data = [
  { name: "your files", value: 800 },
  { name: "system", value: 400 },
  { name: "", value: 300 },
];

const RADIAN = Math.PI / 180;
const COLORS = ["#8884d8", "#39B8FF", "#dddddd"];

export default function PieCharts() {
  const selectItems = [
    { key: "monthly", label: "Monthly" },
    { key: "yearly", label: "Yearly" },
    { key: "daily", label: "Daily" },
  ];
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-[#2B3674] dark:text-white capitalize font-bold">
          your pie chart
        </span>
        <Select
          size="sm"
          variant="underlined"
          className="max-w-[100px] text-sm text-slate-400"
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
          margin:"0 auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Legend
          style={{
            fontSize: "small",
          }}
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
