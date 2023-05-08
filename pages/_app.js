import "../styles/theme.css";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import "@etchteam/next-pagination/dist/index.css";
import "react-multi-carousel/lib/styles.css";
import "@splidejs/splide/css";

import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Header";
import UiNav from "./../components/UiNav";
import Footern from "./../components/Footern";
import MobileSidebar from "./../components/MobileSidebar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
        // integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      />

      <Script
        src="/js/sticky.js"
        strategy="lazyOnload"
        type="text/javascript"
      />
      <Script
        src="/js/flickity.js"
        strategy="lazyOnload"
        type="text/javascript"
      />
      <Script
        src="/js/lazyload.js"
        strategy="lazyOnload"
        type="text/javascript"
      />

      <Script src="/js/theme.js" strategy="lazyOnload" type="text/javascript" />
      <Header suppressHydrationWarning />
      <MobileSidebar suppressHydrationWarning />
      {/* <MainNav /> */}
      <UiNav />
      <Component {...pageProps} suppressHydrationWarning />
      {/* <Footer /> */}
      <Footern suppressHydrationWarning />
    </>
  );
}

export default MyApp;
