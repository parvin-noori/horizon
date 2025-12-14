import { useQuery } from "@tanstack/react-query";

export const useCheckTable = () => {
  return useQuery({
    queryKey: ["checkTable"],
    queryFn: async () => {
      const { data } = await httpService.get("/checkTable.json");
      return data;
    },
  });
};
