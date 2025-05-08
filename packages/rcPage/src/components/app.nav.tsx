import { useResponsiveLayoutStore, cn } from "responsive-layout-react";
import { Icon } from "@iconify/react";
export interface AppNavProps {
  className?: string;
}

export const AppNav = ({ className }: AppNavProps) => {
  const toggleNav = useResponsiveLayoutStore((state) => state.toggleNav);
  return (
    <div className={cn(" grid place-items-center", className)}>
      <button
        className="absolute top-2 right-2 z-50 text-blue-500 text-2xl md:hidden"
        onClick={toggleNav}>
        <Icon icon="lucide:x" />
      </button>
      <h1>APP NAV</h1>
    </div>
  );
};
AppNav.displayName = "AppNav";
