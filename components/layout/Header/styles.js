import styled from 'styled-components';
import { MenuIcon } from 'components/icons';

export const NavContainer = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  max-width: 1670px;
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
    padding-left: 25px;
  }
  @media screen and (max-width: 935px) {
    padding-left: 0px;
  }
`;

export const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 353px;
  height: 148px;
  object-fit: contain;
  transform: translateY(-5px);
  @media screen and (max-width: 935px) {
    width: 293px;
    height: 88px;
  }
  @media screen and (max-width: 400px) {
    transform: translate(-30px, -7px);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 75px;
  font-family: 'CircularStd-Regular';
  font-size: 18px;
  @media screen and (max-width: 1684px) {
    padding-right: 75px;
  }
  @media screen and (max-width: 1220px) {
    padding-right: 25px;
  }
  @media screen and (max-width: 1095px) {
    gap: 50px;
  }
  @media screen and (max-width: 1010px) {
    gap: 35px;
  }
  @media screen and (max-width: 815px) {
    font-size: 16px;
  }
  @media screen and (max-width: 778px) {
    display: none;
  }
`;

export const NavLink = styled.a``;

export const NavButton = styled.a`
  border: 1px #ccc solid;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background: linear-gradient(45deg, #f3ec78, #af4261);
    transform: translateY(-2px);
  }
`;

export const MenuBars = styled(MenuIcon)`
  display: none !important;
  cursor: pointer;

  @media screen and (max-width: 778px) {
    display: block !important;
    transform: translate(-30px, -3px);
  }
  @media screen and (max-width: 420px) {
    transform: translate(-25px, 0px);
  }
  @media screen and (max-width: 420px) {
    transform: translate(-25px, -5px);
  }
  @media screen and (max-width: 320px) {
    transform: translate(-15px, -5px);
  }
`;