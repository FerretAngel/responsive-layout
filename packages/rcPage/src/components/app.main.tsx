import { cn } from "responsive-layout-react";
export interface AppMainProps {
  className?: string;
}

export const AppMain = ({ className }: AppMainProps) => {
  return (
    <main className={cn("grid place-items-center", className)}>
      <h1>APP MAIN</h1>
    </main>
  );
};
AppMain.displayName = "AppMain";
