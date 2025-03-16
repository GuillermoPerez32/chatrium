import { create } from "zustand";

interface AuthState {
  user?: string;
  setUser: (user: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
