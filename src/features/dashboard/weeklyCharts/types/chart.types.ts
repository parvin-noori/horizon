export interface WeeklySummary {
  month: string;
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

export interface WeeklySummaryResponse {
  weeklySummary: WeeklySummary[];
}