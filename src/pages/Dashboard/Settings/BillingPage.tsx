import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Banknote,
  BookUser,
  CreditCard,
  FileClock,
  Landmark,
  Mail,
} from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";

// Definimos las claves de traducción válidas para los estados
type InvoiceStatusKey =
  | "invoiceStatus.done"
  | "invoiceStatus.pending"
  | "invoiceStatus.failed";

// Mapeo de estados a claves de traducción
const statusTranslations: Record<string, InvoiceStatusKey> = {
  done: "invoiceStatus.done",
  pending: "invoiceStatus.pending",
  failed: "invoiceStatus.failed",
};

const invoices = [
  {
    date: "2/28/2025",
    amount: "US$150",
    status: "Done",
    description: "1 x Chatrium Monthly 150 (at $150.00 / month)",
  },
  {
    date: "2/28/2024",
    amount: "US$150",
    status: "Done",
    description: "1 x Chatrium Monthly 150 (at $150.00 / month)",
  },
  {
    date: "2/28/2023",
    amount: "US$150",
    status: "Done",
    description: "1 x Chatrium Monthly 150 (at $150.00 / month)",
  },
];

const BillingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-6 h-6" />
            {t("paymentMethod")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 ml-4">
            <Landmark size={16} />
            <span className="text-sm">{t("cardNumberExample")}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Banknote className="w-6 h-6" />
            {t("billingInformation")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 ml-4 max-w-[400px]">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="text-sm">{t("emailLabel")}</span>
            </div>
            <span className="text-sm">{t("emailExample")}</span>

            <div className="flex items-center gap-2">
              <BookUser size={16} />
              <span className="text-sm">{t("addressLabel")}</span>
            </div>
            <span className="text-sm">{t("addressExample")}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileClock className="w-6 h-6" />
            {t("invoiceHistory")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 justify-items-center items-center">
            {invoices.map((invoice, index) => (
              <Fragment key={index}>
                <span className="text-sm">{invoice.date}</span>
                <span className="text-sm">{invoice.amount}</span>
                <div className="text-sm bg-green-200 rounded-full px-2 py-1 font-medium h-min flex items-center justify-center">
                  {t(
                    statusTranslations[invoice.status.toLowerCase()] ||
                      "invoiceStatus.done"
                  )}
                </div>
                <span className="text-sm">{invoice.description}</span>
              </Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingPage;
