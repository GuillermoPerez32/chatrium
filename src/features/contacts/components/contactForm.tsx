import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Contact } from "../types/contacts";

type ContactFormProps = {
  contact: Contact;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
  isEdit?: boolean;
};

const ContactForm = ({
  contact,
  onChange,
  onSubmit,
  onCancel,
  isEdit = false,
}: ContactFormProps) => {
  const { t } = useTranslation();

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="bg-primary text-foreground">
        <CardTitle>{t(isEdit ? "editContact" : "addNewContact")}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-background">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-foreground">
              {t("name")}
            </Label>
            <Input
              id="name"
              name="name"
              value={contact.name}
              onChange={onChange}
              placeholder={t("enterName")}
              className="border-muted focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-foreground">
              {t("email")}
            </Label>
            <Input
              id="email"
              name="email"
              value={contact.email}
              onChange={onChange}
              placeholder={t("enterEmail")}
              className="border-muted focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-foreground">
              {t("phone")}
            </Label>
            <Input
              id="phone"
              name="phone"
              value={contact.phone}
              onChange={onChange}
              placeholder={t("enterPhone")}
              className="border-muted focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="photo" className="text-foreground">
              {t("photo")}
            </Label>
            <Input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={onChange}
              className="border-muted focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10"
              onClick={onCancel}
            >
              {t("cancel")}
            </Button>
            <Button
              onClick={onSubmit}
              className="bg-primary hover:bg-primary/90 text-foreground"
            >
              {t(isEdit ? "save" : "addContact")}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
