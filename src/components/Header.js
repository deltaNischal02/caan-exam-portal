import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #003366;  // CAAN Blue
  color: #ffffff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.nav`
  a {
    color: #ffffff;
    margin: 0 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>CAAN Portal</Logo>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/training">Training</Link>
      <Link to="/quizzes">Quizzes</Link>
      <Link to="/profile">Profile</Link>
    </NavLinks>
  </HeaderWrapper>
);

export default Header;