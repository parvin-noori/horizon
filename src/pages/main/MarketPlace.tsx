import { useTranslation } from "react-i18next";
import Banner from "../../features/MarketPlace/Banner";
import Creators from "../../features/MarketPlace/Creators";
import History from "../../features/MarketPlace/History";
import MarketPlaceItems from "../../features/MarketPlace/MarketPlaceItems";
import { MarkerPlaceItem } from "../../features/MarketPlace/types/marketPlace.types";
import { useGetData } from "../../hooks/useGetData";
import { useItemTranslation } from "../../hooks/useTranslation";

export interface UseGetDataResult {
  data?: {
    trendingItems?: MarkerPlaceItem[];
    recentlyItems: MarkerPlaceItem[];
  };
  isLoading: boolean;
  error?: Error | null;
}

export default function MarketPlace() {
  const { data }: UseGetDataResult = useGetData();
  const { trendingItems, recentlyItems } = data ?? {};
  const { t } = useTranslation();
  const { translateItem } = useItemTranslation("pages.marketPlace.items");

  const translatedTrending = trendingItems?.map((item) => ({
    ...item,
    title: String(translateItem(item.title)),
  }));

  const translatedRecent = recentlyItems?.map((item) => ({
    ...item,
    title: String(translateItem(item.title)),
  }));

  const allItems = [...(translatedTrending ?? []), ...(translatedRecent ?? [])];
  return (
    <div className="grid lg:grid-cols-7 grid-cols-1 lg:gap-x-5 gap-y-5 lg:gap-y-0">
      <div className="lg:col-span-5 flex flex-col lg:space-y-15 space-y-10">
        <Banner />
        <MarketPlaceItems
          title={t("pages.marketPlace.items.tendingNFTs")}
          items={translatedTrending ?? []}
        />
        <MarketPlaceItems
          title={t("pages.marketPlace.items.recentlyAdded")}
          items={translatedRecent ?? []}
        />
      </div>
      <div className="lg:col-span-2 flex flex-col space-y-5">
        <Creators />
        <History items={allItems} />
      </div>
    </div>
  );
}
