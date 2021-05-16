import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;

  & p {
    margin: 30px 0;
    font-size: 1.3rem;
  }

  & button {
    margin-top: 30px;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 50px;
`;
