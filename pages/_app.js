import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import {RecoilRoot} from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
