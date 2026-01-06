import { useQuery } from "@tanstack/react-query";
import httpService from "../core/http-service";

export const useGetData = () => {
  return useQuery({
    queryKey: ["getData"],
    queryFn: async () => {
      const { data } = await httpService.get("");
      return data;
    },
  });
};
