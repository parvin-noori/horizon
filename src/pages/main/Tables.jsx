import CheckTable from "../../features/dashboard/checkTable/CheckTable";
import ComplexTable from "../../features/dashboard/complexTable/ComplexTable";
import DevTable from "../../features/tables/devTable/DevTable";
import FourColTable from "../../features/tables/fourColTable/FourColTable";

export default function Tables() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <DevTable />
      <CheckTable />
      <FourColTable />
      <ComplexTable />
    </div>
  );
}
