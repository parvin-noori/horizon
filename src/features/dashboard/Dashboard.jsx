import { IoIosCopy } from "react-icons/io";
import { MdAddTask, MdBarChart } from "react-icons/md";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { v4 as uuidv4 } from "uuid";
import CheckTable from "./CheckTable";
import DailyTraffic from "./DailyTraffic";
import DashboardStats from "./DashboardStats";
import PieCharts from "./PieCharts";
import WeeklyRevenue from "./WeeklyRevenue";
import WeeklySummary from "./WeeklySummary";
import ComplexTable from "./ComplexTable";

const dashboardStats = [
  {
    id: uuidv4(),
    title: "earning",
    value: "$350.4",
    icon: <MdBarChart />,
    change: 0,
    trend: "none",
  },
  {
    id: uuidv4(),
    title: "Spend this month",
    value: "$642.39",
    icon: <PiCurrencyDollarSimpleBold />,
    change: 0,
    trend: "none",
  },
  {
    id: uuidv4(),
    title: "Sales",
    value: "$574.34",
    change: 23,
    trend: "up",
  },
  {
    id: uuidv4(),
    title: "your balance",
    value: "$1,000",
    change: 0,
    trend: "none",
  },
  {
    id: uuidv4(),
    title: "New Tasks",
    value: "154",
    change: null,
    trend: "none",
    icon: <MdAddTask />,
  },
  {
    id: uuidv4(),
    title: "Total Projects",
    value: "2935",
    change: null,
    trend: "none",
    icon: <IoIosCopy />,
  },
];

export default function Dashboard() {
  return (
    <>
      <DashboardStats items={dashboardStats} />
      <div className="grid xl:grid-cols-2 gap-5">
        <WeeklySummary />
        <WeeklyRevenue />
        <CheckTable />
        <div className="grid lg:grid-cols-2 gap-5">
          <DailyTraffic />
          <PieCharts />
        </div>
        <ComplexTable />
      </div>
    </>
  );
}
