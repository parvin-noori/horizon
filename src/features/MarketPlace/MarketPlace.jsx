import Banner from "./Banner";
import Creators from "./Creators";
import History from "./History";
import MarketPlaceItems from "./MarketPlaceItems";

const trendignItems = [
  {
    id: 1,
    title: "abstract colors",
    banner: "/imgs/trendingItem1.png",
    by: "esthera jackson",
    bid: 0.91,
  },
  {
    id: 2,
    title: "ETH AI Brain",
    banner: "/imgs/trendingItem2.png",
    by: "nick wilson",
    bid: 2.82,
  },
  {
    id: 3,
    title: "mesh gradients",
    banner: "/imgs/trendingItem3.png",
    by: "will smith",
    bid: 0.56,
  },
];
const recentlyItems = [
  {
    id: 1,
    title: "swipe circles",
    banner: "/imgs/recentlyItem1.png",
    by: "petter will",
    bid: 2.3,
  },
  {
    id: 2,
    title: "colorful heaven",
    banner: "/imgs/recentlyItem2.png",
    by: "mark benjamin",
    bid: 1.3,
  },
  {
    id: 3,
    title: "3D cubes art",
    banner: "/imgs/recentlyItem3.png",
    by: "manny gates",
    bid: 6.58,
  },
];


const allItems=[...trendignItems,...recentlyItems];

export default function MarketPlace() {
  return (
    <div className="grid lg:grid-cols-7 grid-cols-1 lg:gap-x-5 gap-y-5 lg:gap-y-0">
      <div className="lg:col-span-5 flex flex-col lg:space-y-15 space-y-10">
        <Banner />
        <MarketPlaceItems title="Trending NFTs" items={trendignItems} />
        <MarketPlaceItems title="Recently added" items={recentlyItems} />
      </div>
      <div className="lg:col-span-2 flex flex-col space-y-5">
        <Creators />
        <History items={allItems}/>
      </div>
    </div>
  );
}
