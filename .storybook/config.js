import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/global/GlobalStyle';
import theme from '../src/global/theme';

const Wrapper = styled(ThemeProvider)`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const defaultTheme = {
  name: 'DEFAULT',
  light: theme,
};

const Decorator = storyFn => (
  <Wrapper theme={theme.light}>
    <GlobalStyle />
    {storyFn()}
  </Wrapper>
);

addDecorator(Decorator);

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = '';
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
