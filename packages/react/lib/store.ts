import { create } from "zustand";

interface ResponsiveLayoutStore {
  openNav: boolean;
  openAside: boolean;
  setOpenNav: (openNav: boolean) => void;
  setOpenAside: (openAside: boolean) => void;
}

export const useResponsiveLayoutStore = create<ResponsiveLayoutStore>((set) => ({
  openNav: false,
  openAside: false,
  setOpenNav: (openNav) => set({ openNav }),
  setOpenAside: (openAside) => set({ openAside }),
}));

