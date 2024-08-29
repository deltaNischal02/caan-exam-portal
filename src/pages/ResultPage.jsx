import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import quizzes from '../data/quizdata'; // Import quiz data
import Confetti from 'react-confetti';

const ResultPageWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

const ScoreText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ score, total }) => (score / total > 0.7 ? 'green' : 'red')};
`;

const QuestionReview = styled.div`
  margin: 1rem 0;
  text-align: left;
`;

const QuestionText = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const OptionText = styled.p`
  margin: 0.25rem 0;
  color: ${({ isCorrect, isSelected }) => 
    isCorrect ? 'green' : isSelected ? 'red' : '#333'};
`;

const StyledWrapper = styled.div`
  margin-top: 2rem;

  .btn {
    color: purple;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid purple;
    padding: 10px 20px;
    font-size: 17px;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.4s ease;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: white;
    color: blue;
    border-color: blue;
  }
`;

const QuizResult = () => {
  const { quizId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { userAnswers = [], score = 0 } = location.state || {};
  const [showConfetti, setShowConfetti] = useState(false);

  const currentQuiz = quizzes.find(q => q.id === quizId);
  const totalQuestions = currentQuiz?.questions.length || 0;
  const percentageCorrect = (score / totalQuestions) * 100;

  
// confetti
  useEffect(() => {
    if (percentageCorrect >= 60) {
      setShowConfetti(true);

      // Hide the confetti after 3 seconds
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 7000);

      // Cleanup timer on component unmount or when `percentageCorrect` changes
      return () => clearTimeout(timer);
    }
  }, [percentageCorrect]);

  if (!currentQuiz) {
    return (
      <ResultPageWrapper>
        <h2>Quiz not found</h2>
        <StyledWrapper>
          <button className="btn" onClick={() => navigate('/')}>Go Back to Quizzes</button>
        </StyledWrapper>
      </ResultPageWrapper>
    );
  }

  return (
    <ResultPageWrapper>
      {showConfetti && <Confetti />}
      
      <h2>Quiz Results</h2>
      <ScoreText score={score} total={totalQuestions}>
        Your score: {score} / {totalQuestions}
      </ScoreText>

      {currentQuiz.questions.map((question, index) => (
        <QuestionReview key={index}>
          <QuestionText>{question.questionText}</QuestionText>
          {question.options.map((option) => (
            <OptionText 
              key={option.id} 
              isCorrect={option.id === question.correctOptionId}
              isSelected={userAnswers[index] === option.id}
            >
              {option.text}
            </OptionText>
          ))}
        </QuestionReview>
      ))}

      <StyledWrapper>
        <button className="btn" onClick={() => navigate(`/quiz/${quizId}`)}>Go Back to Quizzes</button>
      </StyledWrapper>
    </ResultPageWrapper>
  );
};

export default QuizResult;
