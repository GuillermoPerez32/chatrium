import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AppRoutes } from "@/constants";
import { useForm } from "@/hooks";
import { z } from "zod";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useState } from "react";
import FormLabel from "@/components/FormLabel";

const trialRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .regex(
      /^[a-zA-Z']+$/,
      "First name must only contain letters and apostrophes"
    ),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .regex(
      /^[a-zA-Z']+$/,
      "Last name must only contain letters and apostrophes"
    ),
  phone: z.string().min(10, "Invalid phone number"),
  company: z
    .string()
    .max(25)
    .regex(
      /^['a-zA-Z0-9\s]+$/,
      "Only must contain letters, numbers, and apostrophes"
    ),
  date: z.string(),
  time: z.string(),
});

const TrialRequestPage = () => {
  const { t } = useTranslation();
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

  const {
    formState: { errors },
  } = form;

  const [done, setDone] = useState(false);

  function onSubmit() {
    setDone(true);
    form.reset();
  }

  return done ? (
    <div className="text-center">
      <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-muted-foreground">
        {t("trialSentMessage")}
      </h2>
      <p className="text-muted-foreground">{t("trialSentMessage")}</p>
      <Link to={AppRoutes.HOME}>
        <Button className="mt-4" variant="link">
          Go back to home
        </Button>
      </Link>
    </div>
  ) : (
    <>
      <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-muted-foreground">
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
                  <FormMessage>{errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("firstName")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="firstName"
                      placeholder="Firstname"
                      onChange={(event) => {
                        const value = event.target.value.replace(
                          /[^a-zA-Z']+/g,
                          ""
                        );
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage>{errors.firstName?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("lastName")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="lastName"
                      placeholder="Lastname"
                      onChange={(event) => {
                        const value = event.target.value.replace(
                          /[^a-zA-Z']+/g,
                          ""
                        );
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage>{errors.lastName?.message}</FormMessage>
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
                  <FormMessage>{errors.phone?.message}</FormMessage>
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
                    <Input
                      {...field}
                      maxLength={25}
                      max={25}
                      type="text"
                      placeholder="Company"
                      onChange={(event) => {
                        const value = event.target.value.replace(
                          /[^'a-zA-Z0-9\s]/g,
                          ""
                        );
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage>{errors.company?.message}</FormMessage>
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
                    <FormMessage>{errors.date?.message}</FormMessage>
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
                    <FormMessage>{errors.time?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm/6 font-semibold shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
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
