import { MdSlowMotionVideo } from "react-icons/md";
import { TbFlameFilled } from "react-icons/tb";
// import { RiTimerLine } from "react-icons/tb";

export default function BusinessDesign() {
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex flex-col space-y-5">
      <div className="flex items-center gap-2">
        <span className="bg-orange-100 size-9 text-orange-500 text-2xl rounded-lg flex items-center justify-center">
          <TbFlameFilled />
        </span>
        <div className="flex flex-col capitalize font-bold">
          <span className="text-xs text-slate-400">business design</span>
          <span className="text-[#2B3674] text-sm dark:text-white ">
            new lession is available
          </span>
        </div>
      </div>

      <p className="text-[#2B3674] dark:text-white text-lg">
        what do you need to know to create better products?
      </p>
      <div className="flex items-center gap-5 text-[#2B3674] text-xs">
        <span className="flex items-center gap-2">
          {/* <RiTimerLine className="text-green-400" /> */}
          85 mins
        </span>
        <span className="flex items-center gap-2">
          <MdSlowMotionVideo className="text-red-400 text-lg" />
          video format
        </span>
      </div>
    </div>
  );
}
