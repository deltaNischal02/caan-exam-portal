import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { motion, useInView } from 'framer-motion';
import { FaBook, FaCheckCircle, FaChartLine } from 'react-icons/fa'; 

// Styled components
const HeroSection = styled(motion.section)`
  padding: 0rem;
  text-align: center;
  background-color: #16161A;
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem; /* Increase font size */
`;

const HeroText = styled(motion.h1)`
  font-size: 6rem; /* Enlarged text */
  font-weight: bold;
  background: linear-gradient(90deg, #ffffff, #3333ff); /* Gradient colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  width:70%;
  margin-bottom:1rem;
  text-shadow: 0 0 10px #2CB67D rgba(255, 0, 204, 0.8), 0 0 20px rgba(255, 0, 204, 0.6), 0 0 30px rgba(51, 51, 255, 0.4);

`;

const HeroSubText = styled(motion.p)`
  font-size: 3rem; /* Increase font size */
  margin-top: 1rem;
  color:white;
  background: linear-gradient(90deg, #ffffff, #3333ff); /* Gradient colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 3rem 1rem;
  flex-wrap: wrap;
  background-color: #003366;
  cursor: pointer;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem; /* Slightly larger font */
  text-align: center;
  color: white;
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

// Logout button
const Button = styled.button`
  color: purple;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid purple;
  padding: 8px 20px;
  font-size: 17px;
  font-weight: bold;
  background: transparent;
  position: relative;
  transition: all 0.4s ease;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px; /* Rounded corners */
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    color: blue;
    border-color: blue;
  }
`;

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }
};

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const LandingPage = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.9 });

  const { user, logout } = useAuth(); // Get user and logout from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <HeroSection
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, staggerChildren: 0.5 }}
      >
        <HeroText variants={textVariants}>KNOWLEDGE AT YOUR FINGERTIPS</HeroText>
        <HeroSubText variants={textVariants}>Access training and resources anytime, anywhere.</HeroSubText>

        {/* Conditionally render login/logout button */}
        {user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}
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
              whileHover={{scale:1.1}}
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
              description="Test your knowledge with tailored quizzes."
              whileHover={{scale:1.1}}

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
              whileHover={{scale:1.1}}

            />
          </motion.div>
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
