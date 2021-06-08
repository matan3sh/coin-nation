import styled from 'styled-components';

export const Container = styled.section`
  max-width: 960px;
  margin: auto;
  text-align: center;
  h2 {
    margin-top: 50px;
    font-size: 45px;
    font-family: 'CircularStd-Bold';
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
  place-self: center;
`;
export const Card = styled.div`
  width: 220px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 25px;
  background-color: #fd4843;
  padding: 20px;
  border-radius: 10px;
  h3 {
    font-family: 'CircularStd-Bold';
    font-size: 21px;
    color: #001443;
  }
`;
