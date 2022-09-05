import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import FinishedBooksProvider from "../contexts/FinishedBooksContext";
import ReadingListProvider from "../contexts/ReadingLIstConext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" ? (
        <ReadingListProvider>
          <FinishedBooksProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </FinishedBooksProvider>
        </ReadingListProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default MyApp;
