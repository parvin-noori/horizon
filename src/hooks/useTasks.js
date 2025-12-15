import { useQuery } from "@tanstack/react-query";
import httpService from "../core/http-service";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await httpService.get("/tasks.json");
      return data;
    },
  });
};
