import { useQuery } from "@tanstack/react-query";
import httpService from "../../../core/http-service";

export const useWeeklySummary = () => {
  return useQuery({
    queryKey: ["weeklySummary"],
    queryFn: async () => {
      const { data } = await httpService.get("/weeklySummary.json");
      return data;
    },
  });
};
