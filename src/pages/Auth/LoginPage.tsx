import FormLabel from "@/components/FormLabel";
import FormMessage from "@/components/FormMessage";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AppRoutes } from "@/constants";
import { useForm } from "@/hooks";
import { useLogin } from "@/services/auth";
import { useAuthStore } from "@/stores";
import companyValidator from "@/validators/companyValidator";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
  company: companyValidator,
  email: z.string().email(),
  password: z.string(),
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
      company: "",
      email: "",
      password: "",
    },
  });

  const {
    formState: { errors },
    setError,
  } = form;

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
          navigate(AppRoutes.OTP_VERIFICATION);
        } else {
          toast.error("Invalid Credentials");
        }
      })
      .catch(() => {
        form.reset();
        setError("password", {
          message: t("signInError"),
        });
      });
  }

  const togglePasswordVisibility = () => {
    setShowPassword((state) => !state);
  };

  return (
    <>
      <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-muted-foreground">
        {t("signInMessage")}
      </h2>

      <div className="mt-4 w-full sm:mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("companyName")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      maxLength={20}
                      max={20}
                      placeholder={t("companyName")}
                      onChange={(event) => {
                        const value = event.target.value.replace(
                          /^\s+|[^'a-zA-Z0-9 _@-]/g,
                          ""
                        );
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
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
                    <Input placeholder="Email" {...field} />
                  </FormControl>
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
                        maxLength={25}
                        max={25}
                        min={6}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </FormControl>
                  {Object.keys(errors).length > 0 && (
                    <FormMessage>{t("signInError")}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="flex" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Link
              to={AppRoutes.RECOVER_PASSWORD}
              className="font-semibold text-primary-600 hover:text-primary-500 text-end"
            >
              {t("forgotPasswordMessage")}
            </Link>

            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer w-min self-center sm:px-20"
            >
              {t("signIn")}
            </Button>
          </form>
        </Form>

        <div className="mt-10 border-t border-border"></div>

        <p className="mt-8 text-center text-sm/6 text-muted-foreground">
          <span>{t("noAccountMessage")} </span>
          <Link
            to={AppRoutes.TRIAL_REQUEST}
            className="font-semibold text-primary-600 hover:text-primary-500"
          >
            {t("startTrialMessage")}
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
