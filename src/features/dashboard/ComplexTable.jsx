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

const rows = [
  {
    key: "1",
    name: "horizon UI pro",
    status: "approved",
    date: "18 Apr 2021",
    progress: 80,
  },
  {
    key: "2",
    name: "horizon UI free",
    progress: 30,
    status: "disable",
    date: "18 Apr 2021",
  },
  {
    key: "3",
    name: "marketplace",
    progress: 90,
    status: "error",
    date: "20 May 2021",
  },
  {
    key: "4",
    name: "weekly updates",
    progress: 40,
    status: "approved",
    date: "12 Jul 2021",
  },
];

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
        return <span className="capitalize">{item.name}</span>;
      case "status":
        return (
          <div className="flex items-center gap-2">
            <span className="text-xl"> {statusIcon[item.status]}</span>
            {item.status}
          </div>
        );
      case "date":
        return <span>{item.date}</span>;
      case "progress":
        return <Progress size="sm" value={item.progress} />;
    }
  });
  const statusIcon = {
    approved: <FcApproval />,
    disable: <RxCrossCircled className="text-red-500" />,
    error: <MdError className="text-yellow-500" />,
  };
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <span className="text-2xl text-[#2B3674] dark:text-white text-bold capitalize">
        complex table
      </span>
      <div className="overflow-x-auto">
        <Table
          isCompact
          // color="transparent"
          removeWrapper
          aria-label="Controlled table example with dynamic content"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
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
