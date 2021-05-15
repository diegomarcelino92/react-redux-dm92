import React from 'react';

import ReduxProvider from '@prodivers/redux-provider';

import ComponentB from '@components/component-b';
import GlobalStyles from '@config/global-styles';

const App: React.FC = () => (
  <ReduxProvider>
    <GlobalStyles />
    <ComponentB />
  </ReduxProvider>
);

export default App;
