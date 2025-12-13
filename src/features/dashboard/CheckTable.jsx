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

const rows = [
  {
    key: "1",
    name: "horizon UI pro",
    progress: 17.5,
    quantity: 2.458,
    date: "24.jan.2021",
  },
  {
    key: "2",
    name: "horizon UI free",
    progress: 10.8,
    quantity: 1.485,
    date: "12.jun.2021",
  },
  {
    key: "3",
    name: "weekly updates",
    progress: 21.3,
    quantity: 1.024,
    date: "5.jan.2021",
  },
  {
    key: "4",
    name: "venus 3D asset",
    progress: 31.5,
    quantity: 858,
    date: "7.mar.2021",
  },
  {
    key: "5",
    name: "marketplace",
    progress: 12.2,
    quantity: 258,
    date: "17.dec.2021",
  },
];

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
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <span className="text-2xl  text-bold capitalize">check table</span>
      <div className="overflow-x-auto">
        <Table
          removeWrapper
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          onSelectionChange={setSelectedKeys}
          classNames={{
            th: "bg-transparent text-slate-300",
            tr: "capitalize",
            td: "data-[selected=true]:before:!opacity-0 !text-inherit",
          }}
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
                  <TableCell className="text-nowrap">
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
