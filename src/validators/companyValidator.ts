import { z } from "zod";

const companyValidator = z
  .string()
  .max(20)
  .refine((value) => !/^\s/.test(value), {
    message: "Company name cannot start with a space",
  })
  .refine((value) => /[a-zA-Z]/.test(value), {
    message: "Company name must contain at least one letter",
  })
  .refine((value) => (value.match(/&/g) || []).length <= 5, {
    message: "Company name can contain up to 5 ampersands (&)",
  })
  .refine((value) => (value.match(/[-_]/g) || []).length <= 4, {
    message: "Company name can contain up to 4 hyphens or underscores",
  })
  .refine((value) => /^[a-zA-Z0-9 &_@-]*$/.test(value), {
    message:
      "Only letters, numbers, spaces, ampersands, hyphens, underscores, and at sign are allowed",
  });

export default companyValidator;
