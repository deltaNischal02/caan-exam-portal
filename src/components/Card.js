
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f9f9f9;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Card = ({ icon, title, description }) => (
  <CardWrapper>
    <IconWrapper>{icon}</IconWrapper>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardWrapper>
);

export default Card;
