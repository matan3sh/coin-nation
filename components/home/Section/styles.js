import styled from 'styled-components';

export const Container = styled.div`
  height: 98vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 175px;
  @media screen and (max-width: 1820px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 1748px) {
    padding-left: 55px;
  }
  @media screen and (max-width: 1700px) {
    padding-left: 25px;
  }
  @media screen and (max-width: 1684px) {
    padding-left: 75px;
  }
  @media screen and (max-width: 1220px) {
    padding-left: 35px;
  }
  @media screen and (max-width: 420px) {
    justify-content: flex-start;
    padding-top: 25px;
  }
  @media screen and (max-width: 400px) {
    padding-left: 15px;
  }

  > h1 {
    font-family: 'CircularStd-Medium';
    font-size: 54px;
    width: 680px;
    @media screen and (max-width: 768px) {
      width: 90%;
      font-size: 42px;
    }
    @media screen and (max-width: 420px) {
      font-size: 26px;
    }
  }
  > p {
    font-size: 19px;
    line-height: 25px;
    font-family: 'CircularStd-Regular';
    margin: 2rem 0;
    width: 550px;
    @media screen and (max-width: 768px) {
      width: 90%;
      font-size: 19px;
      line-height: 22px;
    }
  }
`;
