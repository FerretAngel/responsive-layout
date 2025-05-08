import { ResponsiveLayout } from "responsive-layout-react";
import { AppHeader } from "./components/app.header";
import { AppNav } from "./components/app.nav";
import { AppAside } from "./components/app.aside";
import { AppMain } from "./components/app.main";
export interface AppProps {}

export const App = ({}: AppProps) => {
  return (
    <ResponsiveLayout
      className="text-gray-600 font-bold tracking-wider max-w-[2100px] mx-auto shadow-2xl"
      appNav={<AppNav className="w-full h-full bg-pink-50" />}
      navWidth="24rem"
      appAside={<AppAside className="w-full h-full bg-blue-50" />}
      asideWidth="18rem"
      appMain={
        <div className="w-full h-full  flex flex-col">
          <AppHeader className="bg-green-50" />
          <AppMain className="flex-1 bg-yellow-50" />
        </div>
      }
    />
  );
};
App.displayName = "App";
