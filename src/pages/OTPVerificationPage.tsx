import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { AppRoutes } from "@/constants";
import { useForm } from "@/hooks";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
  otp: z.string(),
});

const OTPVerificationPage = () => {
  const [laoding, setLaoding] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const form = useForm({
    schema: loginSchema,
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit({ otp }: z.infer<typeof loginSchema>) {
    if (otp === "111111") {
      navigate(AppRoutes.DASHBOARD);
    } else {
      setError("Incorrect verification number");
    }
    form.reset();
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-4 text-2xl/9 font-bold tracking-tight text-gray-900">
        {t("otpTitle")}
      </h2>

      <p className="text-gray-500">{t("otpMessage")}</p>

      <div className="mt-4 w-full sm:mx-auto flex flex-col items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-center"
          >
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP
                      maxLength={6}
                      {...field}
                      value={field.value || ""}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSeparator />
                      </InputOTPGroup>
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && <p className="text-red-500 text-center">{error}</p>}

            <Button
              type="submit"
              className="cursor-pointer w-min self-center sm:px-20"
            >
              {t("send")}
            </Button>
          </form>
        </Form>

        <Button onClick={() => toast.success(t("otpMessage"))} variant="link">
          {t("resendOtp")}
        </Button>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
