import { useQuery } from "@tanstack/react-query";
import httpService from "../core/http-service";

export const useGetData = <T>() => {
  return useQuery({
    queryKey: ["getData"],
    queryFn: async () => {
      const { data } = await httpService.get<T>("");
      return data;
    },
  });
};
