import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  flex-direction: column;
  background-color: #fff;

  h1 {
    font-size: 50px;
    font-family: 'CircularStd-Bold';
    margin: 1.5rem auto;
    color: #2f154a;
    @media screen and (max-width: 1030px) {
      font-size: 8.6041666666666665vw;
    }
  }
  img {
    width: 1000px;
    object-fit: contain;
    @media screen and (max-width: 1030px) {
      width: 95%;
    }
  }
`;
