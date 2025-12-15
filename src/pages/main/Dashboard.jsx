import Ads from "../../features/dashboard/Ads";
import BusinessDesign from "../../features/dashboard/BusinessDesign";
import Calender from "../../features/dashboard/Calender";
import Cards from "../../features/dashboard/Cards";
import CheckTable from "../../features/dashboard/checkTable/CheckTable";
import ComplexTable from "../../features/dashboard/complexTable/ComplexTable";
import DailyTraffic from "../../features/dashboard/DailyTraffic/DailyTraffic";
import DashboardStats from "../../features/dashboard/dashboardStats/DashboardStats";
import { dashboardStats } from "../../features/dashboard/dashboardStats/data";
import PieCharts from "../../features/dashboard/PieCharts";
import Tasks from "../../features/dashboard/tasks/Tasks";
import TeamMembers from "../../features/dashboard/TeamMembers/TeamMembers";
import WeeklyRevenue from "../../features/dashboard/weeklyCharts/WeeklyRevenue";
import WeeklySummary from "../../features/dashboard/weeklyCharts/WeeklySummary";

export default function Dashboard() {
  return (
    <>
      <DashboardStats items={dashboardStats} />
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
        <WeeklySummary />
        {/* <WeeklyRevenue /> */}
        {/* <CheckTable /> */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {/* <DailyTraffic /> */}
          {/* <PieCharts /> */}
        </div>
        {/* <ComplexTable /> */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {/* <Tasks /> */}
          {/* <Calender /> */}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {/* <BusinessDesign /> */}
          {/* <TeamMembers /> */}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {/* <Cards /> */}
          {/* <Ads /> */}
        </div>
      </div>
    </>
  );
}
