import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const BusinessProfilePage = () => {
  const [businessInfoOpen, setBusinessInfoOpen] = useState(false);
  const [businessHoursOpen, setBusinessHoursOpen] = useState(false);
  const [automatedMessagesOpen, setAutomatedMessagesOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [googleMyBusinessOpen, setGoogleMyBusinessOpen] = useState(false);
  const [facebookOpen, setFacebookOpen] = useState(false);
  const [salescaptainOpen, setSalescaptainOpen] = useState(false);
  const [socialProfileOpen, setSocialProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-8">Business Profile</h1>

      {/* Business Information Dropdown */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer p-3 bg-gray-100 rounded-t-md"
          onClick={() => setBusinessInfoOpen(!businessInfoOpen)}
        >
          <h2 className="text-sm font-medium">Business Information</h2>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              businessInfoOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {businessInfoOpen && (
          <div className="p-3 bg-white rounded-b-md border border-t-0">
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
          </div>
        )}
      </div>

      {/* Business Hours Dropdown */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer p-3 bg-gray-100 rounded-t-md"
          onClick={() => setBusinessHoursOpen(!businessHoursOpen)}
        >
          <h2 className="text-sm font-medium">Business Hours</h2>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              businessHoursOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {businessHoursOpen && (
          <div className="p-3 bg-white rounded-b-md border border-t-0">
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
          </div>
        )}
      </div>

      {/* Automated Messages Dropdown */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer p-3 bg-gray-100 rounded-t-md"
          onClick={() => setAutomatedMessagesOpen(!automatedMessagesOpen)}
        >
          <h2 className="text-sm font-medium">Automated Messages</h2>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              automatedMessagesOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {automatedMessagesOpen && (
          <div className="p-3 bg-white rounded-b-md border border-t-0">
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
          </div>
        )}
      </div>

      {/* Media Dropdown */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer p-3 bg-gray-100 rounded-t-md"
          onClick={() => setMediaOpen(!mediaOpen)}
        >
          <h2 className="text-sm font-medium">Media</h2>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              mediaOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {mediaOpen && (
          <div className="p-3 bg-white rounded-b-md border border-t-0">
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
          </div>
        )}
      </div>

      {/* Google My Business Listing Dropdown */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer p-3 bg-gray-100 rounded-t-md"
          onClick={() => setGoogleMyBusinessOpen(!googleMyBusinessOpen)}
        >
          <h2 className="text-sm font-medium">Google My Business Listing</h2>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              googleMyBusinessOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {googleMyBusinessOpen && (
          <div className="p-3 bg-white rounded-b-md border border-t-0">
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
          </div>
        )}
      </div>

      {/* Facebook Dropdown */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer p-3 bg-gray-100 rounded-t-md"
          onClick={() => setFacebookOpen(!facebookOpen)}
        >
          <h2 className="text-sm font-medium">Facebook</h2>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              facebookOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {facebookOpen && (
          <div className="p-3 bg-white rounded-b-md border border-t-0">
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
          </div>
        )}
      </div>

      {/* Salescaptain Dropdown */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer p-3 bg-gray-100 rounded-t-md"
          onClick={() => setSalescaptainOpen(!salescaptainOpen)}
        >
          <h2 className="text-sm font-medium">Salescaptain</h2>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              salescaptainOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {salescaptainOpen && (
          <div className="p-3 bg-white rounded-b-md border border-t-0">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Salescaptain Profile URL
                </label>
                <Input
                  type="url"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Social Profile Dropdown */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer p-3 bg-gray-100 rounded-t-md"
          onClick={() => setSocialProfileOpen(!socialProfileOpen)}
        >
          <h2 className="text-sm font-medium">Social Profile</h2>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              socialProfileOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {socialProfileOpen && (
          <div className="p-3 bg-white rounded-b-md border border-t-0">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessProfilePage;
