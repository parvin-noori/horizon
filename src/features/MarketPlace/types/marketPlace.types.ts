export type MarkerPlaceItem = {
  id: number;
  title: string;
  banner: string;
  by: string;
  bid: number;
};

export interface MarketPlaceItemsProps {
  items: MarkerPlaceItem[];
  title: string;
}

export type LikedItems = {
  [id: number]: boolean;
};
