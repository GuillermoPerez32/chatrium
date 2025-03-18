import { create } from "zustand";

interface UserData {
  email: string;
  token: string;
}

interface AuthState {
  user?: UserData;
  setUser: (user: UserData) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
