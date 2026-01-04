import {
  Button,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useItemTranslation } from "../../hooks/useTranslation";

const rows = [
  {
    key: "1",
    name: "maddison_c21",
    artworks: 9821,
    rating: 90,
  },
  {
    key: "2",
    name: "karl.will02",
    artworks: 7032,
    rating: 80,
  },
  {
    key: "3",
    name: "andreea.1z",
    artworks: 5204,
    rating: 70,
  },
  {
    key: "4",
    name: "ebraham47.y",
    artworks: 4309,
    rating: 60,
  },
  {
    key: "5",
    name: "simmmple.web",
    artworks: 3871,
    rating: 50,
  },
  {
    key: "6",
    name: "venus.sys",
    artworks: 3152,
    rating: 40,
  },
  {
    key: "7",
    name: "ape.vpp8",
    artworks: 2907,
    rating: 30,
  },
  {
    key: "8",
    name: "leon.pwrr",
    artworks: 2309,
    rating: 20,
  },
];

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "artworks",
    label: "ARTWORKS",
  },
  {
    key: "rating",
    label: "RATING",
  },
];

export default function Creators() {
  const { t } = useTranslation();
  const { translateItem } = useItemTranslation("pages.marketPlace.creatores");

  const renderCell = useCallback((item, columnKey) => {
    switch (columnKey) {
      case "name":
        return <span className="capitalize  font-semibold">@{item.name}</span>;
      case "artworks":
        return <span className="text-slate-400"> {item.artworks}</span>;
      case "rating":
        return <Progress size="sm" value={item.rating} />;
    }
  });
  return (
    <div className="bg-white dark:bg-secondary p-4 rounded-lg flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <span className=" text-xl capitalize font-semibold">
          {t("pages.marketPlace.creatores.title")}
        </span>
        <Button
          className="bg-secondary dark:bg-white/5 text-primary dark:text-white"
          radius="full"
        >
          {t("buttons.seeAll")}
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table
          aria-label="creators table"
          classNames={{ th: "bg-transparent" }}
          removeWrapper
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>
                {translateItem(column.label)}
              </TableColumn>
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
