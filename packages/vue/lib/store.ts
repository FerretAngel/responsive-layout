import { defineStore } from "pinia";

export const useResponsiveLayoutStore = defineStore("responsiveLayout", {
  state: () => ({
    openNav: false,
    openAside: false,
  }),
  actions: {
    setOpenNav(openNav: boolean) {
      this.openNav = openNav;
    },
    setOpenAside(openAside: boolean) {
      this.openAside = openAside;
    },
    toggleNav() {
      if (
        !this.openNav &&
        this.openAside &&
        typeof window !== "undefined" &&
        window.innerWidth <= 1024
      ) {
        this.openNav = true;
        this.openAside = false;
      } else {
        this.openNav = !this.openNav;
      }
    },
    toggleAside() {
      if (
        !this.openAside &&
        this.openNav &&
        typeof window !== "undefined" &&
        window.innerWidth <= 1024
      ) {
        this.openAside = true;
        this.openNav = false;
      } else {
        this.openAside = !this.openAside;
      }
    }
  },
});
