import {
  ArrowLeft,
  Bell,
  LogOut,
  MessageSquare,
  Search,
  User,
} from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar"; // Assuming this is from your UI library
import { useAuthStore } from "@/stores";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button"; // Assuming you have this from Shadcn UI
import { Input } from "@/components/ui/input"; // Assuming you have this from Shadcn UI
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming you have these from Shadcn UI
import { useTranslation } from "react-i18next";

const AppTopBar = () => {
  const { t } = useTranslation(); // Hook for translations
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSubRoute = pathname.split("/").length > 3;

  const title = pathname
    .split("/")
    .pop()
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  // Mock logged-in user data (replace with real data from your auth store if available)
  const loggedInUser = { name: "John Doe", email: "john.doe@example.com" };

  return (
    <div className="flex items-center bg-sidebar shadow-md border-b py-2 px-4 relative top-0 z-10">
      {/* Left section: Sidebar trigger, back arrow, and title */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        {isSubRoute && (
          <ArrowLeft
            className="w-6 h-6 text-gray-600 cursor-pointer"
            onClick={() => navigate(-1)}
          />
        )}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      {/* Center section: Search bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center w-1/3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="pl-10 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Right section: User actions */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Notifications */}
        <Button variant="ghost" className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* Messages */}
        <Button variant="ghost" className="relative">
          <MessageSquare className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
        </Button>

        {/* User profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="w-6 h-6 text-gray-600" />
              <span className="hidden md:inline text-gray-700">
                {loggedInUser.name}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem className="flex flex-col items-start">
              <span className="font-medium">{loggedInUser.name}</span>
              <span className="text-sm text-gray-500">
                {loggedInUser.email}
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>{t("profile")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>{t("settings")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600 cursor-pointer"
              onClick={() => {
                setUser(undefined);
                navigate("/");
              }}
            >
              <LogOut className="w-4 h-4 mr-2" />
              <span>{t("logout")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AppTopBar;
