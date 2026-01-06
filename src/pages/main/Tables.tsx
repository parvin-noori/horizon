import CheckTable from "../../features/tables/CheckTable";
import ComplexTable from "../../features/tables/ComplexTable";
import DevTable from "../../features/tables/DevTable";
import FourColTable from "../../features/tables/FourColTable";

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
