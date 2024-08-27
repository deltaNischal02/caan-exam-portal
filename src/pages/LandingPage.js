import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { FaBook, FaCheckCircle, FaChartLine, FaCogs } from 'react-icons/fa';

// Styled components
const HeroSection = styled(motion.section)`  // Animated HeroSection
  padding: 2rem;
  text-align: center;
  background-color: #003366;
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  flex-wrap: wrap;
  cursor: pointer;
`;

// Landing Page Component
const LandingPage = () => (
  <>
    <HeroSection
      initial={{ opacity: 0, y: 50 }} // Animation starts
      animate={{ opacity: 1, y: 0 }}  // Animation ends
      transition={{ duration: 1 }}  // Transition settings
    >
      <h1>Welcome to the CAAN Employee Portal</h1>
      <p>Empowering CAAN Employees with Knowledge</p>
    </HeroSection>
    <FeaturesSection>
      <Card
        icon={<FaBook />}
        title="Access Training Materials"
        description="Find all the resources you need in one place."
        whileHover={{ scale: 1.1 }} // Animation on hover
      />
      <Card
        icon={<FaCheckCircle />}
        title="Take Quizzes and Exams"
        description="Test your knowledge with tailored quizzes."
        whileHover={{ scale: 1.1 }} // Animation on hover
      />
      <Card
        icon={<FaChartLine />}
        title="Track Your Progress"
        description="Monitor your learning journey."
        whileHover={{ scale: 1.1 }} // Animation on hover
      />
      <Card
        icon={<FaCogs />}
        title="Admin Tools"
        description="Manage users, content, and reports efficiently."
        whileHover={{ scale: 1.1 }} // Animation on hover
      />
    </FeaturesSection>
  </>
);

export default LandingPage;
