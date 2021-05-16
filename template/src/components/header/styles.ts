import styled, { css } from 'styled-components';

import { ROTATE } from '@styles/keyframes';

export const Container = styled.header`
  width: 100%;
  background-color: #ebebeb;
  display: flex;
  justify-content: center;
`;

export const TechImage = styled.img<Partial<{ animation: boolean }>>`
  ${(props) =>
    props.animation &&
    css`
      animation: 10s infinite ${ROTATE} linear;
    `}
`;
