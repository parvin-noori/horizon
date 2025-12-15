import { BiSolidUpArrow } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Bar, BarChart, XAxis } from "recharts";
import { useDailyTraffic } from "../../hooks/useDailyTraffic";

export default function DailyTraffic() {
  const theme = useSelector((state) => state.theme.theme);
  const { data, isLoading, error } = useDailyTraffic();
  const whiteStopOpacity = theme === "dark" ? 1 : 0.1;
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <div className="capitalize text-slate-400 justify-between  text-sm flex items-start gap-3">
        <div className="flex flex-col gap-2">
          <span>daily traffic</span>
          <div className="flex items-center gap-1">
            <span className="text-3xl  text-bold text-[#2B3674] dark:text-white">
              2.579
            </span>{" "}
            visitors
          </div>
        </div>
        <span className="text-green-500 capitalize flex items-center gap-2">
          <BiSolidUpArrow />
          +2.45%
        </span>
      </div>
      <BarChart
        barCategoryGap={10}
        style={{
          width: "100%",
          height: "100%",
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
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8884d8" stopOpacity={1} />
            <stop
              offset="100%"
              stopColor="white"
              stopOpacity={whiteStopOpacity}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} />
        <Bar
          dataKey="pv"
          stackId="a"
          fill="url(#colorPv)"
          barSize={15}
          radius={[12, 12, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
