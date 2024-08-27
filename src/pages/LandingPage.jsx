import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { motion, useInView } from 'framer-motion';
import { FaBook, FaCheckCircle,  FaChartLine,FaCogs } from 'react-icons/fa'; 

// Styled components
const HeroSection = styled(motion.section)`
  padding: 0rem;
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
const FeaturesTitle = styled.h2`
  font-size: 2rem;
  // margin-bottom: 2rem;
  text-align: center;
  background-color: #003366;
  margin:0px;
  color:white;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
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
  hidden: { opacity: 0, x: 100 },  // Start state: transparent and slightly below
  visible: { opacity: 1, x: 0 }   // End state: fully visible and in place
};
// Card animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// Landing Page Component
const LandingPage = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.9 }); // Trigger animation when 30% of the section is in view


// Landing Page Component
return (
  <>
    <HeroSection
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, staggerChildren: 0.5 }}
    >
      <motion.h1 variants={textVariants}>Welcome to the CAAN Employee Portal</motion.h1>
      <motion.p variants={textVariants}>Empowering CAAN Employees with Knowledge</motion.p>
    </HeroSection>

      <FeaturesTitle>Our Features</FeaturesTitle>
    <FeaturesSection ref={ref}>
      <CardContainer>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <Card
            icon={<FaBook />}
            title="Access Training Materials"
            description="Find all the resources you need in one place."
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card
            icon={<FaCheckCircle />}
            title="Take Quizzes and Exams"
            description="Test your knowledge with tailored lorem2 quizzes."

            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card
            icon={<FaChartLine />}
            title="Track Your Progress"
            description="Monitor your learning journey."
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
        {/* <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card
            icon={<FaCogs />}
            title="Admin Tools"
            description="Manage users, content, and reports efficiently."
            whileHover={{ scale: 1.1 }}
          />
        </motion.div> */}
      </CardContainer>
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
};

export default LandingPage;