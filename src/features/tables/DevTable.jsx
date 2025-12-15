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
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io5";
import { useGetData } from "../../hooks/useGetData";

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "systems",
    label: "SYSTEMS",
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

export default function DevTable() {
  const { data, isLoading } = useGetData();
  const { devTable } = data ?? [];

  const systemIcon = {
    ios: <FaApple />,
    android: <DiAndroid />,
    windows: <IoLogoWindows />,
  };

  const renderCell = useCallback((item, columnKey) => {
    switch (columnKey) {
      case "name":
        return <span className="capitalize text-nowrap">{item.name}</span>;
      case "systems":
        return (
          <div className="flex items-center gap-2">
            {item?.systems.split(",").map((item) => (
              <span key={item.key} className="text-slate-300">
                {systemIcon[item]}
              </span>
            ))}
          </div>
        );
      case "date":
        return <span>{item.date}</span>;
      case "progress":
        return (
          <div className="flex items-center gap-2">
            <span>{item.progress}%</span>
            <Progress size="sm" value={item.progress} />
          </div>
        );
    }
  });

  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow  flex flex-col space-y-5">
      <span className="text-2xl  text-bold capitalize pt-5 px-6">
        development table
      </span>
      <div className="overflow-x-auto">
        <Table
          removeWrapper
          classNames={{
            th: "bg-transparent border-b border-slate-200 text-slate-300",
            tr: "px-6",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={devTable ?? []} isLoading={isLoading}>
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
