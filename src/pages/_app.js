import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-back-chill min-h-screen pb-1">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
