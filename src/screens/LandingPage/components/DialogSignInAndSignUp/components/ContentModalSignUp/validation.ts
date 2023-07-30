import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .nonempty({ message: "Name is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Email is required" }),
    password: z
      .string({ required_error: "Password is required" })
      .nonempty({ message: "Password is required" }),

    confirmpassword: z
      .string({ required_error: "Password confirmation is mandatory" })
      .min(6, "Minimum password of 6 digits")
      .nonempty({ message: "Password confirmation is mandatory" }),
    terms: z.boolean({ required_error: "Terms of Use is mandatory" }),
  })

  .refine(({ password, confirmpassword }) => password === confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });
export type SignUpForm = z.infer<typeof SignUpSchema>;
