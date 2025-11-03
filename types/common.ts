export interface BaseRequestParams {
  page?: number;
  perPage?: number;
  order?: "ASC" | "DESC";
  skip?: number;
  sortBy?: string;
}
