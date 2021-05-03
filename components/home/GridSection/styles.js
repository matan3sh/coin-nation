import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  background: #fff;
  > h1 {
    font-family: 'CircularStd-Bold';
    color: #2f154a;
    margin-top: 5rem;
    font-size: 50px;
    margin-bottom: 1.5rem;
    font-weight: 900;
    @media screen and (max-width: 475px) {
      font-size: 10.6041666666666665vw;
    }
  }
`;

export const List = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  gap: 2rem;
  margin-bottom: 3.5rem;
  @media screen and (max-width: 1250px) {
    width: 90%;
  }
  @media screen and (max-width: 1100px) {
    width: 97%;
  }
  @media screen and (max-width: 985px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 710px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 475px) {
    grid-template-columns: repeat(1, 1fr);
  }
  > img {
    width: 200px;
    padding: 20px;
    min-height: 140px;
    object-fit: contain;
    &:hover {
      transform: scale(1.02);
    }
    @media screen and (max-width: 475px) {
      width: 75%;
    }
  }
`;
