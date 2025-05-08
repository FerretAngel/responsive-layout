import { create } from "zustand";

interface ResponsiveLayoutStore {
  openNav: boolean;
  openAside: boolean;
  setOpenNav: (openNav: boolean) => void;
  setOpenAside: (openAside: boolean) => void;
  toggleNav: () => void;
  toggleAside: () => void;
}

export const useResponsiveLayoutStore = create<ResponsiveLayoutStore>((set, get) => ({
  openNav: false,
  openAside: false,
  setOpenNav: (openNav) => set({ openNav }),
  setOpenAside: (openAside) => set({ openAside }),
  toggleNav: () => {
    const { openNav, openAside } = get();
    if (!openNav && openAside && typeof window !== "undefined" && window.innerWidth <= 1024) {
      set({ openNav: true, openAside: false });
    } else {
      set({ openNav: !openNav });
    }
  },
  toggleAside: () => {
    const { openNav, openAside } = get();
    if (!openAside && openNav && typeof window !== "undefined" && window.innerWidth <= 1024) {
      set({ openAside: true, openNav: false });
    } else {
      set({ openAside: !openAside });
    }
  },
}));

