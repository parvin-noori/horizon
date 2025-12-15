import { useQuery } from "@tanstack/react-query";
import httpService from "../../core/http-service";

export const useKanban = () => {
  return useQuery({
    queryKey: ["kanban"],
    queryFn: async () => {
      const { data } = await httpService.get("/kanban");
      return data;
    },
  });
};
