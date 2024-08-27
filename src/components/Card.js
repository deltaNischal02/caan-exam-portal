import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem;
  width: 300px;
  text-align: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
`;

const Card = ({ icon, title, description, whileHover }) => (
  <CardContainer whileHover={whileHover}>
    <IconWrapper>{icon}</IconWrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </CardContainer>
);

export default Card;
