// import DatePicker from "react-multi-date-picker";
import { RangeCalendar } from "@heroui/react";
export default function DatePick() {
  return (
    <div className="w-full justify-center h-full">
      <RangeCalendar
        color="primary"
        // calendarWidth="100%"
        className="w-full bg-white dark:bg-secondary flex items-center justify-center h-full py-3"
        showMonthAndYearPickers
        aria-label="Date (Show Month and Year Picker)"
      />
    </div>
  );
}
