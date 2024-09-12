import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./MainLayout.module.css";

const MainLayout: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title = "My App" }) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A Next.js application" />
      </Head>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
};

export default MainLayout;
