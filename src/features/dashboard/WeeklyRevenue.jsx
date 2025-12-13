import { Bar, BarChart, Legend, Tooltip, XAxis } from "recharts";

const data = [
  {
    name: "17",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "18",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "19",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "20",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "21",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "22",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "23",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "24",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "25",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];
export default function WeeklyRevenue() {
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
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
        <Tooltip cursor={false}/>
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" barSize={15} />
        <Bar dataKey="uv" stackId="a" fill="#39B8FF" />
        <Bar dataKey="amt" stackId="a" fill="#dddddd" radius={[12, 12, 0, 0]} />
      </BarChart>
    </div>
  );
}
