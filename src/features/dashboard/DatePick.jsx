// import DatePicker from "react-multi-date-picker";
import {DatePicker} from "@heroui/date-picker";

export default function DatePick() {
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      {/* <DatePicker
        range
        dateSeparator=" تا "
        calendarPosition="bottom-right"
      /> */}
      <DatePicker  open={true} className="max-w-[284px]" label="Birth date" />
    </div>
  );
}
