export interface DevTableItem {
  key: string;
  name: string;
  systems: string;
  date: string;
  progress: number;
}

export interface DevTableResponse {
  devTable?: DevTableItem[];
}
