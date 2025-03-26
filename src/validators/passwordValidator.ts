import { z } from "zod";

const passwordValidator = z
  .string()
  .min(6, "Password must be at least 6 characters long")
  .max(25, "Password must be at most 25 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(
    /[!@#$%^&*()_+{}[\]:;<>,.?/~`]/,
    "Password must contain at least one special character"
  );

export default passwordValidator;
