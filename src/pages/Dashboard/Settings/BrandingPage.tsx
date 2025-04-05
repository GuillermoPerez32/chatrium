import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

const BrandingPage = () => {
  const { t } = useTranslation(); // Hook para traducciones

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{t("subscriptionDetails")}</h1>
        <Button>{t("save")}</Button>
      </div>

      <Separator className="my-4" />

      <div className="flex items-center gap-4">
        <div>
          <p className="font-bold">{t("preferredDashboardName")}</p>
          <p className="text-xs text-muted-foreground">
            {t("preferredDashboardNameSubtitle")}
          </p>
        </div>
        <Input
          className="w-5xs"
          placeholder={t("preferredDashboardNamePlaceholder")}
        />
      </div>

      <p className="font-bold mt-8">{t("emailAndLandingPageHeaders")}</p>

      <div className="mt-20">
        <div className="flex flex-col gap-4 items-center md:flex-row md:gap-20">
          <div>
            <p>{t("logoLabel")}</p>
            <p className="text-xs text-muted-foreground">{t("logoSizeHint")}</p>
          </div>
          <div className="flex gap-2">
            <Button>{t("upload")}</Button>
            <Button>{t("remove")}</Button>
          </div>
          <div>
            <p>{t("headerColorLabel")}</p>
            <p>{t("headerTextLabel")}</p>
          </div>
          <div>
            <RadioGroup defaultValue="light">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="light" id="light" />
                <label htmlFor="light">{t("colorWhite")}</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="dark" id="dark" />
                <label htmlFor="dark">{t("colorBlack")}</label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingPage;
