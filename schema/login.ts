import { z } from "zod";

export const LoginSchema = z.object({
  emailOrUsername: z
    .string()
    .min(1, "Email or Username is required")
    .or(z.email("Invalid email format")),
  password: z.string().min(1, "Password is required"),
});
