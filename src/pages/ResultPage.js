import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const ResultPageWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

const QuizResult = () => {
  const { quizId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { userAnswers } = location.state || { userAnswers: [] };

  const quizQuestions = {
    "general-knowledge": [
      { question: "What is the capital of Nepal?", options: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"], correct: 0 },
      // Add more questions...
    ],
    "training-courses": [
      { question: "What is the primary duty of a firefighter?", options: ["Rescue", "Fire Suppression", "Inspection", "All of the above"], correct: 3 },
      // Add more questions...
    ],
    "caan-rules": [
      { question: "When was the Civil Aviation Authority of Nepal established?", options: ["1990", "1998", "2002", "2010"], correct: 1 },
      // Add more questions...
    ],
  };

  const currentQuiz = quizQuestions[quizId];
  const score = userAnswers.reduce((total, answer, index) => {
    return total + (answer === currentQuiz[index].correct ? 1 : 0);
  }, 0);

  return (
    <ResultPageWrapper>
      <h2>Quiz Results</h2>
      <p>Your score: {score} / {currentQuiz.length}</p>
      <button onClick={() => navigate('/')}>Go Back to Quizzes</button>
    </ResultPageWrapper>
  );
};

export default QuizResult;
