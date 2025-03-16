import { BrowserRouter, Route, Routes } from "react-router";
import { ChatPage, HomePage, LoginPage } from "@/pages";
import { useAuthStore } from "@/stores";
import AppRoutes from "./constants/appRoutes";

function App() {
  const { user } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path={AppRoutes.HOME} element={<ChatPage />} />
        ) : (
          <>
            <Route path={AppRoutes.HOME} element={<HomePage />} />
            <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
