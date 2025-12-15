import { useTrendingItems } from "../../hooks/useTrendingItems";
import Banner from "./Banner";
import Creators from "./Creators";
import History from "./History";
import MarketPlaceItems from "./MarketPlaceItems";

const { data: trendignItems } = useTrendingItems();
const { data: recentlyItems } = recentlyItems();

const allItems = [...trendignItems, ...recentlyItems];

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
        <History items={allItems} />
      </div>
    </div>
  );
}
