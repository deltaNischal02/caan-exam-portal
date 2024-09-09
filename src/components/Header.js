import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import styled from 'styled-components';
import { FaHome, FaGraduationCap, FaQuestionCircle, FaUser, FaBell, FaRegQuestionCircle} from 'react-icons/fa';
import CAANLogo from '../assets/CAAN_LOGO.png';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1); /* Transparent white */
  backdrop-filter: blur(10px); /* Frosted glass effect */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure it stays above other content */
  // color: #ffffff;
  height: 3rem;
  opacity: 100%;
`;

const Logo = styled.div`
  img {
    max-width: 200px;
    height: auto;
    cursor: pointer;
    img-shadow: 0 4px 6px rgba(0, 0, 5, 5);
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
    font-size: 1.5rem; /* Default font size for inactive state */
    transition: color 1s ease, font-size 1s ease;
      font-weight: 600; /* Make active links bold */


    &.inactive {
      // color: #555; /* Gray for inactive links */
      color:black;
      font-size: 1.2rem; /* Slightly bigger font for inactive links */
      font-weight: 600; /* Make active links bold */

    }

    &.active {
      color: #0073e6; /* Bright blue for active links */
      font-size: 1.2rem; /* Smaller font for active links */
      font-weight: 600; /* Make active links bold */
    }

    &:hover {
      color: #005bb5; /* Darker blue on hover */
    }
      svg {
      margin-right: 0.1rem; /* Space between icon and text */
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
      <CompanyText>Civil Aviation</CompanyText>
      <NavLinks>
        <NavLink to="/" exact activeClassName="active" className="inactive">
          <FaHome /> Home
        </NavLink>
        <NavLink to="/training" activeClassName="active" className="inactive">
          <FaGraduationCap /> Training Material
        </NavLink>
        <NavLink to="/quizzes" activeClassName="active" className="inactive">
          <FaRegQuestionCircle /> Quizzes
        </NavLink>
        <NavLink to="/profile" activeClassName="active" className="inactive">
          <FaRegQuestionCircle /> Help
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
