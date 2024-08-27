import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { FaBook, FaCheckCircle, FaChartLine, FaCogs } from 'react-icons/fa';

// Styled components
const HeroSection = styled(motion.section)`
  padding: 0.6rem;
  text-align: center;
  background-color: #003366;
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 3rem 1rem;
  height: 30vh;
  flex-wrap: wrap;
  background-color: #003366;
  cursor: pointer;
`;

const AboutSection = styled.section`
  padding: 3rem 1rem;
  text-align: center;
  background-color: #ffffff;
  color: #333333;
`;

const ContactSection = styled.section`
  padding: 3rem 1rem;
  text-align: center;
  background-color: #003366;
  color: #ffffff;
`;

// Text variants for animation
const textVariants = {
  hidden: { opacity: 0, y: 20 },  // Start state: transparent and slightly below
  visible: { opacity: 1, y: 0 }   // End state: fully visible and in place
};

// Landing Page Component
const LandingPage = () => (
  <>
    <HeroSection
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, staggerChildren: 0.3 }}  // Stagger children with 0.3s delay
    >
      <motion.h1 variants={textVariants}>Welcome to the CAAN Employee Portal</motion.h1>
      <motion.p variants={textVariants}>Empowering CAAN Employees with Knowledge</motion.p>
    </HeroSection>

    <FeaturesSection>
      <Card
        icon={<FaBook />}
        title="Access Training Materials"
        description="Find all the resources you need in one place."
        whileHover={{ scale: 1.1 }}
      />
      <Card
        icon={<FaCheckCircle />}
        title="Take Quizzes and Exams"
        description="Test your knowledge with tailored quizzes."
        whileHover={{ scale: 1.1 }}
      />
      <Card
        icon={<FaChartLine />}
        title="Track Your Progress"
        description="Monitor your learning journey."
        whileHover={{ scale: 1.1 }}
      />
      {/* <Card
        icon={<FaCogs />}
        title="Admin Tools"
        description="Manage users, content, and reports efficiently."
        whileHover={{ scale: 1.1 }}
      /> */}
    </FeaturesSection>

    <AboutSection>
      <h2>About Us</h2>
      <p>
        The CAAN Employee Portal is designed to provide comprehensive resources, training materials, 
        and assessment tools for all CAAN employees. Our goal is to enhance knowledge sharing and 
        improve efficiency across the organization.
      </p>
    </AboutSection>

    <ContactSection>
      <h2>Contact Us</h2>
      <p>
        Have questions or need support? Reach out to our team at support@caanportal.com.
      </p>
      <p>Phone: +977-123456789</p>
      <p>Address: Civil Aviation Authority of Nepal, Kathmandu, Nepal</p>
    </ContactSection>
  </>
);

export default LandingPage;
