import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  AllConversationsPage,
  AllUsersPage,
  AssignedPage,
  AutoAssignPage,
  BillingPage,
  BrandingPage,
  BusinessProfilePage,
  DashboardOverviewPage,
  HomePage,
  IntegrationPage,
  LoginPage,
  ContactsPage,
  ManageUsersPage,
  OTPVerificationPage,
  ProfilePage,
  QRCodePage,
  TeamsPage,
  TrialRequestPage,
  UnassignedPage,
  WebsiteToolkitPage,
} from "@/pages";
import { useAuthStore } from "@/stores";
import AppRoutes from "@/constants/appRoutes";
import queryClient from "@/services/queryClient";
import { Toaster } from "@/components/ui/sonner";
import RecoverPage from "./pages/Auth/RecoverPage";
import { AuthLayout, DashboardLayout } from "@/layouts";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/theme/ThemeProvider";

function App() {
  const { user } = useAuthStore();
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="bg-background">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <BrowserRouter>
              <Routes>
                <Route element={<AuthLayout />}>
                  <Route
                    path={AppRoutes.OTP_VERIFICATION}
                    element={<OTPVerificationPage />}
                  />
                </Route>
                {user ? (
                  <>
                    <Route path={AppRoutes.HOME} element={<HomePage />} />
                    <Route element={<DashboardLayout />}>
                      <Route
                        path={AppRoutes.DASHBOARD}
                        element={<DashboardOverviewPage />}
                      />
                      <Route
                        path={AppRoutes.ALL_CONVERSATIONS}
                        element={<AllConversationsPage />}
                      />
                      <Route
                        path={AppRoutes.ASSIGNED}
                        element={<AssignedPage />}
                      />
                      <Route
                        path={AppRoutes.UNASSIGNED}
                        element={<UnassignedPage />}
                      />
                      <Route
                        path={AppRoutes.CONTACTS}
                        element={<ContactsPage />}
                      />
                      <Route
                        path={AppRoutes.PROFILE}
                        element={<ProfilePage />}
                      />
                      <Route
                        path={AppRoutes.BILLING}
                        element={<BillingPage />}
                      />
                      <Route
                        path={AppRoutes.BRANDING}
                        element={<BrandingPage />}
                      />
                      <Route
                        path={AppRoutes.BUSINESS_PROFILE}
                        element={<BusinessProfilePage />}
                      />
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
                      <Route
                        path={AppRoutes.QR_CODE}
                        element={<QRCodePage />}
                      />
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
                      <Route
                        path={AppRoutes.RECOVER_PASSWORD}
                        element={<RecoverPage />}
                      />
                      <Route
                        path={AppRoutes.TRIAL_REQUEST}
                        element={<TrialRequestPage />}
                      />
                    </Route>
                  </>
                )}
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
