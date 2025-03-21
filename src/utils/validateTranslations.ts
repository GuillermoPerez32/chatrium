import { z } from "zod";
import enTranslation from "../../public/locales/en/translation.json";
import esTranslation from "../../public/locales/es/translation.json"; // Add more languages if necessary

// Generate a schema based on the English translation (as a reference)
const translationSchema = z.object(
  Object.keys(enTranslation).reduce((acc, key) => {
    acc[key] = z.string();
    return acc;
  }, {} as Record<string, z.ZodString>)
);

// Function to validate a translation file
const validateTranslation = (locale: string, translation: unknown) => {
  const result = translationSchema.safeParse(translation);
  if (!result.success) {
    console.error(
      `🚨 Error in the "${locale}" translation:`,
      result.error.format()
    );
  } else {
    console.log(`✅ "${locale}" is valid.`);
  }
};

// Validate each translation file
validateTranslation("en", enTranslation);
validateTranslation("es", esTranslation);
