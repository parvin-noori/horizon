import { Bar, BarChart, Legend, Tooltip, XAxis } from "recharts";
import { useWeeklySummary } from "../../hooks/useWeeklySummary";

export default function WeeklyRevenue() {
  const { data, isLoading, error } = useWeeklySummary();
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5 [&_.recharts-surface:focus]:outline-none">
      <span className="text-2xl  text-bold capitalize">weekly revenue</span>
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
        data={data}
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
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" barSize={15} />
        <Bar dataKey="uv" stackId="a" fill="#39B8FF" />
        <Bar dataKey="amt" stackId="a" fill="#dddddd" radius={[12, 12, 0, 0]} />
      </BarChart>
    </div>
  );
}
