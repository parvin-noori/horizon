// import DatePicker from "react-multi-date-picker";
import { RangeCalendar } from "@heroui/react";
export default function Calender() {
  // let [value, setValue] = useState({
  //   start: today(getLocalTimeZone()),
  //   end: today(getLocalTimeZone()).add({ weeks: 1 }),
  // });
  return (
    <RangeCalendar
      color="primary"
      // value={value}
      // onChange={setValue}
      calendarWidth="100%"
      classNames={{
        content: "w-full",
        base: "!size-full bg-white dark:bg-secondary grid place-content-center",
        gridWrapper: "w-full px-3",
        gridHeader: "!shadow-none",
        header: "bg-secondary dark:bg-white/5 text-primary",
        title: "text-primary",
        headerWrapper: "pb-6 bg-transparent",
        gridBody: "text-sm",
        gridHeader: "bg-transparent",
        gridBodyRow: "justify-between",
        gridHeaderRow: "justify-between ",
        cell: "w-full",
        cellButton: "w-full",
        pickerItem: "text-slate-400",
      }}
      showMonthAndYearPickers
      aria-label="Date (Show Month and Year Picker)"
    />
  );
}
