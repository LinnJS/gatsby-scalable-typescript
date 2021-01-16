import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export default createGlobalStyle<{ theme: any }>`
  ${normalize};

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
    background: ${({ theme }) => theme.background};
  }
`;
