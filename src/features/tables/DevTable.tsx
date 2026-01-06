import {
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { JSX, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io5";
import { useGetData } from "../../hooks/useGetData";
import { useItemTranslation } from "../../hooks/useTranslation";
import { DevTableItem } from "./types/devTable.types";

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



export interface UseGetDataResult {
  data?: { devTable?: DevTableItem[] };
  isLoading: boolean;
  error?: Error | null;
}

export default function DevTable() {
  const { data, isLoading }: UseGetDataResult = useGetData();
  const { t } = useTranslation();
  const { devTable } = data ?? {};
  const { translateItem } = useItemTranslation("pages.tables");

  const systemIcon: Record<string, JSX.Element> = {
    ios: <FaApple />,
    android: <DiAndroid />,
    windows: <IoLogoWindows />,
  };

  const renderCell = useCallback(
    (item: DevTableItem, columnKey: string | number) => {
      switch (columnKey) {
        case "name":
          return <span className="capitalize text-nowrap">{item.name}</span>;
        case "systems":
          return (
            <div className="flex items-center gap-2">
              {item?.systems.split(",").map((item) => (
                <span key={item} className="text-slate-300">
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
    },
    [t]
  );

  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow  flex flex-col space-y-5">
      <span className="text-2xl  text-bold capitalize pt-5 px-6">
        {t("pages.tables.devTable")}
      </span>
      <div className="overflow-x-auto">
        <Table
          aria-label="dev table"
          removeWrapper
          classNames={{
            th: "bg-transparent border-b border-slate-200 text-slate-300",
            tr: "px-6",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>
                {String(translateItem(column.label))}
              </TableColumn>
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
