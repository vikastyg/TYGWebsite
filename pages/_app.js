//  File to initialise Next JS like a constructor for a class

import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.scss";
import "../styles/responsive.scss";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Home - TY Global- Test Yantra Global</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
