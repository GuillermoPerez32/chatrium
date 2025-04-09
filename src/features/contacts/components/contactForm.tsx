import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Contact } from "../types/contacts";
import { useForm } from "react-hook-form"; // Asegúrate de que esté instalado
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type ContactFormProps = {
  contact: Contact;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Este prop ya no será necesario
  onSubmit: (data: Contact) => void; // Cambiamos la firma para recibir los datos del formulario
  onCancel: () => void;
  isEdit?: boolean;
};

// Esquema básico de validación para ContactForm
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  photo: z.any().optional(), // Para el campo de archivo, no validamos específicamente aquí
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = ({
  contact,
  onSubmit,
  onCancel,
  isEdit = false,
}: ContactFormProps) => {
  const { t } = useTranslation();

  // Inicializamos el formulario con useForm
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: contact.name || "",
      email: contact.email || "",
      phone: contact.phone || "",
      photo: undefined, // No inicializamos el campo de archivo
    },
  });

  // Manejador de envío del formulario
  const handleSubmit = (data: ContactFormValues) => {
    // Adaptamos los datos al tipo Contact esperado por onSubmit
    const submittedData: Contact = {
      id: contact.id || null, // Include the id property
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      photo:
        data.photo instanceof File
          ? URL.createObjectURL(data.photo)
          : contact.photo || "", // Manejo básico del archivo
    };
    onSubmit(submittedData);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="bg-primary text-foreground">
        <CardTitle>{t(isEdit ? "editContact" : "addNewContact")}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-background">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">{t("name")}</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      placeholder={t("enterName")}
                      className="border-muted focus:ring-primary focus:border-primary"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    {t("email")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder={t("enterEmail")}
                      className="border-muted focus:ring-primary focus:border-primary"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    {t("phone")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="phone"
                      placeholder={t("enterPhone")}
                      className="border-muted focus:ring-primary focus:border-primary"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photo"
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    {t("photo")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      className="border-muted focus:ring-primary focus:border-primary"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) onChange(file); // Pasamos el archivo al controlador
                      }}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                className="border-primary text-foreground hover:bg-primary/10"
                onClick={onCancel}
                type="button" // Evitamos que dispare el submit
              >
                {t("cancel")}
              </Button>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-foreground"
              >
                {t(isEdit ? "save" : "addContact")}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
