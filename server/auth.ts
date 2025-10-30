import { apiClient } from "@/libs/api-client";
import { UserLoginDto, UserLoginResponse } from "@/types/auth";

export const login = async (data: UserLoginDto): Promise<UserLoginResponse> => {
  try {
    const res = await apiClient.post("/auth/login", data);

    return res;
  } catch (error) {
    throw error;
  }
};
