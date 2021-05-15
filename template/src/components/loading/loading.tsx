import React from 'react';

import { Container } from './styles';

const Loading = ({ loading }: LoadingProps) => {
  return <>{loading && <Container>Loading...</Container>}</>;
};

export default Loading;
