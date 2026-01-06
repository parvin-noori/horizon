import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@heroui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetData } from "../../hooks/useGetData";
import { Item } from "../../pages/main/MarketPlace";
import { Member } from "../dashboard/BusinessDesign";
import LoadingItems from "./LoadingItems";

const members: Member[] = [
  { id: 1, img: "/imgs/Avatar1.png", name: "user 1" },
  { id: 1, img: "/imgs/Avatar2.png", name: "user 2" },
  { id: 1, img: "/imgs/Avatar3.png", name: "user 3" },
];

interface MarketPlaceItemsProps {
  items: Item[];
  title: string;
}

type LikedItems = {
  [id: number]: boolean;
};

export default function MarketPlaceItems(props: MarketPlaceItemsProps) {
  const { items, title } = props;
  const { isLoading, error } = useGetData();
  const { t } = useTranslation();
  const [likedItems, setLikedItems] = useState<LikedItems>(() => {
    const saved = localStorage.getItem("likedItems");
    return saved ? JSON.parse(saved) : {};
  });

  const toggleLike = (id: number) => {
    setLikedItems((prev) => {
      const newState = {
        ...prev,
        [id]: !prev[id],
      };
      localStorage.setItem("likedItems", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="flex flex-col space-y-5">
      <h3 className=" font-semibold capitalize text-2xl">{title}</h3>
      {error ? (
        <span className="text-red-400">{error.message}</span>
      ) : (
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <LoadingItems />
                </SwiperSlide>
              ))
            : items.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card className="p-3 h-full dark:bg-secondary" shadow="none">
                    <div className="relative overflow-hidden max-h-52 rounded-xl">
                      <Image
                        removeWrapper
                        isZoomed
                        src={item.banner}
                        alt={item.title}
                        className="w-full object-cover"
                      />
                      <Button
                        aria-label="like button"
                        onPress={() => toggleLike(item.id)}
                        className="absolute z-10 bg-white text-primary end-3 top-3 rounded-full p-0 size-9 flex items-center justify-center !min-w-auto"
                      >
                        {likedItems[item.id] ? <FaHeart /> : <FaRegHeart />}
                      </Button>
                    </div>
                    <CardBody>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="capitalize  font-semibold line-clamp-2">
                            {item.title}
                          </span>
                          <span className="text-xs text-slate-400 capitalize line-clamp-1">
                            {t("by")} {item.by}
                          </span>
                        </div>
                        <AvatarGroup max={2}>
                          {members?.map((member) => (
                            <Avatar src={member.img} size="sm" />
                          ))}
                        </AvatarGroup>
                      </div>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between gap-x-3">
                      <span className="text-sm text-primary dark:text-slate-400 capitalize line-clamp-2">
                        {t("pages.marketPlace.currentBid")} :{item.bid} ETH
                      </span>
                      <Button color="primary" radius="full" className="px-5">
                        {t("buttons.placeBid")}
                      </Button>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
        </Swiper>
      )}
    </div>
  );
}
