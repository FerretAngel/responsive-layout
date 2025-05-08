import { cn, useResponsiveLayoutStore } from "responsive-layout-react";
import { Icon } from "@iconify/react";
export interface AppAsideProps {
  className?: string;
}

export const AppAside = ({ className }: AppAsideProps) => {
  const setOpenAside = useResponsiveLayoutStore((state) => state.setOpenAside);
  return (
    <div className={cn("grid place-items-center", className)}>
      <button
        className="absolute top-2 left-2 z-50 md:hidden text-blue-500 text-2xl"
        onClick={() => setOpenAside(false)}>
        <Icon icon="lucide:x" />
      </button>
      <h1>APP ASIDE</h1>
    </div>
  );
};
AppAside.displayName = "AppAside";
