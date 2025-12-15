import CheckTable from "../../features/dashboard/checkTable";
import ComplexTable from "../../features/dashboard/complexTable";
import DevTable from "../../features/tables/devTable";
import FourColTable from "../../features/tables/fourColTable";

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
