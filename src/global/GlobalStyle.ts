import { createGlobalStyle } from 'styled-components';
// @ts-ignore
import reset from 'styled-reset-advanced';

export default createGlobalStyle`
  ${reset};

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
    background: ${({ theme }: any) => theme.background};
  }
`;
