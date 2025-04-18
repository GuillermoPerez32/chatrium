import {
  ArrowLeft,
  Bell,
  LogOut,
  MessageSquare,
  Search,
  User,
} from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { useAuthStore } from "@/stores";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";

const AppTopBar = () => {
  const { t } = useTranslation();
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSubRoute = pathname.split("/").length > 3;

  const title = pathname
    .split("/")
    .pop()
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  const loggedInUser = { name: "John Doe", email: "john.doe@example.com" };

  return (
    <div className="flex items-center bg-sidebar shadow-md border-b py-2 px-4 sticky top-0 z-10">
      {/* Left section: Sidebar trigger, back arrow, and title */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        {isSubRoute && (
          <ArrowLeft
            className="w-6 h-6 text-muted-foreground cursor-pointer"
            onClick={() => navigate(-1)}
          />
        )}
        <h2 className="text-xl font-semibold text-muted-foreground">{title}</h2>
      </div>

      {/* Center section: Search bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center w-1/3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="pl-10 w-full border-border focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Right section: User actions */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Notifications */}
        <Button variant="ghost" className="relative">
          <Bell className="w-6 h-6 text-muted-foreground" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* Messages */}
        <Button variant="ghost" className="relative">
          <MessageSquare className="w-6 h-6 text-muted-foreground" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
        </Button>

        <ThemeToggle />

        {/* User profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="w-6 h-6 text-muted-foreground" />
              <span className="hidden md:inline text-muted-foreground">
                {loggedInUser.name}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem className="flex flex-col items-start">
              <span className="font-medium">{loggedInUser.name}</span>
              <span className="text-sm text-muted-foreground">
                {loggedInUser.email}
              </span>
            </DropdownMenuItem>

            {/* Logout */}
            <DropdownMenuItem
              className="text-destructive cursor-pointer"
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
