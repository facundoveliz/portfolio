/* eslint-disable react/jsx-props-no-spreading */
/* disable this eslint rule because nextjs
 * needs prop spreading here */
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
