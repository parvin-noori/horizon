import {
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useCallback } from "react";
import { FcApproval } from "react-icons/fc";
import { MdError } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useComplexTableData } from "./useComplexTableData";

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "date",
    label: "DATE",
  },
  {
    key: "progress",
    label: "PROGRESS",
  },
];

export default function ComplexTable() {
  const renderCell = useCallback((item, columnKey) => {
    switch (columnKey) {
      case "name":
        return <span className="capitalize text-nowrap">{item.name}</span>;
      case "status":
        return (
          <div className="flex items-center gap-2">
            <span className="text-xl"> {statusIcon[item.status]}</span>
            {item.status}
          </div>
        );
      case "date":
        return <span className="text-nowrap">{item.date}</span>;
      case "progress":
        return <Progress size="sm" value={item.progress} />;
    }
  });
  const statusIcon = {
    approved: <FcApproval />,
    disable: <RxCrossCircled className="text-red-500" />,
    error: <MdError className="text-yellow-500" />,
  };

  const { data, isLoading, error } = useComplexTableData();
  if (error) {
    console.log(error);
  }
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow flex flex-col space-y-5">
      <span className="text-2xl  text-bold capitalize px-6 pt-5">
        complex table
      </span>
      <div className="overflow-x-auto">
        <Table
          isCompact
          removeWrapper
          classNames={{
            th: "bg-transparent border-slate-200 text-slate-300 px-6",
            td: "px-6 py-3",
          }}
          aria-label="Controlled table example with dynamic content"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={data??[]} isLoading={isLoading}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell className="capitalize">
                    {renderCell(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
