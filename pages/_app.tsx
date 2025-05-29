import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from 'src/components/Layout/Layout';
import { BlogThemeProvider } from 'src/context/Theme';
import { globalStyles } from 'src/styles/global';

function MyApp({ Component, pageProps: { years, ...pageProps } }: AppProps) {
  return (
    <BlogThemeProvider>
      <Global styles={globalStyles} />
      <Layout years={years}>
        <Component {...pageProps} />
      </Layout>

      {/* Google Analytics */}
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-LF9YBKVV4Q' strategy='afterInteractive' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LF9YBKVV4Q');
        `}
      </Script>
    </BlogThemeProvider>
  );
}

export default MyApp;
