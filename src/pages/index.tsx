// pages/index.js
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the Home Page" />
      </Head>
      <header>
        <h1>Welcome to My Next.js App</h1>
      </header>
      <main>
        <p>This is the main content of the homepage.</p>
      </main>
      <footer>
        <p>&copy; 2024 My Next.js App</p>
      </footer>
    </div>
  );
};

export default Index;
