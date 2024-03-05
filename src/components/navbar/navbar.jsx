import React, { useState, useEffect } from 'react';
import { 
    NavbarContainer,
    Logo,
    NavLinks,
    NavLink
} from './styles'



function Navbar() {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  
    return (
      <NavbarContainer scrolled={scrolled}>
        <Logo 
        src="/logo.png" alt="logo"/>
        <NavLinks>
          <NavLink className='sub' scrolled={scrolled} href="#sobre">Sobre</NavLink>
          <NavLink className='sub' scrolled={scrolled} href="#projetos">Projetos</NavLink>
          <NavLink className='sub' scrolled={scrolled} href="#skills">Skills</NavLink>
          <NavLink className='sub' scrolled={scrolled} href="#contato">Contato</NavLink>
        </NavLinks>
    </NavbarContainer>
    );
  }
  
  export default Navbar;