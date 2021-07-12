import { useState, useEffect } from 'react';
import DropDown from '../DropDown/DropDown';
import { headerLinks } from 'data';
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
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

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
    <>
      <DropDown isOpen={isOpen} toggle={toggle} data={headerLinks} />
      <NavContainer scrollNav={scrollNav}>
        <NavWrapper>
          <a href='#Hero'>
            <Logo src='/static/images/header/logo.png' alt='logo' />
          </a>
          <NavLinks>
            {headerLinks.map((link, key) => (
              <div key={key}>
                <NavLink href={link.link}>{link.title}</NavLink>
              </div>
            ))}
            <NavButton
              href='https://next.brella.io/join/CoinNations2021'
              target='_blank'
              rel='noopener noreferrer'
            >
              Sign up
            </NavButton>
          </NavLinks>
          <MenuBars onClick={toggle} />
        </NavWrapper>
      </NavContainer>
    </>
  );
};

export default Header;
