import { createGlobalStyle } from 'styled-components';
// @ts-ignore
import reset from 'styled-reset-advanced';

export default createGlobalStyle<{ theme: any }>`
  ${reset};

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
    /* @ts-ignore */
    background: ${({ theme }) => theme.background};
  }
`;
