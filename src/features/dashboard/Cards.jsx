import { Button } from "@heroui/react";
import { IoFingerPrint } from "react-icons/io5";
export default function Cards() {
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex justify-between flex-col space-y-5">
      <IoFingerPrint className="text-7xl text-primary"/>
      <h3 className="text-[#2B3674] dark:text-white text-xl font-semibold">control cards security in-app with a tap</h3>
      <p className="text-sm text-slate-400">discover our cards benefits, with one tap.</p>
      <Button size="lg" color="primary">cards</Button>
    </div>
  );
}
