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
import { useLogin } from "@/services/auth";
import { useAuthStore } from "@/stores";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
  company: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

const LoginPage = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useLogin();
  const { setUser } = useAuthStore();
  const form = useForm({
    schema: loginSchema,
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "",
    },
  });

  function onSubmit({ email, password }: z.infer<typeof loginSchema>) {
    mutateAsync({
      email,
      password,
    })
      .then((response) => {
        if (response.token) {
          setUser({
            email: form.getValues().email,
            token: response.token,
          });
          navigate(AppRoutes.DASHBOARD);
        } else {
          toast.error("Invalid Credentials");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  const togglePasswordVisibility = () => {
    setShowPassword((state) => !state);
  };

  return (
    <>
      <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        {t("signInMessage")}
      </h2>

      <div className="mt-10 w-full sm:mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("companyName")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("companyName")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("password")}</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage>
                    <p className="text-end text-sm/6 text-gray-500">
                      <Link
                        to={AppRoutes.RECOVER_PASSWORD}
                        className="font-semibold text-primary-600 hover:text-primary-500"
                      >
                        {t("forgotPasswordMessage")}
                      </Link>
                    </p>
                  </FormMessage>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer w-min self-center sm:px-20"
            >
              {t("signIn")}
            </Button>
          </form>
        </Form>

        <div className="mt-10 border-t border-gray-300"></div>

        <p className="mt-8 text-center text-sm/6 text-gray-500">
          <span>{t("noAccountMessage")} </span>
          <Link
            to={AppRoutes.REGISTER}
            className="font-semibold text-primary-600 hover:text-primary-500"
          >
            {t("signUp")}
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
