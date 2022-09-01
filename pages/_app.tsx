import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default MyApp;
