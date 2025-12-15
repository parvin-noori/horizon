import { BiSolidUpArrow } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { Line, LineChart, XAxis } from "recharts";
import { useGetData } from "../../../hooks/useGetData";

export default function WeeklySummary() {
  const { data, isLoading, error } = useGetData();
  const { weeklySummary } = data ?? [];
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <div className="flex items-center">
        <div className="bg-secondary dark:bg-white/5 py-2 capitalize px-4 rounded-md flex items-center gap-2 text-slate-400 text-sm">
          <FaRegCalendar />
          <span>this month</span>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="md:col-span-1 flex flex-col space-y-1">
          <span className="text-3xl  text-bold">$37.5k</span>
          <p className="capitalize text-slate-400  text-sm flex items-center gap-3">
            total spent{" "}
            <span className="text-green-500 capitalize flex items-center gap-2">
              <BiSolidUpArrow />
              +2.45%
            </span>
          </p>
          <p className="text-green-500 capitalize flex items-center gap-2 mt-4">
            <SiTicktick /> on track
          </p>
        </div>
        <div className="md:col-span-3">
          <LineChart
            style={{
              width: "100%",
              aspectRatio: 2,
            }}
            responsive
            data={weeklySummary}
          >
            <XAxis dataKey="month" axisLine={false} />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#39B8FF"
              strokeWidth={2}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
