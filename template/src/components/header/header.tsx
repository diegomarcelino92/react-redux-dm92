import React from 'react';

import { Container, TechImage } from './styles';

const Header = () => (
  <Container>
    <div>
      <TechImage src="/redux.png" />
      <TechImage src="/react.png" animation />
      <TechImage src="/redux-saga.png" />
    </div>
  </Container>
);

export default Header;
