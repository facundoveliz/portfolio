import { createGlobalStyle } from 'styled-components';

export const Theme = {
  background: '#171923',
  backgroundSoft: '#1f222d',
  foreground: '#ecf9fb',
  foregroundSoft: '#b2bfc1',
  foregroundSofter: '#838383',
  primary: '#1bd96a',
  secondary: '#74b6f3',
  danger: '#e24f44',
  border: '#404040',
  divider: '#fff',
};

export type ThemeType = {
  theme: typeof Theme;
};

export const GlobalStyle = createGlobalStyle<ThemeType>`
  * {
    margin: 0 auto;
    padding: 0;
    text-decoration-line: none;
    a {
      color: ${({ theme }) => theme.foreground};
    }
    h1 {
      letter-spacing: 1px;
      font-size: 24px;
    }
    h2 {
      letter-spacing: 1px;
      font-size: 22px;
    }
    h3 {
      letter-spacing: 1px;
      font-size: 20px;
    }
    h1, h2, h3, h4 {
      margin: 10px 0;
    }
    font-size: 18px;
    width: 40vw;
    @media (max-width: 740px) {
    width: 80vw;
    }
  }
  html, body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
  }
}`;
