import { useQuery } from "@tanstack/react-query";
import httpService from "../../../core/http-service";

export const useDevTable = () => {
  return useQuery({
    queryKey: ["devTable"],
    queryFn: async () => {
      const { data } = await httpService.get("/devTable.json");
      return data;
    },
  });
};
