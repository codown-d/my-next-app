import MainLayout from "@/components/layout/MainLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { Suspense, lazy } from "react";
import { appWithTranslation } from "next-i18next";

export const UserContext = createContext<{
  user: any;
  setUser: (user: any) => void;
}>({
  user: null,
  setUser: () => {},
});
export const GlobalContext = createContext({});
function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || MainLayout;
  const [user, setUser] = useState<any>(null);
  const [state, setState] = useState("initial state");
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </GlobalContext.Provider>
  );
}

export default appWithTranslation(MyApp);
