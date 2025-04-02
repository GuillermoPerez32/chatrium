import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import DropDown from "@/components/DropDown";

type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

type BusinessHours = {
  [key in DayOfWeek]: { open: string; close: string }; // Horarios como HH:MM
};

// Componente personalizado para seleccionar tiempo
const CustomTimePicker: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generar opciones de horas y minutos
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
  const minutes = ["00", "15", "30", "45"]; // Intervalos de 15 minutos

  const handleSelect = (hour: string, minute: string) => {
    const newTime = `${hour}:${minute}`;
    onChange(newTime);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onClick={() => setIsOpen(!isOpen)}
        readOnly
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm cursor-pointer"
        placeholder="HH:MM"
      />
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          <div className="grid grid-cols-4 gap-1 p-2">
            {hours.map((hour) =>
              minutes.map((minute) => (
                <button
                  key={`${hour}:${minute}`}
                  onClick={() => handleSelect(hour, minute)}
                  className="p-1 text-sm hover:bg-indigo-100 rounded"
                >
                  {`${hour}:${minute}`}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const BusinessProfilePage = () => {
  const { t } = useTranslation();
  const [is24Hours, setIs24Hours] = useState(false);
  const [businessHours, setBusinessHours] = useState<BusinessHours>({
    monday: { open: "09:00", close: "17:00" },
    tuesday: { open: "09:00", close: "17:00" },
    wednesday: { open: "09:00", close: "17:00" },
    thursday: { open: "09:00", close: "17:00" },
    friday: { open: "09:00", close: "17:00" },
    saturday: { open: "", close: "" },
    sunday: { open: "", close: "" },
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

  // Manejar cambios en los pickers de tiempo
  const handleTimeChange = (
    day: DayOfWeek,
    type: "open" | "close",
    value: string
  ) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: value,
      },
    }));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <div className="flex flex-col gap-6">
        <DropDown
          title={t("businessInformation")}
          subtitle={t("businessInformationSubtitle")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="business-name"
                className="text-sm font-medium text-gray-700"
              >
                {t("businessName")}
              </Label>
              <input
                id="business-name"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("businessNamePlaceholder")}
              />
            </div>
            <div>
              <Label
                htmlFor="address"
                className="text-sm font-medium text-gray-700"
              >
                {t("address")}
              </Label>
              <input
                id="address"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("addressPlaceholder")}
              />
            </div>
            <div>
              <Label
                htmlFor="phone-number"
                className="text-sm font-medium text-gray-700"
              >
                {t("phoneNumber")}
              </Label>
              <input
                id="phone-number"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("phoneNumberPlaceholder")}
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                {t("email")}
              </Label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
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
            <span />
            <div className="flex items-center gap-2">
              <Switch
                id="24hours-switch"
                checked={is24Hours}
                onCheckedChange={setIs24Hours}
              />
              <Label
                htmlFor="24hours-switch"
                className="text-sm font-medium text-gray-700"
              >
                {t("24hours7days")}
              </Label>
            </div>
          </div>
          {!is24Hours && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {days.map((day) => (
                <div key={day} className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    {t(day)}
                  </Label>
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <Label
                        htmlFor={`${day}-open`}
                        className="text-xs font-medium text-gray-600"
                      >
                        {t("openTime")}
                      </Label>
                      <CustomTimePicker
                        value={businessHours[day].open}
                        onChange={(value) => handleTimeChange(day, "open", value)}
                      />
                    </div>
                    <div className="w-1/2">
                      <Label
                        htmlFor={`${day}-close`}
                        className="text-xs font-medium text-gray-600"
                      >
                        {t("closeTime")}
                      </Label>
                      <CustomTimePicker
                        value={businessHours[day].close}
                        onChange={(value) => handleTimeChange(day, "close", value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </DropDown>

        <DropDown
          title={t("automatedMessages")}
          subtitle={t("automatedMessagesSubtitle")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="open-message"
                className="text-sm font-medium text-gray-700"
              >
                {t("openMessage")}
              </Label>
              <textarea
                id="open-message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("openMessagePlaceholder")}
              />
            </div>
            <div>
              <Label
                htmlFor="closed-message"
                className="text-sm font-medium text-gray-700"
              >
                {t("closedMessage")}
              </Label>
              <textarea
                id="closed-message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("closedMessagePlaceholder")}
              />
            </div>
            <div>
              <Label
                htmlFor="after-hours-message"
                className="text-sm font-medium text-gray-700"
              >
                {t("afterHoursMessage")}
              </Label>
              <textarea
                id="after-hours-message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("afterHoursMessagePlaceholder")}
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title={t("googleMyBusinessListing")}
          subtitle={t("googleMyBusinessListingSubtitle")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="google-my-business-url"
                className="text-sm font-medium text-gray-700"
              >
                {t("googleMyBusinessUrl")}
              </Label>
              <input
                id="google-my-business-url"
                type="url"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("googleMyBusinessUrlPlaceholder")}
              />
            </div>
          </div>
        </DropDown>

        <DropDown title={t("chatrium")} subtitle={t("chatriumSubtitle")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="chatrium-profile-url"
                className="text-sm font-medium text-gray-700"
              >
                {t("chatriumProfileUrl")}
              </Label>
              <input
                id="chatrium-profile-url"
                type="url"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("chatriumProfileUrlPlaceholder")}
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title={t("socialProfile")}
          subtitle={t("socialProfileSubtitle")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="instagram-url"
                className="text-sm font-medium text-gray-700"
              >
                {t("instagramUrl")}
              </Label>
              <input
                id="instagram-url"
                type="url"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("instagramUrlPlaceholder")}
              />
            </div>
            <div>
              <Label
                htmlFor="twitter-url"
                className="text-sm font-medium text-gray-700"
              >
                {t("twitterUrl")}
              </Label>
              <input
                id="twitter-url"
                type="url"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("twitterUrlPlaceholder")}
              />
            </div>
            <div>
              <Label
                htmlFor="linkedin-url"
                className="text-sm font-medium text-gray-700"
              >
                {t("linkedinUrl")}
              </Label>
              <input
                id="linkedin-url"
                type="url"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("linkedinUrlPlaceholder")}
              />
            </div>
            <div>
              <Label
                htmlFor="facebook-url"
                className="text-sm font-medium text-gray-700"
              >
                {t("facebookUrl")}
              </Label>
              <input
                id="facebook-url"
                type="url"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder={t("facebookUrlPlaceholder")}
              />
            </div>
            <div>
              <Label
                htmlFor="tiktok-url"
                className="text-sm font-medium text-gray-700"
              >
                {t("tiktokUrl")}
              </Label>
              <input
                id="tiktok-url"
                type="url"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
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