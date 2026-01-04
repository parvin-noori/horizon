import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetData } from "../../hooks/useGetData";
import { useItemTranslation } from "../../hooks/useTranslation";

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "progress",
    label: "PROGRESS",
  },
  {
    key: "quantity",
    label: "QUANTITY",
  },
  {
    key: "date",
    label: "DATE",
  },
];
export default function CheckTable() {
  const [selectedKeys, setSelectedKeys] = useState(["2", "3", "4"]);
  const { data, isLoading, error } = useGetData();
  const { checkTable } = data ?? {};
  const { t } = useTranslation();
  const { translateItem } = useItemTranslation("pages.tables");

  if (error) {
    console.log(error);
  }

  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <span className="text-2xl  text-bold capitalize">
        {t("pages.dashboard.checkTable.title")}
      </span>
      <div className="overflow-x-auto">
        <Table
          removeWrapper
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          onSelectionChange={setSelectedKeys}
          classNames={{
            th: "bg-transparent text-slate-300",
            tr: "capitalize text-nowrap",
            td: "data-[selected=true]:before:!opacity-0 !text-inherit [&>span]:whitespace-nowrap",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{translateItem(column.label)}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={checkTable ?? []} isLoading={isLoading}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
