import React from 'react';

import { Container } from './styles';

interface ComponentAProps {
  label: string;
}

const ComponentA = ({ label }: ComponentAProps) => (
  <Container>
    <p>{label}</p>
  </Container>
);

export default ComponentA;
