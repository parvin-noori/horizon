import { Progress } from "@heroui/react";
import { BsCloudCheck } from "react-icons/bs";

export default function Storage() {
  return (
    <div className="bg-white dark:bg-secondary px-5 rounded-xl h-full flex flex-col py-8 gap-2">
      <div className="flex flex-col gap-y-2 items-center text-center px-5">
        <span className="bg-secondary dark:bg-white/5 size-20 rounded-full items-center flex justify-center">
          <BsCloudCheck className="text-primary text-4xl" />
        </span>
        <span className=" text-xl font-semibold">Your storage</span>
        <p className="text-slate-400 text-sm">
          supervise your device space in the easiest way
        </p>
      </div>
      <div className="flex justify-between text-sm text-slate-400 mt-auto">
        <span>25.6 Gb</span>
        <span>50 Gb</span>
      </div>

      {/* Progress */}
      <Progress
        value={25.6}
        maxValue={50}
        color="primary"
        showValueLabel={false}
      />
    </div>
  );
}
