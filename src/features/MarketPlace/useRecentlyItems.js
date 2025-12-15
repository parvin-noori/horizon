import { useQuery } from "@tanstack/react-query";
import httpService from "../../core/http-service";

export const useRecentlyItems = () => {
  return useQuery({
    queryKey: ["recentlyItems"],
    queryFn: async () => {
      const { data } = await httpService.get("/recentlyItems.json");
      return data;
    },
  });
};
