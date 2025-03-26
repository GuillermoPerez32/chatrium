import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Banknote,
  BookUser,
  CreditCard,
  FileClock,
  Landmark,
  Mail,
} from "lucide-react"

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
]

const BillingPage = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Subscription Details</h1>
      <Separator className="my-4" />

      <div className="flex flex-col gap-8 p-4 md:p-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 ml-4">
              <Landmark size={16} />
              <span className="text-sm">1234 5678 9012 3456</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Banknote className="w-6 h-6" />
              Billing Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 ml-4 max-w-[400px]">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">Email</span>
              </div>
              <span className="text-sm">example@gmail.com</span>

              <div className="flex items-center gap-2">
                <BookUser size={16} />
                <span className="text-sm">Address</span>
              </div>
              <span className="text-sm">33141 US</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileClock className="w-6 h-6" />
              Invoice History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4 justify-items-center items-center">
              {invoices.map((invoice, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 w-full">
                  <span className="text-sm">{invoice.date}</span>
                  <span className="text-sm">{invoice.amount}</span>
                  <div className="text-sm bg-green-200 rounded-full px-2 py-1 font-medium">
                    {invoice.status}
                  </div>
                  <span className="text-sm">{invoice.description}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default BillingPage