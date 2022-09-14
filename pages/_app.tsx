import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import FinishedBooksProvider from "../contexts/FinishedBooksContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" ? (
        <FinishedBooksProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FinishedBooksProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default MyApp;
