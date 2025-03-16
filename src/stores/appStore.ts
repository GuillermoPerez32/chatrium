import { create } from "zustand";

interface AppState {
  activeChat?: string;
  setActiveChat: (chatId: string) => void;
}

const useAppStore = create<AppState>((set) => ({
  setActiveChat: (chatId) => set({ activeChat: chatId }),
}));

export default useAppStore;
