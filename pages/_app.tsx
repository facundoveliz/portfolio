/* eslint-disable react/jsx-props-no-spreading */
/* disable this eslint rule because nextjs
 * needs prop spreading here */
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from '../themes';
import './_app.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
