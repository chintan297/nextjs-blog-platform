import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import Head from "next/head";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        className={`${lato.className} ${lato.variable}`}
        style={{ minHeight: "100vh" }}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
