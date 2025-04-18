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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type ContactFormProps = {
  contact: Contact;
  onSubmit: (data: Contact) => void;
  onCancel: () => void;
  isEdit?: boolean;
};

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  businessName: z.string().optional(),
  photo: z.any().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = ({
  contact,
  onSubmit,
  onCancel,
  isEdit = false,
}: ContactFormProps) => {
  const { t } = useTranslation();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: contact.name || "",
      email: contact.email || "",
      phone: contact.phone || "",
      businessName: contact.businessName || "",
      photo: undefined,
    },
  });

  const handleSubmit = (data: ContactFormValues) => {
    const submittedData: Contact = {
      id: contact.id || null,
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      businessName: data.businessName || "",
      photo:
        data.photo instanceof File
          ? URL.createObjectURL(data.photo)
          : contact.photo || "",
    };
    onSubmit(submittedData);
  };

  return (
    <Card className="w-full max-w-[90%] sm:max-w-md mx-auto my-4 sm:my-8">
      <CardHeader className="border-b border-muted">
        <CardTitle className="text-xl sm:text-2xl font-semibold text-muted-foreground text-center">
          {t(isEdit ? "editContact" : "addNewContact")}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 bg-background">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">{t("name")}</FormLabel>
                  <FormControl>
                    <Input id="name" placeholder={t("enterName")} {...field} />
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
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    {t("businessName")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="businessName"
                      placeholder={t("enterBusinessName")}
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
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) onChange(file);
                      }}
                      {...field}
                      value={undefined}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:space-x-2">
              <Button variant="outline" onClick={onCancel} type="button">
                {t("cancel")}
              </Button>
              <Button type="submit">{t(isEdit ? "save" : "addContact")}</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
