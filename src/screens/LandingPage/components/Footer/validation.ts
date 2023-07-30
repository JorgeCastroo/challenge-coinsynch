import { z } from "zod";

export const SendEmailSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is required" }),
});
export type SendEmailForm = z.infer<typeof SendEmailSchema>;
