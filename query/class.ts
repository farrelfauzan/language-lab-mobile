import { useApiQuery } from "@/hooks/use-api";
import { getClasses } from "@/server/class";
import { GetClassesParams, GetClassesResponse } from "@/types/class";

export const useGetClasses = (options: GetClassesParams) => {
  return useApiQuery<GetClassesResponse>(["get-classes"], () =>
    getClasses(options)
  );
};
