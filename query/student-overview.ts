import { useApiQuery } from "@/hooks/use-api";
import { getStudentOverview } from "@/server/student-overview";
import { GetStudentOverview, StudentOverview } from "@/types/student-overview";

export const useGetstudentOverview = (options: GetStudentOverview) => {
  return useApiQuery<StudentOverview>(
    ["get-student-overview"],
    () => getStudentOverview(options),
    { enabled: !!options.studentId && !!options.classId }
  );
};
