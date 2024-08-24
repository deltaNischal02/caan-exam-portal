
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { FaBook, FaCheckCircle, FaChartLine, FaCogs } from 'react-icons/fa';

const HeroSection = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #003366;
  color: #ffffff;
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  flex-wrap: wrap;
`;

const LandingPage = () => (
  <>
    <HeroSection>
      <h1>Welcome to the CAAN Employee Portal</h1>
      <p>Empowering CAAN Employees with Knowledge</p>
    </HeroSection>
    <FeaturesSection>
      <Card icon={<FaBook />} title="Access Training Materials" description="Find all the resources you need in one place." />
      <Card icon={<FaCheckCircle />} title="Take Quizzes and Exams" description="Test your knowledge with tailored quizzes." />
      <Card icon={<FaChartLine />} title="Track Your Progress" description="Monitor your learning journey." />
      <Card icon={<FaCogs />} title="Admin Tools" description="Manage users, content, and reports efficiently." />
    </FeaturesSection>
  </>
);

export default LandingPage;
