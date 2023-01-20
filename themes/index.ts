import { createGlobalStyle } from 'styled-components';

export const Theme = {
  background: '#f7f4ed',
  backgroundSoft: '#cbc8c1',
  foreground: '#26312e',
  foregroundSoft: '#36413e',
  foregroundSofter: '#46514e',
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
    width: 50vw;
    @media (max-width: 940px) {
      width: 75vw;
    }
    @media (max-width: 740px) {
      width: 85vw;
    }
  }
  html, body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
  }
}`;
