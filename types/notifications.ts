export interface UpcomingNotification {
  exams: {
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    title: string;
    description: string;
    class_id: number;
    creator_id: number;
    pass_rate: number;
    content_data: object;
    class_name: string;
  }[];
  assignments: {
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    title: string;
    description: string;
    class_id: number;
    creator_id: number;
    content_data: object;
    class_name: string;
  }[];
  schedules: {
    schedule_id: number;
    start_at: string;
    end_at: string;
    class_name: string;
    class_id: number;
    room_name: string;
    title: string;
    start_time: string;
    end_time: string;
  }[];
  events: {
    id: number;
    title: string;
    description: string;
    date: string;
    start_time: string;
    end_time: string;
    event_type_id: number;
    class_name: string;
    start_datetime: string;
  }[];
}

export interface GetUpcomingNotificationsRequest {
  classId?: number;
}

export interface GetUpcomingNotificationsResponse {
  data: UpcomingNotification;
}
