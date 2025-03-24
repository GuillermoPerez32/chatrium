import { Separator } from "@/components/ui/separator";
import {
  Banknote,
  BookUser,
  CreditCard,
  FileClock,
  Landmark,
  Mail,
} from "lucide-react";

const invoices = [
  {
    date: "2/28/2025",
    amount: "US$150",
    status: "Done",
    description: "1 x Salescaptain Monthly 150 (at $150.00 / month)",
  },
  {
    date: "2/28/2024",
    amount: "US$150",
    status: "Done",
    description: "1 x Salescaptain Monthly 150 (at $150.00 / month)",
  },
  {
    date: "2/28/2023",
    amount: "US$150",
    status: "Done",
    description: "1 x Salescaptain Monthly 150 (at $150.00 / month)",
  },
];

const BillingPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold">Subscription Details</h1>

      <Separator />

      <div className="flex flex-col gap-8 p-4 md:p-8">
        <div>
          <div className="flex items-center gap-2">
            <CreditCard className="font-bold" />
            <span className="font-bold">Payment Method</span>
          </div>

          <Separator className="my-2" />

          <div className="flex items-center gap-2 ml-4">
            <Landmark size={16} className="font-bold" />
            <span className="text-sm">{`{ }`}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Banknote className="font-bold" />
            <span className="font-bold">Billing Information</span>
          </div>

          <Separator className="my-2" />

          <div className="grid grid-cols-2 gap-4 ml-4 max-w-[400px]">
            <div className="flex items-center gap-2">
              <Mail size={16} className="font-bold" />
              <span className="text-sm">Email</span>
            </div>
            <span className="text-sm">example@gmail.com</span>

            <div className="flex items-center gap-2">
              <BookUser size={16} className="font-bold" />
              <span className="text-sm">Address</span>
            </div>
            <span className="text-sm">33141 US</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <FileClock className="font-bold" />
            <span className="font-bold">Invoice History</span>
          </div>

          <Separator className="my-2" />

          <div className="grid grid-cols-4 gap-4 justify-items-center items-center">
            {invoices.map((invoice) => (
              <>
                <span className="text-sm">{invoice.date}</span>
                <span className="text-sm">{invoice.amount}</span>
                <div className="text-sm bg-green-200 rounded-full size-min flex justify-center items-center p-2 font-medium">
                  {invoice.status}
                </div>
                <span className="text-sm">{invoice.description}</span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
