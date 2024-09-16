import styles from "./MainLayout.module.css";
import { GlobalProvider } from "@/hooks/GlobalContext";
import Header from "../ui/header";
import Footer from "../ui/footer";
 
const MainLayout: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title = "My App" }) => {
  console.log(title,123);
  return (
    <>
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
