import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  AccountPage,
  AllUsersPage,
  AutoAssignPage,
  BillingPage,
  BrandingPage,
  BusinessProfilePage,
  CallsPage,
  DashboardOverviewPage,
  HomePage,
  IntegrationPage,
  LoginPage,
  ManageUsersPage,
  ProfilePage,
  QRCodePage,
  TeamsPage,
  WebsiteToolkitPage,
} from "@/pages";
import { useAuthStore } from "@/stores";
import AppRoutes from "@/constants/appRoutes";
import queryClient from "@/services/queryClient";
import { Toaster } from "@/components/ui/sonner";
import RegisterPage from "@/pages/RegisterPage";
import RecoverPage from "./pages/RecoverPage";
import { AuthLayout, DashboardLayout } from "@/layouts";

function App() {
  const { user } = useAuthStore();
  return (
    <div className="bg-primary-50">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <BrowserRouter>
          <Routes>
            {user ? (
              <>
                <Route path={AppRoutes.HOME} element={<HomePage />} />
                <Route element={<DashboardLayout />}>
                  <Route
                    path={AppRoutes.DASHBOARD}
                    element={<DashboardOverviewPage />}
                  />
                  <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
                  <Route path={AppRoutes.ACCOUNT} element={<AccountPage />} />
                  <Route path={AppRoutes.BILLING} element={<BillingPage />} />
                  <Route path={AppRoutes.BRANDING} element={<BrandingPage />} />
                  <Route
                    path={AppRoutes.BUSINESS_PROFILE}
                    element={<BusinessProfilePage />}
                  />
                  <Route path={AppRoutes.CALLS} element={<CallsPage />} />
                  <Route
                    path={AppRoutes.INTEGRATION}
                    element={<IntegrationPage />}
                  />
                  <Route
                    path={AppRoutes.MANAGE_USERS}
                    element={<ManageUsersPage />}
                  />
                  <Route
                    path={AppRoutes.MANAGE_USERS__ALL_USERS}
                    element={<AllUsersPage />}
                  />
                  <Route
                    path={AppRoutes.MANAGE_USERS__TEAMS}
                    element={<TeamsPage />}
                  />
                  <Route
                    path={AppRoutes.MANAGE_USERS__AUTO_ASSIGN}
                    element={<AutoAssignPage />}
                  />
                  <Route path={AppRoutes.QR_CODE} element={<QRCodePage />} />
                  <Route
                    path={AppRoutes.WEBSITE_TOOLKIT}
                    element={<WebsiteToolkitPage />}
                  />
                </Route>
              </>
            ) : (
              <>
                <Route path={AppRoutes.HOME} element={<HomePage />} />
                <Route element={<AuthLayout />}>
                  <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
                  <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
                  <Route
                    path={AppRoutes.RECOVER_PASSWORD}
                    element={<RecoverPage />}
                  />
                </Route>
              </>
            )}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
