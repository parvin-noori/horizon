import { Button, Image } from "@heroui/react";
import { GiDiamonds } from "react-icons/gi";

export default function History(props) {
  const { items } = props;
  return (
    <div className="bg-white dark:bg-secondary p-4 rounded-lg flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <span className=" text-xl capitalize font-semibold">history</span>
        <Button
          className="bg-secondary dark:bg-white/5 text-primary"
          radius="full"
        >
          See all{" "}
        </Button>
      </div>
      <ul className="flex-col space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="hover:shadow p-2 rounded-lg flex items-center gap-x-3 cursor-pointer text-[#2B3674] dark:text-white"
          >
            <Image
              src={item.banner}
              alt={item.title}
              radius="lg"
              width={50}
              height={50}
              removeWrapper
            />
            <div className="flex flex-col">
              <span className="capitalize line-clamp-1  font-semibold">
                {item.title}
              </span>
              <span className="text-xs text-slate-400 capitalize line-clamp-1">
                by {item.by}
              </span>
            </div>
            <span className="te text-sm line-clamp-1  flex items-center gap-x-1 font-semibold ms-auto">
              <GiDiamonds /> {item.bid} ETH
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
