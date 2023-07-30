import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .nonempty({ message: "Password is required" }),
});
export type SignInForm = z.infer<typeof SignInSchema>;
