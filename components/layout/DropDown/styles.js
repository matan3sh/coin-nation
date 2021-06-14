import styled from 'styled-components';
import { CloseIcon } from 'components/icons';

export const DropDownContainer = styled.div`
  position: fixed;
  z-index: 101;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  > svg {
    color: white;
  }
`;

export const ExitIcon = styled(CloseIcon)`
  color: #000 !important;
  font-size: 36px !important;
`;

export const DropDownWrapper = styled.div``;

export const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const DropDownLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #000;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  background: linear-gradient(120deg, #ab4e88, #ce8f6b);
  padding: 15px 20px;
  border-radius: 35px;
  font-size: 19px;
  transition: 0.3s;
  margin-top: 25px;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;
