import { useQuery } from "@tanstack/react-query";
import httpService from "../../../core/http-service";

export const useCheckTable = () => {
  return useQuery({
    queryKey: ["checkTable"],
    queryFn: async () => {
      const { data } = await httpService.get("/checkTable.json");
      return data;
    },
  });
};
