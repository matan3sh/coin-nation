import {
  NavContainer,
  NavWrapper,
  Logo,
  NavLinks,
  NavLink,
  NavButton,
  MenuBars,
} from './styles';

const Header = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <Logo src='/static/images/header/logo.png' alt='logo' />
        <NavLinks>
          <NavLink>About</NavLink>
          <NavLink>Dates</NavLink>
          <NavLink>Company</NavLink>
          <NavLink>Join</NavLink>
          <NavButton>Get Started</NavButton>
        </NavLinks>
        <MenuBars />
      </NavWrapper>
    </NavContainer>
  );
};

export default Header;
