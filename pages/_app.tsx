import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-222786463-1`}
      />
      <Script id="ga-analytics-universal">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-222786463-1',{
            page_path: window.location.pathname,
          });
          `}
      </Script>

        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-YXCH77SDVP"></Script>
        <Script id="ga-analytics-GA4">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YXCH77SDVP');`}
        </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
