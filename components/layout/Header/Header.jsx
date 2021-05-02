import { useState, useEffect } from 'react';
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
  const [scrollNav, setScrollNav] = useState(false);

  const navOnScroll = () => {
    const currentHeight = window.innerWidth <= 720 ? 5 : 120;
    if (window.scrollY >= currentHeight) {
      setScrollNav(true);
    } else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', navOnScroll);
    return () => {
      window.removeEventListener('scroll', navOnScroll);
    };
  }, []);

  return (
    <NavContainer scrollNav={scrollNav}>
      <NavWrapper>
        <Logo src='/static/images/header/logo.png' alt='logo' />
        <NavLinks>
          <NavLink>About</NavLink>
          <NavLink href='#Partners'>Partners</NavLink>
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
