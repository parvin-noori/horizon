import CheckTable from "../dashboard/CheckTable";
import ComplexTable from "../dashboard/ComplexTable";
import DevTable from "./DevTable";
import FourColTable from "./FourColTable";

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
