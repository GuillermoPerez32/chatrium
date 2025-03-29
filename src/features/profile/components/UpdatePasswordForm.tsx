import DropDown from "@/components/DropDown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@/hooks";
import { z } from "zod";
import passwordValidator from "@/validators/passwordValidator";
import { useNavigate } from "react-router";
import { AppRoutes } from "@/constants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import FormLabel from "@/components/FormLabel";

const passwordUpateSchema = z
  .object({
    oldPassword: passwordValidator,
    newPassword: passwordValidator,
    confirmPassword: passwordValidator,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "The password don't match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: "The old passwaord and the new one are the same",
    path: ["newPassword"],
  });

const UpdatePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const form = useForm({
    schema: passwordUpateSchema,
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(AppRoutes.OTP_VERIFICATION);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((state) => !state);
  };

  return (
    <DropDown title={t("password")} subtitle={t("passwordSubtitle")}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("currentPassword")}</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        maxLength={25}
                        max={25}
                        min={6}
                        type={showPassword ? "text" : "password"}
                        placeholder={t("currentPasswordPlaceholder")}
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
                  {errors.oldPassword && (
                    <FormMessage>{errors.oldPassword.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("newPassword")}</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        maxLength={25}
                        max={25}
                        min={6}
                        type={showPassword ? "text" : "password"}
                        placeholder={t("newPasswordPlaceholder")}
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
                  {errors.newPassword && (
                    <FormMessage>{errors.newPassword.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("confirmNewPassword")}</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        maxLength={25}
                        max={25}
                        min={6}
                        type={showPassword ? "text" : "password"}
                        placeholder={t("confirmNewPasswordPlaceholder")}
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
                  {errors.confirmPassword && (
                    <FormMessage>{errors.confirmPassword.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full h-8 text-sm mt-2 bg-black text-white hover:bg-gray-800"
            >
              {t("updatePassword")}
            </Button>
          </div>
        </form>
      </Form>
    </DropDown>
  );
};

export default UpdatePasswordForm;
