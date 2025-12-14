import { useQuery } from "@tanstack/react-query";
import httpService from "../core/http-service";

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ["dashboardStats"],
    queryFn: async () => {
      const { data } = await httpService.get("/dashboardStats.json");
      return data;
    },
  });
};
