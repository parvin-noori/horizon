import { useQuery } from "@tanstack/react-query";
import httpService from "../core/http-service";

export const useComplexTableData = () => {
  return useQuery({
    queryKey: ["complexTable"],
    queryFn: async () => {
      const { data } = await httpService.get("/complexTable.json");
      return data;
    },
  });
};
