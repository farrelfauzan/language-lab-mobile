import { apiClient } from "@/libs/api-client";
import { GetClassesParams, GetClassesResponse } from "@/types/class";

export const getClasses = async (
  options: GetClassesParams
): Promise<GetClassesResponse> => {
  try {
    const res = await apiClient.get("/classes", {
      params: options,
    });

    return res;
  } catch (error) {
    throw error;
  }
};
