import { apiClient } from "@/libs/api-client";
import { GetStudentOverview, StudentOverview } from "@/types/student-overview";

export const getStudentOverview = async (
  options: GetStudentOverview
): Promise<StudentOverview> => {
  try {
    const res = await apiClient.get("/student-overview", {
      params: options,
    });

    return res;
  } catch (error) {
    throw error;
  }
};
