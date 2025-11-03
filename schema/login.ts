import { z } from "zod";

export const LoginSchema = z.object({
  emailOrUsername: z
    .string()
    .min(1, "Email or Username is required")
    .refine(
      (val) => {
        // Accept if it's a valid email or a non-email username
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(val) || val.length > 0;
      },
      {
        message: "Must be a valid email or username",
      }
    ),
  password: z.string().min(1, "Password is required"),
});
