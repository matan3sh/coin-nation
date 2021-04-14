import styled from 'styled-components';

export const Container = styled.section`
  background-image: url('/static/images/hero/bg.png');
  height: 100vh;
  width: 100vw;
  max-height: 1080px;
  max-width: 1920px;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  background-size: cover;
  overflow-x: hidden;

  @media screen and (max-width: 1748px) {
    background-position: -170px center;
  }
  @media screen and (max-width: 1654px) {
    background-position: -220px center;
  }
  @media screen and (max-width: 1604px) {
    background-position: -260px center;
  }
  @media screen and (max-width: 1562px) {
    background-position: -280px center;
  }
  @media screen and (max-width: 1550px) {
    background-position: -390px center;
  }
  @media screen and (max-width: 1400px) {
    background-position: -420px center;
  }
  @media screen and (max-width: 768px) {
    background-position: 0px center;
    background-image: url('/static/images/hero/bg_mobile.png');
  }
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
`;

export const Headline = styled.h3`
  font-family: 'CircularStd-Bold';
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  transform: translateX(20px);
  /* Fallback: Set a background color. */
  background-color: gold;
  /* Create the gradient. */
  background-image: linear-gradient(90deg, #f2b848, #af4261);
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  @media screen and (max-width: 1550px) {
    font-size: 16px;
    transform: translateX(10px);
  }
  @media screen and (max-width: 1400px) {
    font-size: 14px;
    transform: translateX(5px);
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    transform: translateX(20px);
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    transform: translateX(10px);
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
    transform: translate(10px, -5px);
  }
  > span {
    font-size: 20px;
    @media screen and (max-width: 1550px) {
      font-size: 18px;
    }
    @media screen and (max-width: 1400px) {
      font-size: 16px;
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'CircularStd-Bold';
  font-size: 92px;
  display: flex;
  align-items: center;
  gap: 25px;
  @media screen and (max-width: 1550px) {
    font-size: 72px;
  }
  @media screen and (max-width: 1400px) {
    font-size: 52px;
  }
  @media screen and (max-width: 768px) {
    font-size: 92px;
  }
  @media screen and (max-width: 640px) {
    font-size: 82px;
  }
  @media screen and (max-width: 590px) {
    font-size: 72px;
  }
  @media screen and (max-width: 525px) {
    font-size: 62px;
  }
  @media screen and (max-width: 480px) {
    font-size: 52px;
  }
  @media screen and (max-width: 360px) {
    width: 95%;
  }
  @media screen and (max-width: 320px) {
    font-size: 42px;
  }
`;

export const Year = styled.h1`
  font-family: 'CircularStd-Medium';
  transform: translateY(-7px);
  font-size: 112px;
  /* Fallback: Set a background color. */
  background-color: gold;
  /* Create the gradient. */
  background-image: linear-gradient(45deg, #f3ec78, #af4261);
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  @media screen and (max-width: 1550px) {
    font-size: 92px;
  }
  @media screen and (max-width: 1400px) {
    font-size: 72px;
  }
  @media screen and (max-width: 768px) {
    font-size: 112px;
  }
  @media screen and (max-width: 640px) {
    font-size: 102px;
  }
  @media screen and (max-width: 590px) {
    font-size: 92px;
  }
  @media screen and (max-width: 525px) {
    font-size: 82px;
  }
  @media screen and (max-width: 480px) {
    font-size: 52px;
    transform: translateY(0px);
  }
  @media screen and (max-width: 320px) {
    font-size: 42px;
  }
`;

export const Text = styled.p`
  font-family: 'CircularStd-Regular';
  font-size: 18px;
  line-height: 26px;
  margin-top: 20px;
  height: 200px;
  @media screen and (max-width: 1400px) {
    font-size: 16px;
    line-height: 21px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
  }
  @media screen and (max-width: 420px) {
    font-size: 15px;
    line-height: 22px;
    height: 120px;
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 20px;
    height: 100px;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
    line-height: 14px;
    height: 80px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 75px;
  @media screen and (max-width: 400px) {
    gap: 45px;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
  @media screen and (max-width: 360px) {
    gap: 35px;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .color-btn {
    background: linear-gradient(120deg, #ab4e88, #ce8f6b);
    padding: 15px 20px;
    border-radius: 35px;
    font-size: 14px;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      transform: translateY(-4px);
    }
  }
`;
