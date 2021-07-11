import React from 'react';

import { Container } from './styles';

interface LoadingProps {
  loading: boolean;
}

const Loading = ({ loading }: LoadingProps) => {
  return <>{loading && <Container>Loading...</Container>}</>;
};

export default Loading;
