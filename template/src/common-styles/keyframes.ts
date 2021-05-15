import { keyframes } from 'styled-components';

export const UP_FADE = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  } 
  to {
    opacity: 1;
  }
`;

export const FADE_IN_OUT = keyframes`
   from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;
