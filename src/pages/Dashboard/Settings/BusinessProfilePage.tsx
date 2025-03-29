import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import DropDown from "@/components/DropDown";

// Generate predefined time range options
const generateTimeRangeOptions = () => {
  const ranges = [
    "06:00 - 10:00",
    "07:00 - 11:00",
    "08:00 - 12:00",
    "09:00 - 13:00",
    "10:00 - 14:00",
    "11:00 - 15:00",
    "12:00 - 16:00",
    "13:00 - 17:00",
    "14:00 - 18:00",
    "15:00 - 19:00",
    "16:00 - 20:00",
    "17:00 - 21:00",
    "18:00 - 22:00",
  ];
  return ranges;
};

type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

type BusinessHours = {
  [key in DayOfWeek]: string; // Each day stores a single string representing the time range
};

const BusinessProfilePage = () => {
  const { t } = useTranslation(); // Hook for translations
  const [is24Hours, setIs24Hours] = useState(false); // State for 24hrs/7 toggle
  const [businessHours, setBusinessHours] = useState<BusinessHours>({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });
  const timeRangeOptions = generateTimeRangeOptions(); // Predefined time range options

  const days: DayOfWeek[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  // Handle changes in time range selectors
  const handleRangeChange = (day: DayOfWeek, value: string) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: value,
    }));
  };

  return (
    <div className="p-8">
      <div className="flex flex-col gap-4">
        <DropDown
          title={t("businessInformation")}
          subtitle={t("businessInformationSubtitle")}
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("businessName")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("businessNamePlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("address")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("addressPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("phoneNumber")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("phoneNumberPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("email")}
              </label>
              <Input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("emailPlaceholder")}
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title={t("businessHours")}
          subtitle={t("businessHoursSubtitle")}
        >
          <div className="flex justify-between items-center mb-4">
            <span /> {/* Empty span to push the Switch to the right */}
            <div className="flex items-center gap-2">
              <Switch
                id="24hours-switch"
                checked={is24Hours}
                onCheckedChange={setIs24Hours}
              />
              <Label htmlFor="24hours-switch">{t("24hours7days")}</Label>
            </div>
          </div>
          {!is24Hours && (
            <div className="grid grid-cols-2 gap-3">
              {days.map((day) => (
                <div key={day}>
                  <label className="block text-xs font-medium text-gray-700">
                    {t(day)}
                  </label>
                  <select
                    value={businessHours[day]}
                    onChange={(e) => handleRangeChange(day, e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                  >
                    <option value="">{t("selectTimeRange")}</option>
                    {timeRangeOptions.map((range) => (
                      <option key={`${day}-${range}`} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}
        </DropDown>

        <DropDown
          title={t("automatedMessages")}
          subtitle={t("automatedMessagesSubtitle")}
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("openMessage")}
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("openMessagePlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("closedMessage")}
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("closedMessagePlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("afterHoursMessage")}
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("afterHoursMessagePlaceholder")}
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title={t("googleMyBusinessListing")}
          subtitle={t("googleMyBusinessListingSubtitle")}
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("googleMyBusinessUrl")}
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("googleMyBusinessUrlPlaceholder")}
              />
            </div>
          </div>
        </DropDown>

        <DropDown title={t("chatrium")} subtitle={t("chatriumSubtitle")}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("chatriumProfileUrl")}
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("chatriumProfileUrlPlaceholder")}
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title={t("socialProfile")}
          subtitle={t("socialProfileSubtitle")}
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("instagramUrl")}
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("instagramUrlPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("twitterUrl")}
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("twitterUrlPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("linkedinUrl")}
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("linkedinUrlPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("facebookUrl")}
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("facebookUrlPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("tiktokUrl")}
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("tiktokUrlPlaceholder")}
              />
            </div>
          </div>
        </DropDown>
      </div>
    </div>
  );
};

export default BusinessProfilePage;