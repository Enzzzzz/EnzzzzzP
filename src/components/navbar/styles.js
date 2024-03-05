import styled, { keyframes } from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray900};
  padding: 14px;
  margin-top: -30px ;
  position: fixed;
  width: 100%;
  transition: background-color 0.3s, box-shadow 0.3s;
  z-index: 1000;
  box-shadow: ${({ scrolled }) => (scrolled ? '0px 2px 12px rgba(0, 0, 0, 0.9)' : 'none')};

  @media (max-width: 768px) {
    width: calc(100% - 1rem);
    overflow-x: hidden;
  }
`;

const up = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const down = keyframes`
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 16px;

  transition: transform 0.3s ease-out;
  cursor: pointer;

  &:hover {
  animation: ${up} 0.5s forwards;
  }

  &:not(:hover) {
    animation: ${down} 0.3s forwards;
    transform-origin: bottom;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
    overflow-x: hidden;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const NavLink = styled.a`
  font-size: large;
  text-decoration: none;
  color: white;

  &:last-child {
    margin-right: 80px;
    
  }

  @media (max-width: 768px) {
    float: right;
    font-size: medium;
    text-align: right;
    overflow-x: hidden;
    margin-right: 5px;
    &:last-child {
    margin-right: 5px;
    overflow-x: hidden;
  }
  }
`;