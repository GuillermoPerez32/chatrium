import AppSidebar from "@/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        {isMobile && <SidebarTrigger />}
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
