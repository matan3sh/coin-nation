import styled from 'styled-components';

export const Container = styled.section`
  width: 68%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  gap: 25px;
  color: #fff !important;
  @media screen and (max-width: 1250px) {
    width: 85%;
  }
  @media screen and (max-width: 1350px) {
    width: 70%;
  }
  @media screen and (max-width: 1250px) {
    width: 85%;
  }
  @media screen and (max-width: 1250px) {
    width: 92%;
  }
  @media screen and (max-width: 985px) {
    margin-top: 5rem;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 780px) {
    width: 90%;
  }
`;

export const AboutImage = styled.div`
  img {
    width: 380px;
    object-fit: contain;
    border-radius: 20px;
    @media screen and (max-width: 1350px) {
      width: 300px;
    }
    @media screen and (max-width: 985px) {
      width: 90%;
      margin-top: 2.5rem;
    }
    @media screen and (max-width: 780px) {
      width: 90%;
    }
  }
`;

export const Content = styled.div`
  h1 {
    font-family: 'CircularStd-Bold';
    font-size: 50px;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 570px) {
      font-size: 8.6041666666666665vw;
    }
  }
  p {
    font-family: 'CircularStd-Regular', sans-serif !important;
    font-size: 18px;
    line-height: 32px;
  }
  a {
    display: inline-block;
    border: none;
    background-color: #91e6fe;
    padding: 15px;
    font-size: 21px;
    border-radius: 10px;
    text-transform: capitalize;
    transition: all 0.2s ease-out;
    font-family: 'CircularStd-Bold';
    margin: 1rem 0;
    color: #001443;
    &:hover {
      background-color: #dc768a;
      cursor: pointer;
    }
  }
`;
