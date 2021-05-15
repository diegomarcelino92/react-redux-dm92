import React from 'react';

import { Container } from './styles';

const ComponentA = ({ label }: ComponentAProps) => (
  <Container>
    <p>{label}</p>
  </Container>
);

export default ComponentA;
