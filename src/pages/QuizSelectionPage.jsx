import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuizSelectionPageWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuizCard = styled.div`
  width: 300px;
  padding: 1rem;
  margin: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const QuizSelectionPage = () => {
  const navigate = useNavigate();

  const quizzes = [
    { id: 'general-knowledge', title: 'General Knowledge' },
    { id: 'training-courses', title: 'Training Courses' },
    { id: 'caan-rules', title: 'CAAN Rules and Regulations' },
  ];

  
  const handleQuizSelect = (quizId) => {
    if (quizId === 'general-knowledge') {
      navigate(`/quiz/${quizId}`);
    } else {
      navigate(`/quiz/${quizId}`);
    }
  };
  
  return (
    <QuizSelectionPageWrapper>
      <h1>Select a Quiz</h1>
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} onClick={() => handleQuizSelect(quiz.id)}>
          {quiz.title}
        </QuizCard>
      ))}
    </QuizSelectionPageWrapper>
  );
};

export default QuizSelectionPage;
