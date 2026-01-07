export interface DailyTraffic  {
  pv: number;
  name: string;
};

export interface DailyTrafficResponse {
  dailyTraffic?: DailyTraffic[];
}
