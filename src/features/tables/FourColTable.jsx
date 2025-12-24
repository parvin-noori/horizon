import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@heroui/react";
import { useGetData } from "../../hooks/useGetData";

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

export default function FourColTable() {
  const { data, isLoading } = useGetData();
  const { fourColTable } = data ?? {};
  const rowsWithPercent = fourColTable?.map((item) => ({
    ...item,
    progress: `${item.progress}%`,
  }));

  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow  flex flex-col space-y-5">
      <span className="text-2xl  text-bold capitalize pt-5 px-6">
        4-Column table
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
              <TableColumn key={column.key}>{column.label}</TableColumn>
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
