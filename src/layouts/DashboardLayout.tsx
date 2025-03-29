import AppSidebar from "@/components/AppSideBar";
import AppTopBar from "@/components/AppTopBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen overflow-hidden">
        <AppTopBar />
        <div className="bg-primary-50 size-full">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
