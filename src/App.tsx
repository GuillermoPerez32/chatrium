import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { DashboardOverviewPage, HomePage, LoginPage } from "@/pages";
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
