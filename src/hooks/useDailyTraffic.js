import { useQuery } from "@tanstack/react-query";
import httpService from "../core/http-service";

export const useDailyTraffic = () => {
  return useQuery({
    queryKey: ["dailyTraffic"],
    queryFn: async () => {
      const { data } = await httpService.get("/dailyTraffic.json");
      return data;
    },
  });
};
