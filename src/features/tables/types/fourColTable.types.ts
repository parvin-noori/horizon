export interface FourColTable {
  key: string;
  name: string;
  progress: number;
  quantity: number;
  date: string;
}

export interface FourColTableResponse {
  fourColTable?: FourColTable[];
}
