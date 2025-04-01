import AppSidebar from "@/components/AppSideBar";
import AppTopBar from "@/components/AppTopBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen">
        <AppTopBar />
        <div className="bg-background size-full">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
