import { ArrowLeft, LogOut } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { useAuthStore } from "@/stores";
import { useLocation, useNavigate } from "react-router";

const AppTopBar = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSubRoute = pathname.split("/").length > 3;

  const title = pathname
    .split("/")
    .pop()
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="flex items-center bg-sidebar border-b py-2 px-2 sticky top-0 z-10">
      <SidebarTrigger />

      {isSubRoute && <ArrowLeft onClick={() => navigate(-1)} />}

      <h2 className="text-xl ml-4 font-semibold">{title}</h2>

      <LogOut
        onClick={() => {
          setUser(undefined);
          navigate("/");
        }}
        className="size-4 ml-auto"
      />
    </div>
  );
};

export default AppTopBar;
