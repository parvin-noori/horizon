import { useQuery } from "@tanstack/react-query";
import httpService from "../core/http-service";

export const useMembers = () => {
  return useQuery({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      const { data } = await httpService.get("/teamMembers.json");
      return data;
    },
  });
};
