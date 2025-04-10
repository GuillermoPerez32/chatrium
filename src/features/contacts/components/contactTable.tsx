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
        <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground text-center">
          {t("contactList")}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 bg-background">
        {data.length === 0 ? (
          <p className="text-foreground text-center">{t("noDataTable")}</p>
        ) : (
          <div className="space-y-4 md:hidden">
            {/* Vista móvil y tablet: Tarjetas */}
            {data.map((contact) => (
              <div
                key={contact.id}
                className="border rounded-lg p-3 bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  {contact.photo ? (
                    <img
                      src={contact.photo}
                      alt={contact.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-foreground font-semibold">
                      {contact.name.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-foreground font-semibold">
                      {contact.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {contact.email}
                    </p>
                    {contact.phone && (
                      <p className="text-muted-foreground text-sm">
                        {contact.phone}
                      </p>
                    )}
                    <p className="text-muted-foreground text-sm">
                      {contact.businessName || "-"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {data.length > 0 && (
          <div className="hidden md:block overflow-x-auto">
            {/* Vista escritorio: Tabla */}
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/20 text-foreground">
                  <th className="p-3 font-semibold">{t("photo")}</th>
                  <th className="p-3 font-semibold">{t("name")}</th>
                  <th className="p-3 font-semibold">{t("email")}</th>
                  <th className="p-3 font-semibold">{t("phone")}</th>
                  <th className="p-3 font-semibold">{t("businessName")}</th>
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
                      {contact.businessName || "-"}
                    </td>
                    <td className="p-3 flex space-x-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
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
