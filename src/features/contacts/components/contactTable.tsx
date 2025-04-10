import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash, Pencil } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Contact } from "../types/contacts";

type ContactTableProps = {
  data: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
};

const ContactTable = ({ data, onEdit, onDelete }: ContactTableProps) => {
  const { t } = useTranslation();

  return (
    <Card className="shadow-lg rounded-lg">
      <CardHeader className="border-b border-muted">
        <CardTitle className="text-3xl font-semibold text-muted-foreground text-center">
          {t("contactList")}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-background">
        {data.length === 0 ? (
          <p className="text-foreground text-center">{t("noDataTable")}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/20 text-foreground">
                  <th className="p-3 font-semibold">{t("photo")}</th>
                  <th className="p-3 font-semibold">{t("name")}</th>
                  <th className="p-3 font-semibold">{t("email")}</th>
                  <th className="p-3 font-semibold">{t("phone")}</th>
                  <th className="p-3 font-semibold">
                    {t("businessName")}
                  </th>{" "}
                  {/* Nueva columna */}
                  <th className="p-3 font-semibold">{t("actions")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((contact) => (
                  <tr
                    key={contact.id}
                    className="border-b border-muted hover:bg-primary/5"
                  >
                    <td className="p-3">
                      {contact.photo ? (
                        <img
                          src={contact.photo}
                          alt={contact.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-foreground font-semibold">
                          {contact.name.charAt(0)}
                        </div>
                      )}
                    </td>
                    <td className="p-3 text-foreground">{contact.name}</td>
                    <td className="p-3 text-muted-foreground">
                      {contact.email}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {contact.phone}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {contact.businessName || "-"}{" "}
                      {/* Mostrar "-" si no hay valor */}
                    </td>
                    <td className="p-3 flex space-x-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary text-foreground hover:bg-primary/10"
                              onClick={() => onEdit(contact)}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>{t("editContact")}</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              className="bg-destructive hover:bg-destructive/90 text-foreground"
                              onClick={() =>
                                contact.id !== null && onDelete(contact.id)
                              }
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>{t("deleteContact")}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactTable;
