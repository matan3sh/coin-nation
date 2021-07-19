import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  > h1 {
    font-family: 'CircularStd-Bold';
    margin-top: 5rem;
    font-size: 50px;
    margin-bottom: 1.5rem;
    font-weight: 900;
    @media screen and (max-width: 475px) {
      font-size: 10.6041666666666665vw;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Row = styled.div`
  display: flex;
  gap: 25px;

  input {
    background: linear-gradient(304.49deg, #001443 45.38%, #000a2c 82.48%);
    border: 1px #fff solid;
    border-radius: 6px;
    padding: 7.5px 15px;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  textarea {
    font-family: 'CircularStd-Regular', sans-serif !important;
    color: #fff;

    width: 100%;
    background: linear-gradient(304.49deg, #001443 45.38%, #000a2c 82.48%);
    border: 1px #fff solid;
    border-radius: 6px;
    padding: 7.5px 15px;
    &::placeholder {
      font-family: 'CircularStd-Regular', sans-serif !important;

      color: #fff;
    }
  }

  .button {
    margin-left: auto;
    color: #fff;
    border: none;
    background: linear-gradient(120deg, #ab4e88, #ce8f6b);
    padding: 15px 20px;
    border-radius: 35px;
    font-size: 14px;
    transition: 0.3s;
    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
    &:hover {
      cursor: pointer;
      transform: translateY(-4px);
    }
  }
`;
