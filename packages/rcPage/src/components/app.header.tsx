import { cn, useResponsiveLayoutStore } from "responsive-layout-react";
import { Icon } from "@iconify/react";
export interface AppHeaderProps {
  className?: string;
}

export const AppHeader = ({ className }: AppHeaderProps) => {
  const openNav = useResponsiveLayoutStore((state) => state.openNav);
  const openAside = useResponsiveLayoutStore((state) => state.openAside);
  const setOpenAside = useResponsiveLayoutStore((state) => state.setOpenAside);
  const setOpenNav = useResponsiveLayoutStore((state) => state.setOpenNav);
  return (
    <header className={cn("flex items-center justify-between p-2", className)}>
      <button
        className="text-blue-500 text-2xl"
        onClick={() => {
          if (
            !openNav &&
            openAside &&
            typeof window !== "undefined" &&
            window.innerWidth <= 1024
          ) {
            setOpenNav(true);
            setOpenAside(false);
          } else {
            setOpenNav(!openNav);
          }
        }}>
        <Icon
          icon={openNav ? "lucide:panel-right-open" : "lucide:panel-left-open"}
        />
      </button>
      <h1>APP HEADER</h1>
      <button
        className="text-blue-500 text-2xl"
        onClick={() => {
          if (
            !openAside &&
            openNav &&
            typeof window !== "undefined" &&
            window.innerWidth <= 1024
          ) {
            setOpenAside(true);
            setOpenNav(false);
          } else {
            setOpenAside(!openAside);
          }
        }}>
        <Icon
          icon={
            openAside ? "lucide:panel-left-open" : "lucide:panel-right-open"
          }
        />
      </button>
    </header>
  );
};
AppHeader.displayName = "AppHeader";
