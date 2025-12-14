import Ads from "./Ads";
import BusinessDesign from "./BusinessDesign";
import Calender from "./Calender";
import Cards from "./Cards";
import CheckTable from "./CheckTable";
import ComplexTable from "./ComplexTable";
import DailyTraffic from "./DailyTraffic";
import DashboardStats from "./DashboardStats";
import { dashboardStats } from "./data";
import PieCharts from "./PieCharts";
import Tasks from "./Tasks";
import TeamMembers from "./TeamMembers";
import WeeklyRevenue from "./WeeklyRevenue";
import WeeklySummary from "./WeeklySummary";

export default function Dashboard() {
  return (
    <>
      <DashboardStats items={dashboardStats} />
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
        <WeeklySummary />
        <WeeklyRevenue />
        <CheckTable />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <DailyTraffic />
          <PieCharts />
        </div>
        <ComplexTable />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Tasks />
          <Calender />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <BusinessDesign />
          <TeamMembers />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Cards />
          <Ads />
        </div>
      </div>
    </>
  );
}
