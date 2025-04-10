import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import DropDown from "@/components/DropDown";
import CustomTimePicker from "@/components/ui/timepicker"; // Importa el nuevo componente
import dayjs, { Dayjs } from "dayjs";

type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

type Time = {
  hours: number | null;
  minutes: number | null;
};

type BusinessHours = {
  [key in DayOfWeek]: { open: Time; close: Time };
};

const BusinessProfilePage = () => {
  const { t } = useTranslation();
  const [is24Hours, setIs24Hours] = useState(false);
  const [businessHours, setBusinessHours] = useState<BusinessHours>({
    monday: {
      open: { hours: 9, minutes: 0 },
      close: { hours: 17, minutes: 0 },
    },
    tuesday: {
      open: { hours: 9, minutes: 0 },
      close: { hours: 17, minutes: 0 },
    },
    wednesday: {
      open: { hours: 9, minutes: 0 },
      close: { hours: 17, minutes: 0 },
    },
    thursday: {
      open: { hours: 9, minutes: 0 },
      close: { hours: 17, minutes: 0 },
    },
    friday: {
      open: { hours: 9, minutes: 0 },
      close: { hours: 17, minutes: 0 },
    },
    saturday: {
      open: { hours: null, minutes: null },
      close: { hours: null, minutes: null },
    },
    sunday: {
      open: { hours: null, minutes: null },
      close: { hours: null, minutes: null },
    },
  });

  const days: DayOfWeek[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  // Conversión de Time a Dayjs y viceversa
  const timeToDayjs = (time: Time): Dayjs | null => {
    if (time.hours === null || time.minutes === null) return null;
    return dayjs().hour(time.hours).minute(time.minutes).second(0);
  };

  const dayjsToTime = (dayjsTime: Dayjs | null): Time => {
    if (!dayjsTime) return { hours: null, minutes: null };
    return { hours: dayjsTime.hour(), minutes: dayjsTime.minute() };
  };

  const handleTimeChange = (
    day: DayOfWeek,
    type: "open" | "close",
    newTime: Dayjs | null
  ) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: dayjsToTime(newTime),
      },
    }));
  };

  const toggleTimeFormat = () => {
    setIs24Hours((prev) => !prev);
    if (!is24Hours) {
      const adjusted = { ...businessHours };
      days.forEach((day) => {
        if (adjusted[day].open.hours && adjusted[day].open.hours > 12) {
          adjusted[day].open.hours = 12;
        }
        if (adjusted[day].close.hours && adjusted[day].close.hours > 12) {
          adjusted[day].close.hours = 12;
        }
      });
      setBusinessHours(adjusted);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-full sm:max-w-5xl mx-auto bg-card shadow-md rounded-lg mt-10 sm:mt-20">
        <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
          {/* Business Information */}
          <DropDown
            title={t("businessInformation")}
            subtitle={t("businessInformationSubtitle")}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="business-name"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("businessName")}
                </Label>
                <input
                  id="business-name"
                  type="text"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("businessNamePlaceholder")}
                />
              </div>
              <div>
                <Label
                  htmlFor="address"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("address")}
                </Label>
                <input
                  id="address"
                  type="text"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("addressPlaceholder")}
                />
              </div>
              <div>
                <Label
                  htmlFor="phone-number"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("phoneNumber")}
                </Label>
                <input
                  id="phone-number"
                  type="text"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("phoneNumberPlaceholder")}
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("email")}
                </Label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("emailPlaceholder")}
                />
              </div>
            </div>
          </DropDown>

          {/* Business Hours */}
          <DropDown
            title={t("businessHours")}
            subtitle={t("businessHoursSubtitle")}
          >
            <div className="flex justify-between items-center mb-4">
              <span />
              <div className="flex items-center gap-2">
                <Switch
                  id="24hours-switch"
                  checked={is24Hours}
                  onCheckedChange={toggleTimeFormat}
                />
                <Label
                  htmlFor="24hours-switch"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("24-7")}
                </Label>
              </div>
            </div>
            {!is24Hours && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto">
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex flex-row items-center gap-2 w-full min-w-[250px]" // Añadido min-w para evitar compresión excesiva
                  >
                    <Label className="text-sm font-medium text-muted-foreground min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] shrink-0">
                      {t(day)}
                    </Label>
                    <div className="flex items-center space-x-2 flex-1">
                      <CustomTimePicker
                        value={timeToDayjs(businessHours[day].open)}
                        onChange={(newTime) =>
                          handleTimeChange(day, "open", newTime)
                        }
                      />
                      <span>-</span>
                      <CustomTimePicker
                        value={timeToDayjs(businessHours[day].close)}
                        onChange={(newTime) =>
                          handleTimeChange(day, "close", newTime)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </DropDown>

          {/* Automated Messages */}
          <DropDown
            title={t("automatedMessages")}
            subtitle={t("automatedMessagesSubtitle")}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="open-message"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("openMessage")}
                </Label>
                <textarea
                  id="open-message"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("openMessagePlaceholder")}
                />
              </div>
              <div>
                <Label
                  htmlFor="closed-message"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("closedMessage")}
                </Label>
                <textarea
                  id="closed-message"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("closedMessagePlaceholder")}
                />
              </div>
              <div>
                <Label
                  htmlFor="after-hours-message"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("afterHoursMessage")}
                </Label>
                <textarea
                  id="after-hours-message"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("afterHoursMessagePlaceholder")}
                />
              </div>
            </div>
          </DropDown>

          {/* Google My Business Listing */}
          <DropDown
            title={t("googleMyBusinessListing")}
            subtitle={t("googleMyBusinessListingSubtitle")}
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label
                  htmlFor="google-my-business-url"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("googleMyBusinessUrl")}
                </Label>
                <input
                  id="google-my-business-url"
                  type="url"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("googleMyBusinessUrlPlaceholder")}
                />
              </div>
            </div>
          </DropDown>

          {/* Chatrium */}
          <DropDown title={t("chatrium")} subtitle={t("chatriumSubtitle")}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label
                  htmlFor="chatrium-profile-url"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("chatriumProfileUrl")}
                </Label>
                <input
                  id="chatrium-profile-url"
                  type="url"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("chatriumProfileUrlPlaceholder")}
                />
              </div>
            </div>
          </DropDown>

          {/* Social Profile */}
          <DropDown
            title={t("socialProfile")}
            subtitle={t("socialProfileSubtitle")}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="instagram-url"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("instagramUrl")}
                </Label>
                <input
                  id="instagram-url"
                  type="url"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("instagramUrlPlaceholder")}
                />
              </div>
              <div>
                <Label
                  htmlFor="twitter-url"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("twitterUrl")}
                </Label>
                <input
                  id="twitter-url"
                  type="url"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("twitterUrlPlaceholder")}
                />
              </div>
              <div>
                <Label
                  htmlFor="linkedin-url"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("linkedinUrl")}
                </Label>
                <input
                  id="linkedin-url"
                  type="url"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("linkedinUrlPlaceholder")}
                />
              </div>
              <div>
                <Label
                  htmlFor="facebook-url"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("facebookUrl")}
                </Label>
                <input
                  id="facebook-url"
                  type="url"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("facebookUrlPlaceholder")}
                />
              </div>
              <div>
                <Label
                  htmlFor="tiktok-url"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {t("tiktokUrl")}
                </Label>
                <input
                  id="tiktok-url"
                  type="url"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder={t("tiktokUrlPlaceholder")}
                />
              </div>
            </div>
          </DropDown>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfilePage;
