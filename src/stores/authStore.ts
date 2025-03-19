import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserData {
  email: string;
  token: string;
}

interface AuthState {
  user?: UserData;
  setUser: (user?: UserData) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
