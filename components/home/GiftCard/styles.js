import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  width: 70%;
  gap: 25px;
  @media screen and (max-width: 1195px) {
    flex-direction: column;
    justify-content: center;
  }
  img {
    width: 580px;
    object-fit: contain;
    border-radius: 10px;
    @media screen and (max-width: 1290px) {
      width: 460px;
    }
    @media screen and (max-width: 1195px) {
      width: 100%;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    text-align: center;
    h5 {
      font-family: 'CircularStd-Bold';
      margin-bottom: 2rem;
      font-size: 34px;
      @media screen and (max-width: 1195px) {
        font-size: 24px;
      }
    }
  }
`;
