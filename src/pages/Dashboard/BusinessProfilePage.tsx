import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import DropDown from "@/components/DropDown";

const BusinessProfilePage = () => {
  const { t } = useTranslation(); // Hook para traducciones

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
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("monday")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("mondayPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("tuesday")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("tuesdayPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("wednesday")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("wednesdayPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("thursday")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("thursdayPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("friday")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("fridayPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("saturday")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("saturdayPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t("sunday")}
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                placeholder={t("sundayPlaceholder")}
              />
            </div>
          </div>
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
