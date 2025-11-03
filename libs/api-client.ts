import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { router } from "expo-router";
import { config } from "./config";
import { getAccessToken } from "./secure-storage";

// 🔧 Create a typed Axios instance interface that returns data directly
export interface TypedAxiosInstance extends AxiosInstance {
  get<T = any, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
  delete<T = any, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
  put<T = any, R = T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
  patch<T = any, R = T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
}

export const apiClient: TypedAxiosInstance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
}) as TypedAxiosInstance;

// 🔒 Request interceptor for adding tokens
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// 🚦 Response interceptor to unwrap data and handle 401
apiClient.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError<any>) => {
    // ToastAndroid.show(
    //   String(error.response?.data).charAt(0).toUpperCase() +
    //     String(error.response?.data).slice(1),
    //   ToastAndroid.LONG
    // );
    if (error.response?.status === 401) {
      router.replace("/(auth)/login");
    }
    return Promise.reject(error);
  }
);
