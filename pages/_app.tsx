import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import FinishedBooksProvider from "../contexts/FinishedBooksContext";
import ReadingListProvider from "../contexts/ReadingListContext";
import ShowBookContextProvider from "../contexts/ShowBookContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" ? (
        <ShowBookContextProvider>
          <ReadingListProvider>
            <FinishedBooksProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </FinishedBooksProvider>
          </ReadingListProvider>
        </ShowBookContextProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default MyApp;
