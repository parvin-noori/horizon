import { useQuery } from "@tanstack/react-query";
import httpService from "../../core/http-service";

export const useTrendingItems = () => {
  return useQuery({
    queryKey: ["trendingItems"],
    queryFn: async () => {
      const { data } = await httpService.get("/trendingItems.json");
      return data;
    },
  });
};
