import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 10vh;
  > h2 {
    text-transform: capitalize;
    font-size: 16px;
    @media screen and (max-width: 420px) {
      font-size: 13px;
    }
  }
`;
