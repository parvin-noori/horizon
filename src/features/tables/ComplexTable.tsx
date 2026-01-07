import {
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FcApproval } from "react-icons/fc";
import { MdError } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useGetData } from "../../hooks/useGetData";
import { useItemTranslation } from "../../hooks/useTranslation";
import {
  ComplexTableResponse,
  ComplexTable as ComplexTableType,
  StatusIconType,
} from "../tables/types/complexTable.types";

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
  const { data, isLoading, error } = useGetData<ComplexTableResponse>();
  const { complexTable } = data ?? {};
  const { t } = useTranslation();
  const { translateItem } = useItemTranslation("pages.tables");

  const renderCell = useCallback(
    (item: ComplexTableType, columnKey: string | number): React.ReactNode => {
      switch (columnKey) {
        case "name":
          return <span className="capitalize text-nowrap">{item.name}</span>;
        case "status":
          return (
            <div className="flex items-center gap-2">
              <span className="text-xl">
                {statusIcon[item.status as keyof StatusIconType]}
              </span>
              {t(`pages.tables.${item.status}`)}
            </div>
          );
        case "date":
          return <span className="text-nowrap">{item.date}</span>;
        case "progress":
          return <Progress size="sm" value={item.progress} />;
      }
    },
    [t]
  );
  const statusIcon: StatusIconType = {
    approved: <FcApproval />,
    disable: <RxCrossCircled className="text-red-500" />,
    error: <MdError className="text-yellow-500" />,
  };

  if (error) {
    console.log(error);
  }
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow flex flex-col space-y-5">
      <span className="text-2xl  text-bold capitalize px-6 pt-5">
        {t("pages.dashboard.complexTable.title")}
      </span>
      <div className="overflow-x-auto">
        <Table
          aria-label="complex table"
          isCompact
          removeWrapper
          classNames={{
            th: "bg-transparent border-slate-200 text-slate-300 px-6",
            td: "px-6 py-3",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>
                {String(translateItem(column.label))}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={complexTable ?? []} isLoading={isLoading}>
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
