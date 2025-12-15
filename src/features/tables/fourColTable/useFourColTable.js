import { useQuery } from "@tanstack/react-query";
import httpService from "../../../core/http-service";

export const useFourColTable = () => {
  return useQuery({
    queryKey: ["fourColTable"],
    queryFn: async () => {
      const { data } = await httpService.get("/fourColTable.json");
      return data;
    },
  });
};
