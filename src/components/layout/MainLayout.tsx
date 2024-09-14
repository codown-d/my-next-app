import Head from "next/head";
import styles from "./MainLayout.module.css";
import { GlobalProvider } from "@/hooks/GlobalContext";
import Header from "../ui/header";
import Footer from "../ui/footer";

const MainLayout: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title = "My App" }) => {
  console.log(title);
  return (
    <>
      <Head>
        <title>{title} 123456</title>
        <meta name="description" content="A Next.js application" />
      </Head>
      <GlobalProvider>
        <div className={`${styles.container} 123`}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </GlobalProvider>
    </>
  );
};

export default MainLayout;
