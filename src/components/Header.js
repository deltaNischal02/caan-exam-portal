import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import styled from 'styled-components';
import { FaHome, FaGraduationCap, FaQuestionCircle, FaUser, FaBell } from 'react-icons/fa';
import CAANLogo from '../assets/CAAN_LOGO.png';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f0f4f8;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 5rem;
`;

const Logo = styled.div`
  img {
    max-width: 200px;
    height: auto;
    cursor: pointer;
  }
`;

const TextandLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const CompanyText = styled.p`
  color: #333333;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 0.5rem;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 1.0rem; /* Default font size for inactive state */
    transition: color 0.3s ease, font-size 0.3s ease;

    &.inactive {
      color: #555; /* Gray for inactive links */
      font-size: 1.2rem; /* Slightly bigger font for inactive links */
    }

    &.active {
      color: #0073e6; /* Bright blue for active links */
      font-size: 1.5rem; /* Smaller font for active links */
      font-weight: 600; /* Make active links bold */
    }

    &:hover {
      color: #005bb5; /* Darker blue on hover */
    }
    
  
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconButton = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  color: #0073e6;
  transition: color 0.3s ease;

  &:hover {
    color: #005bb5;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>
      <img src={CAANLogo} alt="CAAN Logo" />
    </Logo>

    <TextandLinkWrapper>
      <CompanyText>Civil Aviation Authority of Nepal</CompanyText>
      <NavLinks>
        <NavLink to="/" exact activeClassName="active" className="inactive">
          <FaHome /> Home
        </NavLink>
        <NavLink to="/training" activeClassName="active" className="inactive">
          <FaGraduationCap /> Training
        </NavLink>
        <NavLink to="/quizzes" activeClassName="active" className="inactive">
          <FaQuestionCircle /> Quizzes
        </NavLink>
        <NavLink to="/profile" activeClassName="active" className="inactive">
          <FaUser /> Profile
        </NavLink>
      </NavLinks>
    </TextandLinkWrapper>

    <RightSection>
      <IconButton>
        <FaBell />
      </IconButton>
      <IconButton>
        <FaUser />
      </IconButton>
    </RightSection>
  </HeaderWrapper>
);

export default Header;
