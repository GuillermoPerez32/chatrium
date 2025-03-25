import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AppRoutes } from "@/constants";
import { useForm } from "@/hooks";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import moment from "moment";

const trialRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  company: z.string().min(1, "Company name is required"),
  date: z.string(),
  time: z.string(),
});

const TrialRequestPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const form = useForm({
    schema: trialRequestSchema,
    defaultValues: {
      email: "",
      phone: "",
      company: "",
      date: moment().format("LLL"),
      time: "",
    },
  });

  function onSubmit(data: z.infer<typeof trialRequestSchema>) {
    console.log("Trial request submitted:", data);
    toast.success(`Trial request submitted successfully!`);
    navigate(AppRoutes.HOME);
  }

  return (
    <>
      <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        {t("trialRequestMessage")}
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("phone")}</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("company")}</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Company" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>{t("date")}</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>{t("time")}</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              {t("submitRequest")}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default TrialRequestPage;
