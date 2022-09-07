import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { ModalProvider } from "../components/Modal2";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <ModalProvider>
      <>
        {router.pathname !== "/" ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </>
    </ModalProvider>
  );
};

export default MyApp;
