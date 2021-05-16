import React from 'react';

import ReduxProvider from '@prodivers/redux-provider';

import GlobalStyles from '@config/global-styles';

import ComponentB from '@components/component-b';
import Header from '@components/header';

const App: React.FC = () => (
  <ReduxProvider>
    <GlobalStyles />
    <Header />
    <ComponentB />
  </ReduxProvider>
);

export default App;
