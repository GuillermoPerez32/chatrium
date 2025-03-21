import { z } from "zod";
import enTranslation from "../../public/locales/en/translation.json";
import esTranslation from "../../public/locales/es/translation.json"; // Agrega más idiomas si es necesario

// Genera un esquema basado en la traducción en inglés (como referencia)
const translationSchema = z.object(
  Object.keys(enTranslation).reduce((acc, key) => {
    acc[key] = z.string();
    return acc;
  }, {} as Record<string, z.ZodString>)
);

// Función para validar un archivo de traducción
const validateTranslation = (locale: string, translation: unknown) => {
  const result = translationSchema.safeParse(translation);
  if (!result.success) {
    console.error(
      `🚨 Error en la traducción de "${locale}":`,
      result.error.format()
    );
  } else {
    console.log(`✅ "${locale}" es válido.`);
  }
};

// Validar cada archivo de traducción
validateTranslation("en", enTranslation);
validateTranslation("es", esTranslation);
