import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    margin: 30px 0;
    font-size: 1.3rem;
    max-width: 500px;
  }

  & button {
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    width: 200px;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    justify-content: center;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 40px;
`;
