import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/static/images/about/bg.png');
  height: 100vh;
  width: 100vw;
  max-height: 1080px;
  max-width: 1920px;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
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
  @media screen and (max-width: 400px) {
    padding-left: 15px;
  }

  > h1 {
    font-family: 'CircularStd-Medium';
    font-size: 54px;
    color: #3f354d;
    width: 680px;
  }
  > p {
    font-size: 19px;
    line-height: 25px;
    font-family: 'CircularStd-Regular';
    margin: 2rem 0;
    color: #3f354d;
    width: 550px;
  }
`;
