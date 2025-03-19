import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ChatPage, DashBoardPage, HomePage, LoginPage } from "@/pages";
import { useAuthStore } from "@/stores";
import AppRoutes from "@/constants/appRoutes";
import queryClient from "@/services/queryClient";
import { Toaster } from "@/components/ui/sonner";
import RegisterPage from "./pages/RegisterPage";
import RecoverPage from "./pages/RecoverPage";

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
              <Route path={AppRoutes.CHAT} element={<ChatPage />} />
              <Route path={AppRoutes.DASHBOARD} element={<DashBoardPage />} />
            </>
          ) : (
            <>
              <Route path={AppRoutes.HOME} element={<HomePage />} />
              <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
              <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
              <Route path={AppRoutes.RECOVER_PASSWORD} element={<RecoverPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
