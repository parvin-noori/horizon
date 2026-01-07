export interface MarkerPlaceItem {
  id: number;
  title: string;
  banner: string;
  by: string;
  bid: number;
}

export interface MarketPlaceItemsProps {
  items: MarkerPlaceItem[];
  title: string;
}

export interface LikedItems {
  [id: number]: boolean;
}

export interface MarkerPlaceResponse {
  trendingItems?: MarkerPlaceItem[];
  recentlyItems: MarkerPlaceItem[];
}
