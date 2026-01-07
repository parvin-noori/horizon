import { MarkerPlaceItem } from "./marketPlace.types";

export interface HistoryProps {
  items: MarkerPlaceItem[];
}

export interface HistoryResponse {
  Items?: MarkerPlaceItem[];
}
