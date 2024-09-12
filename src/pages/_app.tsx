import MainLayout from "@/components/layout/MainLayout";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { createContext, useState } from "react";
// 创建一个全局上下文示例
export const UserContext = createContext<{
  user: any;
  setUser: (user: any) => void;
}>({
  user: null,
  setUser: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || MainLayout;
  const [user, setUser] = useState<any>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
