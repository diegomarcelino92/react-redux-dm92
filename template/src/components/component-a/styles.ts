import styled from 'styled-components';

import { UP_FADE } from '@styles/keyframes';

export const Container = styled.div`
  width: 300px;
  border-radius: 5px;
  border: 2px solid #777777;
  padding: 20px;
  margin: 10px;
  animation: 1s ${UP_FADE};
`;
