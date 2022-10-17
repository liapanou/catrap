import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AccountProvider } from "../providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AccountProvider>
      <Component {...pageProps} />
    </AccountProvider>
  );
}

export default MyApp;
