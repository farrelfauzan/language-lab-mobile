import { useApiQuery } from "@/hooks/use-api";
import { getUpcomingNotifications } from "@/server/notifications";
import {
  GetUpcomingNotificationsRequest,
  GetUpcomingNotificationsResponse,
} from "@/types/notifications";

export const useGetUpcomingNotification = (
  options: GetUpcomingNotificationsRequest
) => {
  return useApiQuery<GetUpcomingNotificationsResponse>(
    ["get-upcoming-notifications"],
    () => getUpcomingNotifications(options),
    {
      enabled: !!options.classId,
    }
  );
};
