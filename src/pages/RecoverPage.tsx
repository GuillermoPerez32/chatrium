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

const recoverPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const RecoverPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const form = useForm({
    schema: recoverPasswordSchema,
    defaultValues: {
      email: "",
    },
  });

  function onSubmit({ email }: z.infer<typeof recoverPasswordSchema>) {
    // Handle password recovery logic here
    console.log("Email submitted:", email); // Usar el valor de email
    toast.success(`Password recovery email sent to ${email}`);
    navigate(AppRoutes.LOGIN);
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://placehold.co/600x400"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          {t("recoverMessage")}
        </h2>
      </div>

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
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              {t("recoverPass")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RecoverPage;
