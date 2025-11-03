import { BaseRequestParams } from "./common";

export interface Class {
  id: number;
  name: string;
  academicYearId: number;
  languageId: number;
  instructor: any[];
  students: any[];
  schedules: any[];
  classToUsers: any[];
  academicYear: any;
  modules: any[];
  language: any;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface GetClassesParams extends BaseRequestParams {
  userId?: number;
  classId?: number;
  languageId?: number;
}

export interface GetClassesResponse {
  data: Class[];
  meta: {
    page: number;
    perPage: number;
    count: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}
