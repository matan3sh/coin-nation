import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: #fff;
  > h1 {
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  place-items: center;
  width: 70%;

  > h1 {
    @media screen and (max-width: 575px) {
      font-size: 12.6041666666666665vw;
    }
  }
  > div {
    min-height: 350px;
    min-width: 260px;
    max-width: 160px;
    text-align: center;
    @media screen and (max-width: 575px) {
      width: 100%;
    }
    > img {
      width: 220px;
      object-fit: contain;
      border-radius: 10px;
      @media screen and (max-width: 575px) {
        width: 90%;
      }
    }
    > h2 {
      font-size: 21px;
      margin: 0;
    }
    > h3 {
      font-size: 15px;
      color: #555;
      line-height: 18px;
    }
  }

  @media screen and (max-width: 1185px) {
    width: 90%;
  }
  @media screen and (max-width: 920px) {
    width: 95%;
  }
  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0rem;
  }

  > img {
    width: 200px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.02);
    border-radius: 0.5rem;
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
