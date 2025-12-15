import Banner from "../../features/MarketPlace/Banner";
import Creators from "../../features/MarketPlace/Creators";
import History from "../../features/MarketPlace/History";
import MarketPlaceItems from "../../features/MarketPlace/MarketPlaceItems";
import { useTrendingItems } from "../../features/MarketPlace/useTrendingItems";
import { useRecentlyItems } from "../../features/MarketPlace/useRecentlyItems";

export default function MarketPlace() {
  const { data: trendignItems, isLoading: loadingTrending } =
    useTrendingItems();
  const { data: recentlyItems, isLoading: loadingRecently } =
    useRecentlyItems();

  const allItems = [...(trendignItems ?? []), ...(recentlyItems ?? [])];
  return (
    <div className="grid lg:grid-cols-7 grid-cols-1 lg:gap-x-5 gap-y-5 lg:gap-y-0">
      <div className="lg:col-span-5 flex flex-col lg:space-y-15 space-y-10">
        <Banner />
        <MarketPlaceItems title="Trending NFTs" items={trendignItems ?? []} />
        <MarketPlaceItems title="Recently added" items={recentlyItems ?? []} />
      </div>
      <div className="lg:col-span-2 flex flex-col space-y-5">
        <Creators />
        <History items={allItems} />
      </div>
    </div>
  );
}
