// import DatePicker from "react-multi-date-picker";
import { RangeCalendar } from "@heroui/react";
export default function DatePick() {
  return (
    <RangeCalendar
      showMonthAndYearPickers
      aria-label="Date (Show Month and Year Picker)"
    />
  );
}
