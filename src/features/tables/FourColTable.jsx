import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@heroui/react";
import { fourColTableColumns, fourColTableRows } from "./data";

export default function FourColTable() {
  const rowsWithPercent = fourColTableRows.map((item) => ({
    ...item,
    progress: `${item.progress}%`,
  }));

  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <span className="text-2xl text-[#2B3674] dark:text-white text-bold capitalize">
        4-Column table
      </span>
      <div className="overflow-x-auto">
        <Table removeWrapper>
          <TableHeader columns={fourColTableColumns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rowsWithPercent}>
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
