import { Input } from "@/components/ui/input";
import DropDown from "@/components/DropDown";

const BusinessProfilePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Business Profile</h1>

      <div className="flex flex-col gap-4">
        <DropDown
          title="Business Information"
          subtitle="Set your business name, address, number etc."
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Business Name
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Address
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Phone Number
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title="Business Hours"
          subtitle="Set the days and hours that your business is open"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Monday
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Tuesday
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Wednesday
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Thursday
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Friday
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Saturday
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Sunday
              </label>
              <Input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title="Automated Messages"
          subtitle="Configure your automated messages for After Hours, In Hours, or Custom events."
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Open Message
              </label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Closed Message
              </label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                After Hours Message
              </label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs" />
            </div>
          </div>
        </DropDown>

        <DropDown title="Media" subtitle="Add media files">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Upload Business Image
              </label>
              <Input
                type="file"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Upload Business Video
              </label>
              <Input
                type="file"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title="Google My Business Listing"
          subtitle="Add Google My Business description, categories etc."
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Google My Business URL
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title="Facebook"
          subtitle="Add facebook description and categories"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Facebook Page URL
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
          </div>
        </DropDown>

        <DropDown title="Chatrium" subtitle="Add url and description">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Chatrium Profile URL
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
          </div>
        </DropDown>

        <DropDown
          title="Social Profile"
          subtitle="Add your social media accounts"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Instagram URL
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Twitter URL
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                LinkedIn URL
              </label>
              <Input
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
              />
            </div>
          </div>
        </DropDown>
      </div>
    </div>
  );
};

export default BusinessProfilePage;
