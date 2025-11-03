import { apiClient } from "@/libs/api-client";
import {
  GetUpcomingNotificationsRequest,
  GetUpcomingNotificationsResponse,
} from "@/types/notifications";

export const getUpcomingNotifications = async (
  options: GetUpcomingNotificationsRequest
): Promise<GetUpcomingNotificationsResponse> => {
  try {
    const res = await apiClient.get("/notifications/up-coming/all", {
      params: options,
    });

    return res;
  } catch (error) {
    throw error;
  }
};
