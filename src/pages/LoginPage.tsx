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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://placehold.co/600x400"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {t("signInMessage")}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-8"
            >
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
                      <div className="flex">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="inset-y-0 right-0 flex items-center px-2 text-gray-600"
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isPending}
                className="cursor-pointer"
              >
                {t("signIn")}
              </Button>
            </form>
          </Form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            {t("noAccountMessage")}
            <Link
              to={AppRoutes.REGISTER}
              className="font-semibold text-primary-600 hover:text-primary-500"
            >
              {t("signUp")}
            </Link>
          </p>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            {t("notMemberMessage")}
            <a
              href="#"
              className="font-semibold text-primary-600 hover:text-primary-500"
            >
              {t("startTrialMessage")}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
