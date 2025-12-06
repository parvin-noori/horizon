import { Chip, Image } from "@heroui/react";
import { FaRegClock } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import StarBucks from "/imgs/starbucks.png";
import StarBucksLogo from "/imgs/starbucksLogo.png";

export default function Ads() {
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow p-5 space-y-10">
      <div className="relative">
        <Image
          className="object-cover"
          height={150}
          width={300}
          radius="lg"
          shadow="sm"
          src={StarBucks}
        />
        <Chip
          variant="flat"
          className="absolute top-3 end-3 z-100 rounded-lg p-0  text-white"
        >
          <FaRegClock />
        </Chip>
        <Image
         height={50}
          width={50}
          radius="full"
          src={StarBucksLogo}
          className="absolute -bottom-5 start-3 object-cover z-100"
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <b className="capitalize text-[#2B3674] dark:text-white text-2xl">
          starbucks
        </b>
        <p className="flex items-center gap-x-2 text-slate-400">
          <IoFastFoodSharp />
          10% cashback & off
        </p>
      </div>
    </div>
  );
}
