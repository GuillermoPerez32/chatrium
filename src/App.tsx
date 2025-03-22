import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  AccountPage,
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
  TrustPage,
  WebsiteToolkitPage,
} from "@/pages";
import { useAuthStore } from "@/stores";
import AppRoutes from "@/constants/appRoutes";
import queryClient from "@/services/queryClient";
import { Toaster } from "@/components/ui/sonner";
import RegisterPage from "@/pages/RegisterPage";
import RecoverPage from "./pages/RecoverPage";
import { DashboardLayout } from "@/layouts";

function App() {
  const { user } = useAuthStore();
  return (
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
                <Route path={AppRoutes.QR_CODE} element={<QRCodePage />} />
                <Route path={AppRoutes.TRUST} element={<TrustPage />} />
                <Route
                  path={AppRoutes.WEBSITE_TOOLKIT}
                  element={<WebsiteToolkitPage />}
                />
              </Route>
            </>
          ) : (
            <>
              <Route path={AppRoutes.HOME} element={<HomePage />} />
              <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
              <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
              <Route
                path={AppRoutes.RECOVER_PASSWORD}
                element={<RecoverPage />}
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
