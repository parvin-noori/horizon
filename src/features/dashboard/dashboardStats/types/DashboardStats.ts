import { ElementType } from "react";

export interface DashboardStatusType {
  id: string;
  title: string;
  value: string;
  icon?: ElementType;
  change: number | null;
  trend: string;
}