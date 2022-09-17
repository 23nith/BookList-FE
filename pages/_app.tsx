import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import FinishedBooksProvider from "../contexts/FinishedBooksContext";
import ReadingListProvider from "../contexts/ReadingListContext";
import BooksProvider from "../contexts/BooksContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" ? (
        <BooksProvider>
          <ReadingListProvider>
            <FinishedBooksProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </FinishedBooksProvider>
          </ReadingListProvider>
        </BooksProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default MyApp;
