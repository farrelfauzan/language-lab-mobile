import { useApiMutation } from "@/hooks/use-api";
import { login } from "@/server/auth";
import { UserLoginDto, UserLoginResponse } from "@/types/auth";

export const useLogin = () => {
  return useApiMutation<UserLoginResponse, UserLoginDto>(login, {
    onSuccess: (data) => {
      console.log("Login successful:", JSON.stringify(data, null, 2));
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
