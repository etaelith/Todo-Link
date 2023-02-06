import Layout from "@/components/Layout";
import LoginProvider from "@/context/UserProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-back-chill min-h-screen pb-1">
      <LoginProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoginProvider>
    </main>
  );
}
