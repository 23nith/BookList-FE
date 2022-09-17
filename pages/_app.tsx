import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import FinishedBooksProvider from "../contexts/FinishedBooksContext";
import ReadingListProvider from "../contexts/ReadingListContext";
import BooksProvider from "../contexts/BooksContext";
import UserContextProvider from "../contexts/UserContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      <UserContextProvider>
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
      </UserContextProvider>
    </>
  );
};

export default MyApp;
