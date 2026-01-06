import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@heroui/react";
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

type Item = {
  key: string;
  name: string;
  progress: number;
  quantity: number;
  date: string;
};

export interface UseGetDataResult {
  data?: { fourColTable?: Item[] };
  isLoading: boolean;
  error?: Error | null;
}
export default function FourColTable() {
  const { data, isLoading }: UseGetDataResult = useGetData();
  const { fourColTable } = data ?? {};
  const { translateItem } = useItemTranslation("pages.tables");
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow  flex flex-col space-y-5">
      <span className="text-2xl  text-bold capitalize pt-5 px-6">
        {t("pages.tables.4-ColumnTable")}
      </span>
      <div className="overflow-x-auto">
        <Table
          aria-label="four column table"
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
          <TableBody items={fourColTable ?? []} isLoading={isLoading}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell className="capitalize">
                    {getKeyValue(item, columnKey)}
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
